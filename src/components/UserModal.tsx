import React from "react";
import "./UserModal.css";
import axios from "axios";
interface IProps {
  onClose(value: boolean): void;
}
export const UserModal: React.FC<IProps> = ({ onClose }) => {
  const handleSave = () => {
    let userID = (document.getElementById(`newUserID`) as HTMLInputElement)
      .value;
    let newTitle = (document.getElementById(`newTitle`) as HTMLInputElement)
      .value;
    let newBody = (document.getElementById(`newBody`) as HTMLInputElement)
      .value;
    if (userID && newTitle && newBody) {
      axios
        .post(`http://jsonplaceholder.typicode.com/posts`, {
          userID,
          newTitle,
          newBody
        })
        .then((response) => response)
        .then((json) => console.log(json));
      onClose(false);
    }
  };

  return (
    <div className="Modal">
      <div className="UserModal">
        <div className="UserModalInput">
          UserID: <input type="number" placeholder="0" id="newUserID" />
          <br />
          Title: <input type="text" placeholder="Title" id="newTitle" />
          <br />
          Body: <input type="text" placeholder="Body" id="newBody" />
        </div>
        <div className="UserModalButton">
          <button className="button" type="button" onClick={handleSave}>
            Save
          </button>
          <button
            className="button"
            type="button"
            onClick={() => onClose(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
