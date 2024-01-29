import BurrowSchema from "./BurrowSchema.js";

//Create
export const createBurrow = (burrowObj) => {
  return BurrowSchema(burrowObj).save();
};

//read @filter must be an object
export const getBurrow = (filter) => {
  return BurrowSchema.findOne(filter);
};
export const getManyBurrow = (filter) => {
  return BurrowSchema.findOne(filter);
};

export const updateBurrow = (filter, update) => {
  return BurrowSchema.findOneAndUpdate(filter, update);
};
//delete
export const deleteBurrow = (filter) => {
  return BurrowSchema.findOneAndDelete(filter);
};
