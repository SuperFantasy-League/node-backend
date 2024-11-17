import mongoose from 'mongoose';

const connectDB = async () => {
    const dbKey = process.env.MONGO_DB_URL_LIVE;

    try{
        const conn = await mongoose.connect(`${dbKey}`, {
            useNewUrlParser: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }catch(error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};

export default connectDB;