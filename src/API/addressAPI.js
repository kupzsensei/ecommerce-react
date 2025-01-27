import { BASE_URL } from ".";

export const getAddressAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/address/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    // body: postData,
  });
  const res = await response.json();
  console.log(res, "address");
  return res;
};

export const createAddressAPI = async (postData) => {
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

export const updateAddressAPI = async (postData) => {
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

export const removeAddressAPI = async (postData) => {
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
