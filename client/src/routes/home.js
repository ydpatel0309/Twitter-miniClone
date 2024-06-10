import React, { useState, useEffect } from "react";
import HomeBody from "../components/HomeBody";
import "./Loader.css"; 
import loaderImage from '../asset/x.jpg'; 
function Home() {
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisible(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <div className={`loader ${loaderVisible ? "" : "hidden"}`}>
        <img src={loaderImage} alt="Loading" />
      </div>
      <HomeBody />
    </>
  );
}

export default Home;
