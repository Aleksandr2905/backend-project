import mongoose from "mongoose";
import app from "./app.js";

const DB_HOST =
  "mongodb+srv://Aleksandr:a4CKZ2qbea2ZqN0t@cluster0.fsc9rzt.mongodb.net/my-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

//7ZeRk09hlj6ektdo
