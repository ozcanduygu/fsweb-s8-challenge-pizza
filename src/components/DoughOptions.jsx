import React,{useState} from "react";

const DoughOptions = () => {
    const [selectedDough, setSelectedDough] = React.useState("Thin Crust");

    const handleDoughChange = (e) => {
        setSelectedDough(e.target.value);
    }

    return (
        <div style={styles.container}>
            <label htmlFor="dough" style={styles.label}>Hamur Seç</label>
            <select
                id="dough"
                value={selectedDough}
                onChange={handleDoughChange}
                style={styles.select}
            >
                <option value="ince">İnce Hamur</option>
                <option value="orta">Orta Hamur</option>
                <option value="kalın">Kalın Hamur</option>

            </select>
        </div>
    )
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "159px",
    height: "75px",
    fontFamily: "Barlow, sans-serif",
  },
  label: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#292929",
    textAlign: "left",
  },
  select: {
    padding: "8px",
    borderRadius: "4px",
    fontSize: "16px",
  },
};

export default DoughOptions;