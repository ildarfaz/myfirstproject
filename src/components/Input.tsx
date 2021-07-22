import React from "react";
function Input({onChange}:any) {
  return (
    <div className="header_input">
      <input
        type="text"
        placeholder="Search for a contact"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
export default Input;
