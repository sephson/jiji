const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interestedSchema = new mongoose.Schema(
  {
    itemId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Item",
    },
    interestedBuyer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Interested = mongoose.model("Interested", interestedSchema);

module.exports = Interested;
