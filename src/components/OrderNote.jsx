import React, {useState} from "react";
const OrderNote =()=>{
    const [note, setNote] = useState("");

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    }
    
    return (
        <div style={styles.container}>
            <label htmlFor="orderNote" style={styles.label}>Sipariş Notu</label>
            <textarea
                id="orderNote"
                value={note}
                onChange={handleNoteChange}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                style={styles.textarea}
                />
        </div>
    )
};
const styles = {
    container: {
        marginTop: "24px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "524px",
        },
    label: {
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "8px",
        fontFamily: "Barlow, sans-serif",
        color: "#292929",
        textAlign: "left",
    },
    textarea: {
        width: "531px",
        height: "56px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#CCCCCC",
        borderRadius: "6px", // verdiğin radius
        padding: "12px",
        fontSize: "14px",
        fontFamily: "Barlow, sans-serif",
        lineHeight: "1.5",
        outline: "none",
        resize: "none",
        opacity: 1,
        boxSizing: "border-box", // padding ile taşmayı önler
},

}
export default OrderNote;