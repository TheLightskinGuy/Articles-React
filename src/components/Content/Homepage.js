import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import classes from "./Homepage.module.css";
import FirstPopularArticle from "./FirstPopularArticle";
import SecondRowArticles from "./SecondRowArticles";
import ThirdRowArticles from "./ThirdRowArticles";
import FourthRowArticles from "./FourthRowArticles";
import ContainerCard from "../UI/ContainerCard";
import AllArticles from "./AllArticles";
import Input from "./Input";

const PopularMain = () => {
  const [inputValue, setInputValue] = useState("");
  const [showArticles, setShowArticles] = useState(false);
  const [popularData, setPopularData] = useState(null);
  const [allArticlesData, setAllArticlesData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (inputValue.trim() === "") return;

    const fetchData = async () => {
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
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [inputValue]);

  console.log(allArticlesData);
  console.log(error);

  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  const articlesHandler = () => {
    setShowArticles(!showArticles);
  };

  return (
    <div>
      <Input onButtonClick={handleButtonClick} />

      {popularData && popularData.total === 0 && (
        <p className={classes.dataErrorMessage}>No data found...</p>
      )}

      {popularData && popularData.total !== 0 && (
        <ContainerCard>
          <div className={classes.header}>
            <h3>POPULAR</h3>
          </div>

          <FirstPopularArticle data={popularData} />

          <div className={classes.restRowArticles}>
            {popularData.hits.slice(1, 4).map((item, index) => (
              <SecondRowArticles key={index} data={item} />
            ))}
          </div>

          {showArticles && (
            <>
              <div className={classes.restRowArticles}>
                {popularData.hits.slice(5, 9).map((item, index) => (
                  <ThirdRowArticles key={index} data={item} />
                ))}
              </div>

              <div className={classes.restRowArticles}>
                {popularData.hits.slice(6, 12).map((item, index) => (
                  <FourthRowArticles key={index} data={item} />
                ))}
              </div>

              <div className={classes.restRowArticles}>
                {popularData.hits.slice(14, 20).map((item, index) => (
                  <FourthRowArticles key={index} data={item} />
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

          {allArticlesData.hits.slice(0, 5).map((item, index) => (
            <AllArticles key={index} data={item} />
          ))}

          <div className={classes.prevButtons}>
            <button className={classes.button}>
              <FaArrowLeft />
              <span className={classes.buttonText}>Old Post</span>
            </button>
            <button className={classes.button}>
              <span className={classes.buttonText}>New Post</span>
              <FaArrowRight />
            </button>
          </div>
        </ContainerCard>
      )}
    </div>
  );
};

export default PopularMain;
