import mongoose from "mongoose";
import colors from "colors";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connecting to the database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`error in connecting to DB ,${error}`);
  }
};
