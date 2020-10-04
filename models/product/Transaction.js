const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionTypeSchema = new Schema({
  name: {
    type: String,
  },
});

const TransactionType = mongoose.model(
  "TransactionType",
  transactionTypeSchema
);
exports.transactionTypeSchema = transactionTypeSchema;
exports.TransactionType = TransactionType;

async function CreateTransactionType(name) {
  const transactionType = new TransactionType({
    name,
  });
  const result = await transactionType.save();
  console.log(result);
}
// CreateTransactionType("Rental");
