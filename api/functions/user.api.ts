import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const loginFunction = async (data : {user : string, password : string}) => {
 
  try{
    const res = await axiosInstance.post(endpoints.auth.login, data);
    console.log(res,"test res2")
  return res;
  } catch(err){
    console.log("test error",err)
  }
  
  
};

export const tokenCheck = async(token : string) =>{
  const res = await axiosInstance.get(endpoints.auth.me, {
    headers : {
      Authorization : `Bearer ${token}`
    }
  })
  return res
}
