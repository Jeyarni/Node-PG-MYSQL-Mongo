
mongoose
  .connect("mongodb://localhost:27017/students", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("could not connectDB...", err));