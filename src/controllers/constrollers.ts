import { Request, Response } from "express";
import MultiSteps from "../model/multiSteps.js";
import postNewData from "../Schema/validatorJoi.js";

export const addNewSteps = async (req: Request, res: Response) => {
  console.log("helloo")
  const { body } = req;
  const validator = await postNewData();
  const { value, error } = validator.validate(body);

  if (error) {
    console.log("heloo");
    return res.status(422).json(error.details);
  }
  const { name, email ,phone ,plan,addOns} = value;
  console.log('is not error')
  const last = await MultiSteps.find().sort({ _id: -1 }).limit(1);
  let id = last.length > 0 ? last[0].id + 1 : 1;
  if (isNaN(id)) {
    id = 1;
  }
  const data = {
    id,
    name,
    email,
    phone,
    plan,
    addOns

  };
  console.log('send data')
  await MultiSteps.create({ ...data });

  return res.status(201).json({ ...data });
};
