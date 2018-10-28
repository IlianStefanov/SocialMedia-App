const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostsInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";


  if (!Validator.isLength(data.text, { min: 3, max: 300 })) {
    errors.text = "Email is invalid";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Post should be filled";
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
