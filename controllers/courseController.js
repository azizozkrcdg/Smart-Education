import Course from '../models/Course.js';
import Category from '../models/Category.js';
import User from '../models/User.js';

// createCourse
const createCourse = async (req, res) => {
  const course = await Course.create({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    user: req.session.userID,
  });
  try {
    res.status(201).redirect('/courses');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

// allCourse
const getAllCourses = async (req, res) => {
  try {
    const categorySlug = req.query.categories;
    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};

    if (categorySlug) {
      filter = { category: category._id };
    }

    const courses = await Course.find(filter).sort('-createdAt');
    const categories = await Category.find();

    res.status(200).render('courses', {
      courses,
      categories,
      page_name: 'courses',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

// getCourse
const getCourse = async (req, res) => {
  const user = await User.findById(req.session.userID);
  const course = await Course.findOne({ slug: req.params.slug }).populate(
    'user'
  );

  try {
    res.status(200).render('course', {
      course,
      page_name: 'courses',
      user,
    });
  } catch (error) {
    res.status(404), error;
  }
};

// enrollCourse
const enrollCourse = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID);
    await user.courses.push({ _id: req.body.course_id });
    await user.save();

    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(404), error;
  }
};

// releaseCourse
const releaseCourse = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID);
    await user.courses.pull({ _id: req.body.course_id });
    await user.save();

    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(400), error;
  }
};

export { createCourse, getAllCourses, getCourse, enrollCourse, releaseCourse };
