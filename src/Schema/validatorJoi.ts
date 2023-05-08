import Joi from "joi";

const postNewData = async () => {
  return Joi.object({
    name: Joi.string().min(2).required().messages({
      "string.base": "name should be a string",
      "string.min": "name should include 2 characters or more",
      "any.required": "name is required",
    }),
    email: Joi.string().email().messages({
      "string.base": "please insert correct email",
      "string.email": "please insert correct email",
    }),
    phone: Joi.string()
      .regex(/^\+?[0-9]{9,15}$/)
      .message("phone number should contain 9 to 15 numeric digits")
      .required()
      .messages({
        "any.required": "phone number is required",
      }),
    plan: Joi.object().pattern(
      Joi.string(),
      Joi.alternatives().try(Joi.string(), Joi.number())
    ),
    addOns: Joi.array().items(
        Joi.object({
          title: Joi.string().required(),
          money: Joi.string().required(),
        })
      ).min(1).required()
  });
};

export default postNewData;
