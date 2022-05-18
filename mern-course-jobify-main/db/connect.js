import mongoose from 'mongoose'

const connectDB = (url) => {
  return mongoose.connect(url) //returned a promise actually
}
export default connectDB
