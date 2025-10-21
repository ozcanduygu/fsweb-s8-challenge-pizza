import React from "react";

const OrderConfirmationMessage = () => {
  return (
    <div
      style={{
        maxWidth: '724px',
        fontFamily: '"Roboto Condensed", sans-serif',
        fontWeight: 300,
        fontSize: '86px',
        lineHeight: '92px',
        letterSpacing: '1.5px',
        textAlign: 'center',
        textTransform: 'uppercase',
        opacity: 1,
        margin: '0 auto',
      }}
    >
      Tebrikler! Siparişiniz alındı.
    </div>
  );
};

export default OrderConfirmationMessage;
