import React from "react";

export type IUser = {
  id: number;
  name: string;
  email: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    city: string;
    street: string;
  };
};
export type IUsers = {
  users: IUser[];
};
