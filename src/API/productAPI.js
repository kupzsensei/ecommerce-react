import { BASE_URL } from ".";

export const getProductAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/products/`, {
    method: "GET",
    // body: postData,
  });

  const res = await response.json();
  console.log(res);
  return res;
};

export const createProductAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/products/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: postData,
  });

  const res = await response.json();
  return res;
};
