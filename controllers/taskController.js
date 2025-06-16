const task = require("../models/Task");

exports.getTasks = async (req, res) => {
  try {
    const status = req.query.status || "";
    const tasks = await task.getTasksByStatus(status);
    res.render("index", { tasks, status });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

exports.showAddForm = (req, res) => {
  res.render("add");
};

exports.addTask = async (req, res) => {
  await task.addTask({
    title: req.body.title,
    description: req.body.description,
    deadline: new Date(req.body.deadline),
    isDone: false,
  });
  res.redirect("/");
};

exports.showEditForm = async (req, res) => {
  const task = await task.getTaskById(req.params.id);
  res.render("edit", { task });
};

exports.updateTask = async (req, res) => {
  await task.updateTask(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    deadline: new Date(req.body.deadline),
  });
  res.redirect("/");
};

exports.markDone = async (req, res) => {
  await task.updateTask(req.params.id, { isDone: true });
  res.redirect("/");
};

exports.deleteTask = async (req, res) => {
  await task.deleteTask(req.params.id);
  res.redirect("/");
};
