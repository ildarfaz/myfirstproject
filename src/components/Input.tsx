import React from "react";
function Input({ onChangeInput }) {
  return (
    <div className="header_input">
      <input
        type="text"
        placeholder="Search for a contact"
        id="input1"
        onChange={(even) => onChangeInput(even.target.value)}
      />
    </div>
  );
}
export default Input;
