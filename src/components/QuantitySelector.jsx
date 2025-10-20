import React, {useState} from "react";

const QuantitySelector = () => {
    const[count,setCount]=useState(1);

    const decrease=()=>{
        if (count > 1) setCount(count - 1);
    }
    const increase=()=>{
        setCount(count + 1);
    }
    return(
        <div style={styles.container}>
            <button style={styles.button} onClick={decrease}>-</button>
            <div style={styles.count}><span>{count}</span></div>
            <button style={styles.button} onClick={increase}>+</button>
        </div>
    )
};
const styles={
    container: {
    width: "170px",
    height: "57px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    boxSizing: "border-box",
  },
  button: {
    fontSize: "20px",
    width: "32px",
    textAlign: "center",
    height: "32px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#FDC913",
    color: "#000",
    cursor: "pointer",
    fontWeight: "bold",
  },
  count: {
    fontSize: "18px",
    fontWeight: "600",
    width: "56px",
    height:"56px",
    textAlign: "center",
    border:"1px solid #ccc",

  },
}
export default QuantitySelector;