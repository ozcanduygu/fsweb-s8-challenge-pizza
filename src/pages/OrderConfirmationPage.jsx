import React from "react";
import OrderConfirmationMessage from "../components/OrderConfirmationMessage";
import Header from "../components/Header";

const OrderConfirmationPage = () => {
  return (
    <div
      style={{
        backgroundColor: '#CE2829',
        width: "100vw",
        height: "207px",
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <header>
        <Header />
      </header>
      <OrderConfirmationMessage />
    </div>
  );
};

export default OrderConfirmationPage;
