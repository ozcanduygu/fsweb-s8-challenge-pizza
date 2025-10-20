import React, { useState } from "react";

const ExtraIngredients = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const extraIngredients = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalapeno",
    "Sarımsak",
    "Biber",
    "Zeytin",
    "Ananas",
    "Kabak",
  ];

  const handleIngredientChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (selectedIngredients.length < 10) {
        setSelectedIngredients([...selectedIngredients, value]);
      }
    } else {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== value));
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.title}>Ek Malzemeler</p>
      <p style={styles.description}>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
      <div style={styles.checkboxList}>
        {extraIngredients.map((item, index) => (
          <label key={index} style={styles.label}>
            <input
              type="checkbox"
              value={item}
              checked={selectedIngredients.includes(item)}
              onChange={handleIngredientChange}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "32px",
    fontFamily: "Barlow, sans-serif",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#292929",
    marginBottom: "4px",
    textAlign: "left",
  },
  description: {
    fontSize: "14px",
    color: "#5F5F5F",
    marginBottom: "12px",
    textAlign: "left",
  },
  checkboxList: {
    width: "524px",
    height:"214px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
  },
  label: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
};

export default ExtraIngredients;
