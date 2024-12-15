import mongoose from 'mongoose';
import slugify from 'slugify';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
});

CategorySchema.pre('validate', function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
