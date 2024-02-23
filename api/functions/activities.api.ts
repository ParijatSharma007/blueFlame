import {
  IActivityDetailsData,
  IGetActivityDetails
} from "@/interface/apiresponse.interface";

import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export interface IGetActivityListItem {
  id: string;
  objective?: string;
  threadState?: string;
}

export type IGetActivityList = IGetActivityListItem[];

export const GetActivityList = async () => {
  try {
    const res = await axiosInstance.get<IGetActivityList>(endpoints.agent.list);

    return res;
  } catch (error) {
    return null;
  }
};

export const GetActivityDetails = async (id: string | string[] | undefined) => {
  try {
    const res = await axiosInstance.get<IGetActivityDetails>(
      endpoints.agent.details(id)
    );

    return res;
  } catch (error) {
    return null;
  }
};

export const getTaskList = async (id: string) => {
  const res = await axiosInstance.get<IActivityDetailsData>(
    `/agent/${id}/taskTree`
  );

  return res;
};
