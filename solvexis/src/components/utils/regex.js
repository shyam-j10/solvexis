const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const isValidName = (name) => {
  const ValidName = nameRegex.test(name);
  return ValidName;
};
export const isValidEmail = (email) => {
  const ValidEmail = emailRegex.test(email);
  return ValidEmail;
};
export const otherFealds = (feald) => {
  if(feald){
    return feald.length ? true : false
  }else{
    return false
  }
}