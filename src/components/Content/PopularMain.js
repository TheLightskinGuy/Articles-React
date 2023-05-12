import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import classes from "./PopularMain.module.css";
import ContainerCard from "../UI/ContainerCard";
import TestImg from "../assets/TestImg.png";
import ButtonsInCards from "../UI/ButtonsInCards";
import AllArticles from "./AllArticles";
import Input from "./Input";

const PopularMain = () => {
  const [inputValue, setInputValue] = useState("");
  const [showArticles, setShowArticles] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (inputValue.trim() === "") return;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=36230561-080283bbc4af659aee580749e&q=${encodeURIComponent(
            inputValue
          )}&image_type=photo`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    // if (inputValue) {
    //   fetchData();
    // }
    fetchData();
  }, [inputValue]);

  console.log(error);
  console.log(data);

  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  const articlesHandler = () => {
    setShowArticles(!showArticles);
  };

  return (
    <div>
      <Input onButtonClick={handleButtonClick} />
      {data && data.total !== 0 && (
        <ContainerCard>
          {/* {data && data.total === 0 ? (
            <p>No items found</p>
          ) : (
            data?.hits?.map((item) => <h1 key={item.id}>{item.tags}</h1>)
          )} */}
          <div className={classes.header}>
            <h3>POPULAR</h3>
          </div>
          <div className={classes.container}>
            <div className={classes.cardContent}>
              <h1>{data?.hits[0]?.user}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                posuere nibh tempor fringilla porta pellentesque ipsum.
              </p>
              <div className={classes.cardContentAllign}>
                <div className={classes.allignInfo}>
                  <p className={classes.infosName}>Veronica Micle</p>
                  <p className={classes.infosLikesComm}>May 5, 3 min read</p>
                </div>
                <div className={classes.row}>
                  <ButtonsInCards class={"big"} />
                </div>
              </div>
            </div>
            <div>
              <img
                className={classes.image}
                src={TestImg}
                alt="Header Banner"
              />
            </div>
          </div>

          <div className={classes.seeMoreArticles}>
            <p onClick={articlesHandler}>
              {showArticles ? "HIDE ALL ARTICLES" : "SEE ALL POPULAR ARTICLES"}
            </p>
          </div>
          <div className={classes.horizontalLine}></div>
          <div className={classes.header}>
            <h3>ALL ARTICLE</h3>
          </div>

          <AllArticles image={TestImg} />

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
