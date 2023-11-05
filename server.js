const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const keys = require('./keys');
const app = express();

const API_PORT = process.env.PORT || 5000;
const dbURI = `mongodb+srv://lover4:OiGRiwX15QP2Pivz@cluster0.kidlkn3.mongodb.net/MySecretAdmirer?retryWrites=true&w=majority`;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Use the extended option
app.use(cors());

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongoose connected to server');
  })
  .catch((err) => {
    console.error('Mongoose connection error: ' + err);
  });

const journalSchema = new mongoose.Schema({
  title: String, // Change title to String
  tags: [String], // An array of strings
  body: String,
  created: { type: Date, default: Date.now }
});

const Journal = mongoose.model('Journal', journalSchema);

//connection events
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to server');
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconncted');
});

 //cachespture app termination / restarted or terminated 


gracefulShutdown = (msg, callback = null) => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};
 //restart
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => process.kill(process.pid, 'SIGUSR2'));
});
//app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => process.exit(0));
});
//Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app termination', () => process.exit(0));
});

app.get('/get-journals', async (req, res) => {
    mongoose.connect(dbURI)
        .then(() => {
          Journal.find({}, function (err, journals) {
            if (err) {
             res.send({ status: 400, message: err });
              return;
           }
           res.send({ status: 200, messgae:'success', journals: journals });
          gracefulShutdown('finish GET call', () => null);
         }
       )
    })
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));