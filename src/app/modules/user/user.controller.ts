import express, { Request, Response } from "express";
import { User } from "./user.model";
export const userRoute = express.Router();

userRoute.post("/create-user", async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    const result = await User.create(userData);
    res.status(201).json({
      success: true,
      message: "User created Done",
      totalData: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err?.message,
      totalError: err,
    });
  }
});

userRoute.get("/", async (req: Request, res: Response) => {
  try {
    const result = await User.find();
    res.status(200).json({
      success: true,
      message: "User Data getting Done",
      totalData: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err?.message,
      totalError: err,
    });
  }
});

userRoute.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "User Data getting Done",
      totalData: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err?.message,
      totalError: err,
    });
  }
});
userRoute.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await User.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({
      success: true,
      message: "User Data updated Done",
      totalData: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err?.message,
      totalError: err,
    });
  }
});
userRoute.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "User Data Deleted Done",
      totalData: null,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err?.message,
      totalError: err,
    });
  }
});
