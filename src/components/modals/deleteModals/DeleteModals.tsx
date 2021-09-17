import React from "react";
import "./DeleteModals.scss";
import axios from "axios";
import { IUser } from "../../../types/User";
interface IProps {
  onClose(): void;
  deleteUser: IUser;
}
export const DeleteModal: React.FC<IProps> = ({ onClose, deleteUser }) => {
  const handleDelete = () => {
    if (deleteUser.id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${deleteUser.id}`)
        .then((response) => {
          if (response.data) {
          }
        })
        .catch((error) => console.log(error));
    }

    onClose();
  };
  return (
    <div className="Modal">
      <div className="DeleteModal">
        <div className="DeleteModalText">
          You definitely want to delete the user by name {`${deleteUser.name}`}?
        </div>
        <div className="DeleteModalButton">
          <button className="button" type="button" onClick={handleDelete}>
            Ok
          </button>
          <button className="button" type="button" onClick={() => onClose()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
