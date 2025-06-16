const { ObjectId } = require("mongodb");
const connectDB = require("../config/db");
const COLLECTION = "tasks";

async function getTasksByStatus(status) {
  const db = await connectDB();
  let filter = {};
  if (status === "active") filter.isDone = false;
  if (status === "done") filter.isDone = true;
  return db.collection(COLLECTION).find(filter).sort({ deadline: 1 }).toArray();
}

async function getTaskById(id) {
  const db = await connectDB();
  return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}

async function addTask(task) {
  const db = await connectDB();
  return db.collection(COLLECTION).insertOne(task);
}

async function updateTask(id, updated) {
  const db = await connectDB();
  return db
    .collection(COLLECTION)
    .updateOne({ _id: new ObjectId(id) }, { $set: updated });
}
async function deleteTask(id) {
  const db = await connectDB();
  return db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
}

module.exports = {
  getTasksByStatus,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
