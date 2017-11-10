const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');


class Mailer exports helper.Mail {
  constructor({subject, recipients}, content) {
    super();

    this.from_email = new helper.Email('matrix@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content );
    this.recipients = this.formatAdresses(recipients);
  }

}


module.exports = Mailer;
