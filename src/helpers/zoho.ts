"use server";
import axios from "axios";

export const zohoRefreshToken = async () => {
  const url = `${process.env.ZOHO_URL}?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`;
  const response = await axios.post(url);
  const accessToken = response.data?.access_token;
  console.log(accessToken);
  return response.data;
};

export const getRecord = async () => {
  const response = axios.get("https://www.zohoapis.com/crm/v7/VIATURAS");
  console.log(response);
};
