import axios from 'axios';

const baseURL = import.meta.env.DEV ? import.meta.env.VITE_API_URL_DEV : import.meta.env.VITE_API_URL_PROD;

export const getTopN = async (n: number) => {
  try {
    const { data: num } = await axios({
      method: "get",
      url: baseURL + `/top-n/${n}`,
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    return num.data;
  } catch (error) {
    console.error(error)
  }
};