import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Category from "../models/Category.js"


const creatUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).redirect("/login");
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // email control
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: 'fail',
        message: 'Böyle bir kullanıcı yok. Önce kayıt olun',
      });
    }

    // password control
    const passwordIsTrue = await bcrypt.compare(password, user.password);
    if (!passwordIsTrue) {
      return res.status(400).json({
        status: 'fail',
        message: 'parola yanlış!',
      });
    }

    req.session.userID = user._id;
    return res.redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

const logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

const getDashboardPage = async (req, res) => {
  const user = await User.findOne({_id: req.session.userID})
  const categories = await Category.find();
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
    user,
    categories
  });
};

export { creatUser, loginUser, logoutUser, getDashboardPage };
