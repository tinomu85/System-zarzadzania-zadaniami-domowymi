const { ObjectId } = require("mongodb");
const COLLECTION = "tasks";

async function getAllTasks(db, filter = {}, sort = { deadline: 1 }) {
  return db.collection(COLLECTION).find(filter).sort(sort).toArray();
}

async function getTaskById(db, id) {
  return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}

async function addTask(db, task) {
  return db.collection(COLLECTION).insertOne(task);
}

async function updateTask(db, id, updated) {
  return db
    .collection(COLLECTION)
    .updateOne({ _id: new ObjectId(id) }, { $set: updated });
}

async function deleteTask(db, id) {
  return db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
}

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
