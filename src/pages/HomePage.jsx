import React from "react";
import image from '../assets/home-banner.png';
import HomePageTitle from "../components/HomePageTitle";
import HungryButton from "../components/HungryButton";

const HomePage = () => {
    const styles = {
    backgroundContainer: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",            
      backgroundPosition: "center",       
      backgroundRepeat: "no-repeat",      
      width: "100%",                     
      height: "100vh",                    
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      overflowX: 'hidden',
      
    },
  };


    return(
        <div style={styles.backgroundContainer}>
            <HomePageTitle/>
            <HungryButton/>
        </div>
    )
}
export default HomePage;