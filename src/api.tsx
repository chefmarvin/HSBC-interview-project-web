import axios from 'axios';

export const getTopN = async (n: number) => {
  try {
    const { data: num } = await axios({
      method: "get",
      url: import.meta.env.VITE_API_URL + `/top-n/${n}`,
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