import React from "react";
const NameInput = ({ value, onChange, error }) => {
    return(
        <div>
            <label  style={{ display: "block", textAlign: "left", marginBottom: "8px" }}>Adınızı Giriniz:</label>
            <input
                type="text"
                placeholder="Adınızı giriniz"
                id="name"
                value={value}
                onChange={onChange}
                name="name"
                style={{
                    padding: "10px",
                    border: error ? "2px solid red" : "1px solid #ccc",
                    borderRadius: "4px",
                    width: "100%",
                    }}
                    required
                    minLength={3}
            />
                  {error && (
                    <p style={{ color: "red", fontSize: "14px" }}>
                    İsim en az 3 karakter olmalı
                    </p>
      )}
        </div>
    )
}
export default NameInput;