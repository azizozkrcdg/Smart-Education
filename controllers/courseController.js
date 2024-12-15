import Course from '../models/Course.js';
import Category from '../models/Category.js';

const createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  try {
    res.status(201).json({
      status: 'OK',
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

const getAllCourses = async (req, res) => {
  const courses = await Course.find();
  const categories = await Category.find();
  try {
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

const getCourse = async (req, res) => {
  const course = await Course.findOne({ slug: req.params.slug });

  try {
    res.status(200).render('course', {
      course,
      page_name: 'courses',
    });
  } catch (error) {
    res.status(404), error;
  }
};

export { createCourse, getAllCourses, getCourse };
