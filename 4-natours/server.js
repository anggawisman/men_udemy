const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
const app = require('./app');


// console.log(app.get('env'));
// console.log(process.env);

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, { // live DB
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(() => {
    // console.log(con.connections);
    console.log('DB connection success');

});


// 4) START SERVER

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
