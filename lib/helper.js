const BASE_URL = "http://localhost:3000";
export const getAllUser = async () => {
  const res = await fetch(`${BASE_URL}/api/users`);
  const users = await res.json();
  return users;
};
