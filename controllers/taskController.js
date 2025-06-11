const connectDB = require("../config/db");
const taskDao = require("../models/Task");

exports.getTasks = async (req, res) => {
  const db = await connectDB();
  const status = req.query.status || "";
  let filter = {};
  if (status === "active") filter.isDone = false;
  if (status === "done") filter.isDone = true;

  const tasks = await db
    .collection("tasks")
    .find(filter)
    .sort({ deadline: 1 })
    .toArray();
  res.render("index", { tasks, status });
};

exports.showAddForm = (req, res) => res.render("add");

exports.addTask = async (req, res) => {
  const db = await connectDB();
  await taskDao.addTask(db, {
    title: req.body.title,
    description: req.body.description,
    deadline: new Date(req.body.deadline),
    isDone: false,
  });
  res.redirect("/");
};

exports.showEditForm = async (req, res) => {
  const db = await connectDB();
  const task = await taskDao.getTaskById(db, req.params.id);
  res.render("edit", { task });
};

exports.updateTask = async (req, res) => {
  const db = await connectDB();
  await taskDao.updateTask(db, req.params.id, {
    title: req.body.title,
    description: req.body.description,
    deadline: new Date(req.body.deadline),
  });
  res.redirect("/");
};

exports.markDone = async (req, res) => {
  const db = await connectDB();
  await taskDao.updateTask(db, req.params.id, { isDone: true });
  res.redirect("/");
};

exports.deleteTask = async (req, res) => {
  const db = await connectDB();
  await taskDao.deleteTask(db, req.params.id);
  res.redirect("/");
};
