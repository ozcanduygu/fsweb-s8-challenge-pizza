import React from "react";

const ProductInfo=()=>{
    return(
        <div style={styles.container}>
            <h2 style={styles.title}>Position Absolute Acı Pizza</h2>
            <div style={styles.bottomRow}>
                <p style={styles.price}>85.50₺</p>
                <p style={styles.rating}>4.9 <span style={styles.commentCount}>(200)</span></p>
            </div>
        </div>
    )
}
const styles={
    container:{
        width: "531px",
        height: "107px",
        margin: "40px auto", // Sayfa ortasında ve üstten boşluk
        opacity: 1,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    title:{
        width: '488px',
        height: '56px',
        color: '#000000',
        lineHeight:'29.44px',
        fontWeight:'600px',
        fontFamily:'Barlow',
        letterSpacing:'0px'
    },
    bottomRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    price: {
        fontSize: "24px",
        fontWeight: "700",
        color: "#000000",
        margin: 0,
  },
    rating: {
        fontSize: "16px",
        color: "#5F5F5F",
        fontWeight: "500",
        margin: 0,
  },
    commentCount: {
        color: "#B0B0B0",
        marginLeft: "4px",
    },
}

export default ProductInfo;