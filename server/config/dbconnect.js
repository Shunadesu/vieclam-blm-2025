const {default : mongoose} = require('mongoose')

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URI)
        if(conn.connection.readyState === 1) console.log('DB connection is successfully')
            else console.log('DB Connecting')
        } catch (error) {
        console.log('DB Connection is failed')
        throw new Error(error)
    }
}

module.exports = dbConnect