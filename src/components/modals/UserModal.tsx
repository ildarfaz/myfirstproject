import React, { useState } from "react";
import "../../scss/UserModal.scss";
import axios from "axios";
interface IProps {
  onClose(): void;
}
export const UserModal: React.FC<IProps> = ({ onClose }) => {
  const [userID, setUserID] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const handleSave = () => {
    if (userID && newTitle && newBody) {
      axios
        .post(`http://jsonplaceholder.typicode.com/posts`, {
          userID,
          newTitle,
          newBody,
        })
        .then((response) => {
          if (response.data) {
            onClose();
            console.log(response.data);
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="Modal">
      <div className="UserModal">
        <div className="UserModalInput">
          UserID:{" "}
          <input
            type="number"
            placeholder="0"
            onChange={(event) => setUserID(event.target.value)}
          />
          Title:{" "}
          <input
            type="text"
            placeholder="Title"
            onChange={(event) => setNewTitle(event.target.value)}
          />
          Body:{" "}
          <input
            type="text"
            placeholder="Body"
            onChange={(event) => setNewBody(event.target.value)}
          />
        </div>
        <div className="UserModalButton">
          <button className="button" type="button" onClick={handleSave}>
            Save
          </button>
          <button className="button" type="button" onClick={() => onClose()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
