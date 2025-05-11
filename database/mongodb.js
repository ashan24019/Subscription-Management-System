import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "PLease define the MONGODB_URI environment varible inside .env<development/production>.local"
  );
}

const connectToDatabse = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to databse in ${NODE_ENV} mode`)
  } catch (error) {
    console.error("Error connecting to databse: ", error);

    process.exit(1);
  }
};

export default connectToDatabse;
