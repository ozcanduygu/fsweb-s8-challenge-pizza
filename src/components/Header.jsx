import React from "react";
// import logo from '../images/iteration-1-images/logo.svg';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.heading}>Teknolojik Yemekler</h1>
      {/* <img src={logo} alt="Logo" style={styles.heading} /> */}
      <nav style={styles.nav}>
        <a href="#" style={styles.navLink}>Anasayfa</a>
        <a href="#" style={styles.navLink}>Sipariş Oluştur</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "207px",
    backgroundColor: "#CE2829",
    display: "flex",
    flexDirection: "column",   // Dikey yerleşim
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
    boxSizing: "border-box",
    zIndex: 9999,
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    fontFamily: "'Roboto', sans-serif",
    color: "#ffffff",
    margin: "0 0 20px 0",  // Başlık ile menü arası boşluk
    width:'361px',
    height:'45.79px'
  },
  nav: {
    display: "flex",
    gap: "30px",
    width: '182px',
    height:'29px'
  },
  navLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Header;
