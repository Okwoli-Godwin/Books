import mongoose from "mongoose"

const URI: string = "mongodb://localhost/bookstore"
const liveURI: string = "mongodb+srv://Godwin:mango@cluster0.8usbdhw.mongodb.net/Bookstore?retryWrites=true&w=majority"

mongoose.connect(liveURI)
mongoose.connection
.on("open", () => {
    console.log("Database connected")
})

.once("error", () => {
    console.log("Failed to connect to the database")
})