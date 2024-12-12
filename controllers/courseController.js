import Course from '../models/Course.js';

const creatCourse = async (req, res) => {
  const course = await Course.create(req.body);
  try {
    res.status(201).json({
      status: 'success',
      course,
    });
  } catch(error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

const getAllCourses = async (req, res) => {
  const courses = await Course.find();
  try {
    res.status(200).render("courses", {
      courses,
      page_name: "courses"
    });
  } catch(error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

export { creatCourse, getAllCourses };
