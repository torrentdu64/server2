const mongoose = require('mongoose');
const { Schema } = mongoogse;


const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [String]
});
