import { BASE_URL } from ".";

export const loginAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/auth/login/`, {
    method: "POST",
    body: postData,
  });

  const res = await response.json();
  return res;
};

export const registerAPI = async (postData) => {
  const response = await fetch(`${BASE_URL}/api/auth/users/`, {
    method: "POST",
    body: postData,
  });

  const res = await response.json();
  return res;
};
