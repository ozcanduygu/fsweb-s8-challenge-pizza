import React  from "react";
import OrderDescription from "../components/OrderDescription";
import ProductInfo from "../components/ProductInfo";
import DoughOptions from "../components/DoughOptions";
import SizeOptions from "../components/SizeOptions";
import ExtraIngredients from "../components/ExtraIngredients";  
import OrderNote from "../components/OrderNote";
import QuantitySelector from "../components/QuantitySelector"; 
import OrderSummary from "../components/OrderSummary";
const styles = {
  pageContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 32px", 
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
};

const OrderPage=()=>{
    return (
        <div style={{position: "relative" }}>
          
            <div style={styles.pageContent}>
            <ProductInfo />
            <OrderDescription />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto", padding: "0 32px 40px 32px" }}>
                <SizeOptions />
                <DoughOptions />
            </div>
            <div>
                <ExtraIngredients />
            </div>
            <div>
                <OrderNote />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto", padding: "0 32px 40px 32px" }}>
                <QuantitySelector />
                <OrderSummary />
            </div>
        </div>
    )
}


export default OrderPage;