const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.rollno = !isEmpty(data.rollno) ? data.rollno : "";
  data.password = !isEmpty(data.password) ? data.password : "";
// Rollno checks
  if (Validator.isEmpty(data.rollno)) {
    errors.rollno = "Roll No field is required";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};