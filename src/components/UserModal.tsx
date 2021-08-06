import React from "react";
import "./UserModal.css";
interface IProps {
  onClose(value: boolean): void;
}
export const UserModal: React.FC<IProps> = ({ onClose }) => {
  const handleClick = () => {
    onClose(false);
  };
  return (
    <div className="Modal">
      <div className="UserModal">
        <div className="UserModalInput">
          ID <input dir="sd" />
        </div>
        <button className="button" type="button" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};
