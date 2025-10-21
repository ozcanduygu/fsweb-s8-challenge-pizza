import React, { useState } from "react";
import OrderDescription from "../components/OrderDescription";
import ProductInfo from "../components/ProductInfo";
import DoughOptions from "../components/DoughOptions";
import SizeOptions from "../components/SizeOptions";
import ExtraIngredients from "../components/ExtraIngredients";
import OrderNote from "../components/OrderNote";
import QuantitySelector from "../components/QuantitySelector";
import OrderSummary from "../components/OrderSummary";
import NameInput from "../components/NameInput";

const styles = {
  container: {
    width: "532px",
    maxWidth: "100%",
    margin: "0 auto",
    padding: "32px",
    paddingTop: "207px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
  },
};

const OrderPage = () => {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [name, setName] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [note, setNote] = useState("");

  const isSizeValid = size !== "";
  const isDoughValid = dough !== "";
  const isNameValid = name.trim().length >= 3;
  const isToppingsValid =
    selectedIngredients.length >= 4 && selectedIngredients.length <= 10;

  const isFormValid =
    isSizeValid && isDoughValid && isNameValid && isToppingsValid;

  return (
    <div style={styles.container}>
      <ProductInfo />
      <OrderDescription />

      <div style={styles.row}>
        <SizeOptions size={size} onSizeChange={(e) => setSize(e.target.value)} />
        <DoughOptions dough={dough} onDoughChange={(e) => setDough(e.target.value)} />
      </div>

      <ExtraIngredients
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
      />

      <OrderNote value={note} onChange={(e) => setNote(e.target.value)} />

      <div style={styles.row}>
        <NameInput value={name} onChange={(e) => setName(e.target.value)} />
        <QuantitySelector />
      </div>

      <OrderSummary isFormValid={isFormValid} />
    </div>
  );
};

export default OrderPage;
