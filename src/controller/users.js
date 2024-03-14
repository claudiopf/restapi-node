const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: 'Get all users success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewUsers = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'Create new user success',
    data: req.body,
  });
};

const updateUsers = (req, res) => {
  const { idUser } = req.params;
  console.log('idUser:', idUser);
  res.json({
    message: 'Update user success',
    data: req.body,
  });
};

const deleteUsers = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: 'Delete user success',
    data: {
      id: idUser,
      name: 'John Doe',
      email: 'user@gmail.com',
      address: 'Wakanda',
    },
  });
};

module.exports = { getAllUsers, createNewUsers, updateUsers, deleteUsers };
