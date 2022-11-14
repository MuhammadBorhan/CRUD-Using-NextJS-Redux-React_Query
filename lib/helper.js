const BASE_URL = "http://localhost:3000";

// all users
export const getAllUser = async () => {
  const res = await fetch(`${BASE_URL}/api/users`);
  const users = await res.json();
  return users;
};

// single users
export const getSingleUser = async (userId) => {
  const res = await fetch(`${BASE_URL}/api/users/${userId}`);
  const user = await res.json();
  if (user) return user;
  return {};
};

// create new user
export const createUser = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch(`${BASE_URL}/api/users`, Options);
    const newUser = await res.json();
    return newUser;
  } catch (error) {
    return error;
  }
};

// update user
export const updateUser = async (userId, formData) => {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const res = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const result = await res.json();
  return result;
};

// delete user
export const deleteUser = async (userId) => {
  const Options = {
    method: "DELETE",
  };
  const res = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const result = await res.json();
  return result;
};
