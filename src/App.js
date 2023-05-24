import { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import Homepage from "./components/Content/Homepage";

function App() {
  const [bookmarkedData, setBookmarkedData] = useState(
    JSON.parse(localStorage.getItem("bookmarkedData")) || []
  );

  const handleBookmarkClick = (data) => {
    if (!bookmarkedData.some((item) => item.id === data.id)) {
      const updatedData = [data, ...bookmarkedData];
      setBookmarkedData(updatedData);
      localStorage.setItem("bookmarkedData", JSON.stringify(updatedData));
    } else {
      const updatedData = bookmarkedData.filter((item) => item.id !== data.id);
      setBookmarkedData(updatedData);
      localStorage.setItem("bookmarkedData", JSON.stringify(updatedData));
    }
  };

  return (
    <>
      <Navbar
        bookmarkedData={bookmarkedData}
        onBookmarkClick={handleBookmarkClick}
      />
      <Homepage
        bookmarkedData={bookmarkedData}
        onBookmarkClick={handleBookmarkClick}
      />
    </>
  );
}

export default App;
