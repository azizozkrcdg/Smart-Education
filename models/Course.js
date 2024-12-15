import mongoose from 'mongoose';
import slugify from "slugify";

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug : {
    type: String,
    unique: true
  }
});

CourseSchema.pre("validate", function(next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true
  });
  next();
})

const Course = mongoose.model('Course', CourseSchema);

export default Course;
