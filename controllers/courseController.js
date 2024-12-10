import Course from '../models/Course.js';

const creatCourse = async (req, res) => {
  const course = await Course.create(req.body);
  try {
    res.status(201).json({
      status: 'success',
      course,
    });
  } catch {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

export { creatCourse };
