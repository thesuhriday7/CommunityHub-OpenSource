//require statements
require("dotenv").config();
const mongoose=require('mongoose');


exports.connect=()=>{
  mongoose.connect(process.env.MONGODB_URL)
  .then(()=>{console.log("DB CONNECTION SUCCESSFUL")})
  .catch((err)=>{
    console.log("DB CONNECTION FAILED");
    console.error(err);
    process.exit(1);
  })
}
