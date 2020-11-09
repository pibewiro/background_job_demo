const nodemailer = require("nodemailer");
const mailData = require("../config/mail");

module.exports = nodemailer.createTransport(mailData);
