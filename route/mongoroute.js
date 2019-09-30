const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 255 },
    category: { type: String, required: true, enum: ["web", "mobile", "net"] },
    author: String,
    tags: {
      type: Array,
      validate: {
        validator: function(v) {
          return v.length > 0;
        },
        message: "A course should have atleast one tag"
      }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
      type: Number,
      required: function() {
        return this.isPublished;
      },
      min: 10,
      max: 200
    }
  });
  
  const Course = mongoose.model("Course", courseSchema);
  async function createCourse() {
    const course = new Course({
      name: "Angular Course",
      category: "mobile",
      author: "Jeya",
      tags: [],
      isPublished: true,
      price: 15
    });
    try {
      const result = await course.save();
      console.log(result);
    } catch (ex) {
      console.log(ex.message);
    }
  }
  createCourse();
  
  async function getCourses() {
    return await Course.find({ isPublished: true, tags: "backend" })
      .sort({ name: 1 })
      .select({ name: 1, author: 1 });
  }
  
  async function run() {
    const courses = await getCourses();
    console.log(courses);
  }
  // run();
  
  async function updateCourse(id) {
    const course = await Course.findOneAndUpdate(
      id,
      {
        $set: {
          author: "Jason",
          isPublished: false
        }
      },
      { new: true }
    );
    //   if (!course) return;
    //   course.isPublished = true;
    //   course.author = "Another Author";
    //   const result = await course.save();
    console.log(course);
  }
  // updateCourse("5a68fdc3615eda645bc6bdec");
  
  async function removeCourse(id) {
    // const result = await Course.deleteOne({ _id: id });
    const course = await Course.findByIdAndRemove(id);
  
    console.log(course);
  }
  // removeCourse("5a68fdc3615eda645bc6bdec");
  