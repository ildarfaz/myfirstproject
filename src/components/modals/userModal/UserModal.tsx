import React from "react";
import "./UserModal.scss";
import axios from "axios";
import { IUser } from "../../../types/User";
interface IProps {
  onClose(): void;
  changeUser?: IUser;
}
enum modeSave {
  create,
  change,
}
export const UserModal: React.FC<IProps> = ({ onClose, changeUser }) => {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [website, setWebsite] = React.useState("");
  let mode = modeSave.create;
  if (changeUser !== undefined) {
    mode = modeSave.change;
  }
  React.useEffect(() => {
    if (changeUser !== undefined) {
      setUserName(changeUser.name);
      setEmail(changeUser.email);
      setCompanyName(changeUser.company.name);
      setCity(changeUser.address.city);
      setStreet(changeUser.address.street);
      setWebsite(changeUser.website);
    }
  }, [changeUser]);

  const handleSave = () => {
    if (mode === modeSave.create) {
      if (userName && email && companyName && city && street && website) {
        axios
          .post(`http://jsonplaceholder.typicode.com/users`, {
            userName,
            email,
            companyName,
            city,
            street,
            website,
          })
          .then((response) => {
            if (response.data) {
              onClose();
              console.log(response.data);
            }
          })
          .catch((error) => console.log(error));
      }
    } else {
      if (userName && email && companyName && city && street && website) {
        axios
          .put(`http://jsonplaceholder.typicode.com/users/${changeUser!.id}`, {
            userName,
            email,
            companyName,
            city,
            street,
            website,
          })
          .then((response) => {
            if (response.data) {
              onClose();
              console.log(response.data);
            }
          })
          .catch((error) => console.log(error));
      }
    }
  };
  return (
    <div className="Modal">
      <div className="UserModal">
        <div className="UserModalInput">
          Name:{" "}
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          Email:{" "}
          <input
            type="Email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          Company name:{" "}
          <input
            type="text"
            placeholder="Company name"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
          />
          City:{" "}
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          Street:{" "}
          <input
            type="text"
            placeholder="Street"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
          Website:{" "}
          <input
            type="text"
            placeholder="Website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
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
