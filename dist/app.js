"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_controller_1 = require("./app/modules/user/user.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/user", user_controller_1.userRoute);
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is Running Successfully" });
});
exports.default = app;
