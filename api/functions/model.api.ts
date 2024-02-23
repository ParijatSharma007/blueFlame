import { IAccountModelList } from "@/interface/modeapi.interface";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export interface IGetModelListItem {
  id: string;
  entityType: string;
  creationDate: number;
  lastModifiedDate: number;
  lastModifiedUser: string;
  isDeleted: boolean;
  name: string;
  description: string;
  modalities: string[];
}
export type IGetModelList = IGetModelListItem[];

export const GetModelList = async () => {
  const res = await axiosInstance.get<IGetModelList>(endpoints.model.list);

  return res;
};

export const GetAccountModelList = async () => {
  const res = await axiosInstance.get<IAccountModelList>(
    endpoints.accountModel.list
  );

  return res;
};

export const GetAccountModelDetails = async (id: string) => {
  const res = await axiosInstance.get<IAccountModelList>(
    endpoints.accountModel.details(id)
  );

  return res;
};

export const ActiveAccountModel = async (data) => {
  const res = await axiosInstance.post<IAccountModelList>(
    endpoints.accountModel.details(data?.id),
    data
  );

  return res;
};
