import { IAccountUser } from "@/interface/apiresponse.interface";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints/index";

export interface Account {
  entityType: string;
  id: string;
}

export interface IPerson {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IpeopleListItem {
  id: string;
  entityType: string;
  creationDate: string;
  lastModifiedDate: string;
  lastModifiedUser: string;
  isDeleted: boolean;
  account: IAccountUser;
  person: IPerson;
  secondaryEmails: string[];
  autoupdateO365Calendar: boolean;
}

export type IpeopleList = IpeopleListItem[];

export const getpeopleList = async () => {
  const res = await axiosInstance.get<IpeopleList>(endpoints.people.list);

  return res;
};
