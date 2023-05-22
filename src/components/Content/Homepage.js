import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import classes from "./Homepage.module.css";
import FirstPopularArticle from "./FirstPopularArticle";
import SecondRowArticles from "./SecondRowArticles";
import ThirdRowArticles from "./ThirdRowArticles";
import FourthRowArticles from "./FourthRowArticles";
import ContainerCard from "../UI/ContainerCard";
import ModalWrapper from "../UI/ModalWrapper";
import AllArticles from "./AllArticles";
import Input from "./Input";

const Homepage = () => {
  const [inputValue, setInputValue] = useState("");
  const [showArticles, setShowArticles] = useState(false);
  const [popularData, setPopularData] = useState(null);
  const [allArticlesData, setAllArticlesData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const articlesPerPage = 5;

  useEffect(() => {
    if (inputValue.trim() === "") return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const popularResponse = await fetch(
          `https://pixabay.com/api/?key=36230561-080283bbc4af659aee580749e&q=${encodeURIComponent(
            inputValue
          )}&category=popular&image_type=photo`
        );
        const allArticlesResponse = await fetch(
          `https://pixabay.com/api/?key=36230561-080283bbc4af659aee580749e&q=${encodeURIComponent(
            inputValue
          )}&image_type=photo`
        );

        const popularData = await popularResponse.json();
        const allArticlesData = await allArticlesResponse.json();

        setPopularData(popularData);
        setAllArticlesData(allArticlesData);

        if (popularData.total === 0) {
          setShowNoDataMessage(true);
          setTimeout(() => {
            setShowNoDataMessage(false);
          }, 1500);
        }
      } catch (error) {
        setError(error.message);
      }
      if (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [inputValue, error]);

  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  const articlesHandler = () => {
    setShowArticles(!showArticles);
  };

  const handleArticleClick = (index) => {
    setSelectedArticleIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevPageAll = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPageAll = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClickModal = () => {
    setSelectedArticleIndex((prevIndex) =>
      prevIndex > 0 ? parseInt(prevIndex) - 1 : popularData.hits.length - 1
    );
  };

  const handleNextClickModal = () => {
    setSelectedArticleIndex((prevIndex) =>
      prevIndex < popularData.hits.length - 1 ? parseInt(prevIndex) + 1 : 0
    );
  };

  const displayedArticles = allArticlesData?.hits?.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const totalPages = Math.ceil(
    (allArticlesData?.hits?.length || 0) / articlesPerPage
  );

  const isPrevButtonDisabled = currentPage === 1;
  const isNextButtonDisabled =
    currentPage === totalPages || (displayedArticles?.length || 0) === 0;

  return (
    <div>
      {isModalOpen && (
        <ModalWrapper
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          handlePrevClick={handlePrevClickModal}
          handleNextClick={handleNextClickModal}
        >
          {selectedArticleIndex !== null && (
            <FirstPopularArticle
              containerClass={"modalContainer"}
              imageClass={"imageContainer"}
              rowClass={"rowContainer"}
              data={popularData.hits[selectedArticleIndex]}
            />
          )}
        </ModalWrapper>
      )}

      <Input onButtonClick={handleButtonClick} />

      {isLoading && <div className={classes.spinner}></div>}

      {showNoDataMessage && (
        <div className={classes.dataErrorMessage}>
          <p>No data found...</p>
        </div>
      )}

      {popularData && popularData.total !== 0 && (
        <ContainerCard>
          <div className={classes.header}>
            <h3>POPULAR</h3>
          </div>
          <FirstPopularArticle
            data={popularData?.hits[0]}
            containerClass={"container"}
            imageClass={"image"}
            onClick={() => handleArticleClick("0")}
          />
          <div className={classes.restRowArticles}>
            {popularData.hits.slice(1, 4).map((item, index) => (
              <SecondRowArticles
                key={index}
                data={item}
                onClick={() => handleArticleClick(index + 1)}
              />
            ))}
          </div>
          {/* if there are Articles in API call, render the rows components */}
          {showArticles && (
            <>
              <div className={classes.restRowArticles}>
                {popularData.hits.slice(4, 8).map((item, index) => (
                  <ThirdRowArticles
                    key={index}
                    data={item}
                    onClick={() => handleArticleClick(index + 4)}
                  />
                ))}
              </div>

              <div className={classes.restRowArticles}>
                {popularData.hits.slice(8, 14).map((item, index) => (
                  <FourthRowArticles
                    key={index}
                    data={item}
                    onClick={() => handleArticleClick(index + 8)}
                  />
                ))}
              </div>

              <div className={classes.restRowArticles}>
                {popularData.hits.slice(14).map((item, index) => (
                  <FourthRowArticles
                    key={index}
                    data={item}
                    onClick={() => handleArticleClick(index + 14)}
                  />
                ))}
              </div>
            </>
          )}

          <div className={classes.seeMoreArticles}>
            <p onClick={articlesHandler}>
              {showArticles ? "HIDE ALL ARTICLES" : "SEE ALL POPULAR ARTICLES"}
            </p>
          </div>
          <div className={classes.horizontalLine}></div>
          <div className={classes.header}>
            <h3>ALL ARTICLES</h3>
          </div>
          {/* use the logic for pages via Api call entries / num of pages (5 items on page)*/}
          {displayedArticles &&
            displayedArticles.map((item, index) => (
              <AllArticles key={index} data={item} />
            ))}
          <div className={classes.prevButtons}>
            <button
              className={classes.button}
              onClick={handlePrevPageAll}
              disabled={isPrevButtonDisabled}
            >
              <FaArrowLeft />
              <span className={classes.buttonText}>Old Post</span>
            </button>
            <button
              className={classes.button}
              onClick={handleNextPageAll}
              disabled={isNextButtonDisabled}
            >
              <span className={classes.buttonText}>New Post</span>
              <FaArrowRight />
            </button>
          </div>
        </ContainerCard>
      )}
    </div>
  );
};

export default Homepage;
