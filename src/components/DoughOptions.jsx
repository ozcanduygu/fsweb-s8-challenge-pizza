import React from "react";

const DoughOptions = ({ dough, onDoughChange }) => {
  return (
    <div style={styles.container}>
      <label htmlFor="dough-select" style={styles.label}>
        Hamur Seç
      </label>
      <select
        id="dough-select"
        value={dough}
        onChange={onDoughChange}
        style={styles.select}
      >
        <option value="">Hamur Kalınlığı Seç</option>
        <option value="ince">İnce Hamur</option>
        <option value="orta">Orta Hamur</option>
        <option value="kalın">Kalın Hamur</option>
      </select>
    </div>
  );
};

const styles = {
  container: {
    width: "147px",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Barlow, sans-serif",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#292929",
    marginBottom: "8px",
    textAlign: "left",
  },
  select: {
    height: "40px",
    fontSize: "14px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
  },
};

export default DoughOptions;
