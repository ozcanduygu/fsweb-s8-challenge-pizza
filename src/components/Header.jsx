import React from "react";
import logo from '../assets/logo.svg';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <img src={logo} alt="Teknolojik Yemekler Logo" style={styles.logo} />
      
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Anasayfa</Link>
        <Link to="/order" style={{ ...styles.navLink, fontSize: '24px', fontWeight: '500' }}>Sipariş Oluştur</Link>
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
  logo: {
    width: '361px',
    height: '45.79px',
    marginBottom: '20px',
  },
  nav: {
    display: "flex",
    gap: "30px",
    width: '182px',
    height:'29px',
    marginLeft:'-300px'
  },
  navLink: {
    color: "#ffffff",
    fontFamlily: 'Barlow, sans-serif',
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Header;
