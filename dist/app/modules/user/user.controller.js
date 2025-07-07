"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_model_1 = require("./user.model");
exports.userRoute = express_1.default.Router();
exports.userRoute.post("/create-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        const result = yield user_model_1.User.create(userData);
        res.status(201).json({
            success: true,
            message: "User created Done",
            totalData: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err === null || err === void 0 ? void 0 : err.message,
            totalError: err,
        });
    }
}));
exports.userRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.User.find();
        res.status(200).json({
            success: true,
            message: "User Data getting Done",
            totalData: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err === null || err === void 0 ? void 0 : err.message,
            totalError: err,
        });
    }
}));
exports.userRoute.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield user_model_1.User.findById(id);
        res.status(200).json({
            success: true,
            message: "User Data getting Done",
            totalData: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err === null || err === void 0 ? void 0 : err.message,
            totalError: err,
        });
    }
}));
exports.userRoute.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    try {
        const result = yield user_model_1.User.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json({
            success: true,
            message: "User Data updated Done",
            totalData: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err === null || err === void 0 ? void 0 : err.message,
            totalError: err,
        });
    }
}));
exports.userRoute.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield user_model_1.User.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "User Data Deleted Done",
            totalData: null,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err === null || err === void 0 ? void 0 : err.message,
            totalError: err,
        });
    }
}));
