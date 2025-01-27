import { BASE_URL } from ".";

export const getOrderAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/orders/`, {
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

export const createOrderAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/orders/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(postData),
  });
  const res = await response.json();
  console.log(res, "cart post");
  return res;
};

export const updateOrderAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/orders/`, {
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

export const removeOrderAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/orders/`, {
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
