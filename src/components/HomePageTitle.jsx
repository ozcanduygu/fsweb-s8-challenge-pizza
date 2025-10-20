import React from "react";

const HomePageTitle = () => {
    return(
        <div style={styles.container}>
            <h1 style={styles.title}>KOD ACIKTIRIR PİZZA, DOYURUR</h1>
        </div>
    )
}

const styles={
    container:{
        width: '693px',
        height:'195px',
    },
    title:{
        fontFamily: 'Roboto Condensed, sans-serif',
        fontSize:'86px',
        color:'white',
        fontWeight:'300',
        fonstStyle:'light',
        textAlign:'center',
        lineHeight:'102px',
        paddingTop:'0px',
        marginTop:'-100px',
    }
}
export default HomePageTitle;