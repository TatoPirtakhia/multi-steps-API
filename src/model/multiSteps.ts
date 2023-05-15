import { Schema, model } from "mongoose";

const multiSteps = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
 
  email: {
    type: Schema.Types.String,
    required: true,
  },
  phone: {
    type: Schema.Types.String,
    required: true,
  },
  plan: {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    money: {
      type: Schema.Types.Number,
      required: true,
    },
  },
  addOns: [
    {
      title: {
        type: Schema.Types.String,
      },
      money: {
        type: Schema.Types.Number,
      },
    },
  ],
});

const MultiSteps = model("MultiSteps", multiSteps);

export default MultiSteps;
