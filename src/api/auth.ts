import client from "./client";

export const login = async (email: string, password: string) => {
  const formData = new FormData();
  formData.append("username", email);
  formData.append("password", password);

  const response = await client.post("/auth/login", formData);
  if (response.status === 200) {
    localStorage.setItem("token", response.data.access_token);
    localStorage.setItem(
      "currentUser",
      JSON.stringify(response.data.user),
    );
    return true;
  }
  return false;
};

export const register = async (data: any) => {
  const response = await client.post("/users/register", data);
  return response.data;
};
