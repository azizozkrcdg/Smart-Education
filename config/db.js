import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI);

    connection ? console.log('DB connection success') : console.log('DB connection fail!!!');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
