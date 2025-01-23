import { BASE_URL } from ".";

export const getCartAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/cart/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    // body: postData,
  });
  const res = await response.json();
  return res;
};
export const addtoCartAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/cart/`, {
    method: "POST",
    body: postData,
  });
  const res = await response.json();
  return res;
};
