import { Schema, model } from "mongoose";

const multiSteps = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.Number,
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
      type: Schema.Types.String,
      required: true,
    },
  },
  addOns: [
    {
      title: {
        type: Schema.Types.String,
      },
      money: {
        type: Schema.Types.String,
      },
    },
  ],
});

const MultiSteps = model("MultiSteps", multiSteps);

export default MultiSteps;
