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
    const categorySlug = req.query.categories || null; // Default null
    const query = req.query.search || ''; // Default empty string
    const category = categorySlug ? await Category.findOne({ slug: categorySlug }) : null;

    let filter = {};

    if (category) {
      filter.category = category._id; 
    }

    if (query) {
      filter.name = { $regex: query, $options: 'i' }; 
    }

    const courses = await Course.find(filter).sort('-createdAt').populate("user");
    const categories = await Category.find(); 

    res.status(200).render('courses', {
      courses,
      categories,
      page_name: 'courses',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
    });
  }
};


// getCourse
const getCourse = async (req, res) => {
  const user = await User.findById(req.session.userID);
  const course = await Course.findOne({ slug: req.params.slug }).populate(
    'user'
  );
  const categories = await Category.find(); 
  try {
    res.status(200).render('course', {
      course,
      page_name: 'courses',
      user,
      categories,
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
