const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');


class Mailer exports helper.Mail {

}


module.exports = Mailer;
