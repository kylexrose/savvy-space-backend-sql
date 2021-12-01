const {
    isEmpty,
    isStrongPassword,
    isEmail,
    isAlpha,
    isAlphanumeric,
} = require("validator");

const checkIsEmpty = (str) => (isEmpty(str) ? true : false);

const checkIsStrongPassword = (password) => isStrongPassword(password) ? true : false;

const checkIsEmail = (email) => (isEmail(email) ? true : false);

const checkIsAlpha = (str) => (isAlpha(str) ? true : false);

const checkIsAlphanumeric = (str) => (isAlphanumeric(str) ? true : false);

module.exports = {
checkIsEmpty,
checkIsStrongPassword,
checkIsEmail,
checkIsAlpha,
checkIsAlphanumeric,
};