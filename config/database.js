const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING, {
            newUrlParser: true,
            useUnifiedTopology: true,
            useFineAndModify: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
            console.log(err)
            process.exit(1)
    }
}


module.exports = connectDB
