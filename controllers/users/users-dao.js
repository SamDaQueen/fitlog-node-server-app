import usersModel from "./users-model.js";

export const findAllUsers = async () => usersModel.find();

export const findAllByRole = async (role) => usersModel.find({ role });

export const findUserById = async (id) => usersModel.findById(id);

export const findUserByUsername = async (username) =>
  usersModel.findOne({ username });

export const findUserByCredentials = async (username, email, password) =>
  usersModel.findOne({ username, email, password });

export const deleteUser = async (id) => usersModel.deleteOne({ _id: id });

export const createUser = async (user) => usersModel.create(user);

export const updateUser = async (id, user) =>
  await usersModel.updateOne({ _id: id }, user);
