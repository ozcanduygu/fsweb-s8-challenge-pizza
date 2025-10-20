import React,{useState} from "react";
const OrderSummary=()=>{
    const selectedExtras=5*3;
    const basePrice=85.5;
    const totalPrice=basePrice+selectedExtras;
    return(
        <div style={styles.container}>
           <h3 style={styles.title}>Sipariş Toplamı</h3>
           <div style={styles.row}>
             <span>Seçimler</span>
             <span>{selectedExtras.toFixed(2)}₺</span>
           </div>
           <div style={styles.row}>
            <span style={{ fontWeight: "bold" }}>Toplam</span>
            <span style={{ fontWeight: "bold" }}>{totalPrice.toFixed(2)}₺</span>
           </div>
           <button style={styles.button}>SİPARİŞ VER</button>
        </div>
    )   
};
const styles = {
  container: {
    width: "370px",  // Görseldeki gibi genişçe bir kutu
    padding: "24px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Barlow, sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
  },
    button: {
    marginTop: "16px",
    padding: "12px",
    backgroundColor: "#FDC913",
    color: "#000",
    fontWeight: "600",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }
};
export default OrderSummary;