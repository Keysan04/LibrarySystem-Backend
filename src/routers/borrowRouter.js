import express from "express";
import { createBurrow, getManyBurrow } from "../models/burrow/BurrowModel.js";
import { newBurrowValidation } from "../middlewares/joiValidation.js";

const router = express.Router();

router.get("/:_id?", async (req, res, next) => {
  try {
    const { role } = req.userInfo;

    //if admin makes request return all the burrow history else if logged in user then return thier borrow only list on the user id in borrwo table
    const burrows =
      role === "admin"
        ? await getManyBurrow(req.body)
        : getManyBurrow({ userId: req.userInfo._id });
    result?.length
      ? res.json({
          status: "success",
          message: "Here is thelist of burrow",
          burrows,
        })
      : res.json({
          status: "error",
          message: "unable to return  ",
        });
  } catch (error) {
    next(error);
  }
});

router.post("/", newBurrowValidation, async (req, res, next) => {
  try {
    const numberOfDaysToReturn = 15;
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + numberOfDaysToReturn);
    //if admin makes request return all the burrow history else if logged in user then return thier borrow only list on the user id in borrwo table

    const obj = {
      isAvailable: false,
    };
    const result = await createBurrow(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "You have successfully borrowed this book  ",
        })
      : res.json({
          status: "error",
          message: "unable to borrow book   ",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
