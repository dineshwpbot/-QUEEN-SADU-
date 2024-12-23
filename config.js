const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'QUEENELISA;;;==ANjVTWF91N69ESuNURV50SvRzYoRFTTZ3M4hXLQ9WZG1kNkVFRxMUdtg1TjI2bBNVQORWRpwd=46410088749',
    MONGODB: process.env.MONGODB || 'mongodb+srv://udavin56:1234@cluster0.urhma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
};
