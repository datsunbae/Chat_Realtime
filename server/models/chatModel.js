const mongoose = require('mongoose');

const chatModel =  mongoose.Schema({
    chatName : {type: String, trim: true},
    isGroupChat: {type: Boolean, default: false},
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    lastedMessage: {
        type: mongoose.Schema.Types.Object,
        ref: "Message"
    },
    groupAdmin: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {
    timestamps: true
});

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
