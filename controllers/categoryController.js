import Category from '../models/Category.js';

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json({
      status: 'OK',
      Category,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error
    });
  }
};

export {createCategory}