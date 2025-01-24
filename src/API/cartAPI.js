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
  console.log(res);
  return res;
};

export const addtoCartAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/cart/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: postData,
  });
  const res = await response.json();
  console.log(res, "cart post");
  return res;
};

export const updateCartAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/cart/`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: postData,
  });
  const res = await response.json();
  console.log(res, "cart patch");
  return res;
};

export const removeCartAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/cart/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: postData,
  });
  const res = await response.json();
  console.log(res, "cart patch");
  return res;
};
