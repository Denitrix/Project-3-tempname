const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  chatName: {
    type: String,
    required: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
