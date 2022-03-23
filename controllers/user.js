const User = require("../models/user");
const getUsers = (req, res) => {
  User.find((err, user_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user_list);
    }
  });
};
const createUser = (req, res) => {
  userObject = new User(req.body);
  userObject.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: "Added user successfully" });
    }
  });
};
const deleteUserWithId = (req, res) => {
  User.findByIdAndDelete(req.params.id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: `User with id as ${req.params.id} is removed` });
    }
  });
};
const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: `User with id as ${req.params.id} is updated` });
    }
  });
};
const getUserWithId = (req, res) => {
  User.findById(req.params.id).exec((err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
};
const getUserWithName = (req, res) => {
  User.find({ name: req.params.name }).exec((err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
};
const getUserWithUserName = (req, res) => {
  User.find({ username: req.params.username }).exec((err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
};
const getUserWithDob = (req, res) => {
  User.find({ dob: req.params.dob }).exec((err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
};
const getUserWithPassword = (req, res) => {
  User.find({ password: req.params.password }).exec((err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
};
module.exports = {
  getUsers,
  createUser,
  deleteUserWithId,
  updateUser,
  getUserWithId,
  getUserWithName,
  getUserWithUserName,
  getUserWithDob,
  getUserWithPassword,
};
