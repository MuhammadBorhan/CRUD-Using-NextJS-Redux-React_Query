/*Controller  */

import Users from "../model/user";

/* GET Request--> http://localhost:3000/api/users */
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: "Data not found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

/* POST Request--> http://localhost:3000/api/users */
export async function createUser(req, res) {
  try {
    const formData = req.body;
    if (!formData) {
      return res.status(404).json({ error: "Form data not provided..!!!" });
    }
    Users.create(formData, (err, data) => {
      return res.status(201).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

/* PUT Request--> http://localhost:3000/api/users/userId */
export async function updateUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;
    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User not selected.." });
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Error while updating the data...!!" });
  }
}

/* DELETE Request--> http://localhost:3000/api/users/userId */

export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findByIdAndDelete(userId);
      res.status(200).json({ deleted: user });
    }
    return res.status(404).json({ error: "User not selected..." });
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Error while deleting the data...!!" });
  }
}
