const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name: "Pradeep",
//   email: "pradeep@gmail.com",
//   age: 38,
// });

// user1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   }); //to save in db

// User.insertMany([
//   { name: "mussu", email: "mussu@yahoo.in", age: 21 },
//   { name: "missu", email: "missu@yahoo.in", age: 22 },
//   { name: "spidey", email: "spdy@yahoo.in", age: 24 },
// ]).then((res) => {
//   console.log(res);
// });

// User.find({})
// User.find({age:{$gt:22}})
// User.findOne()
// User.findById("66d0558ef7b846581103f319")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.updateOne({name:"missu"},{age:25})
// User.updateMany({age: {$gt:23}},{age:20})
// User.findByIdAndUpdate({_id:"66d04cd8576cf3fa3a05de12"},{age:18},{new:true})
// User.findOneAndUpdate({name: "Pradeep"},{age:20},{new:true})
// .then((res) => {
    // console.log(res);
// })
// .catch((err) => {
    // console.log(err);
// });

// User.deleteOne({name:"Pradeep"})
// User.deleteMany({name:"Pradeep"})
// User.findOneAndDelete({name:"Pradeep"})
User.findByIdAndDelete("66d0558ef7b846581103f319")
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});