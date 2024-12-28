import User from '../models/User.js';
import bcrypt from 'bcrypt';

const creatUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: 'OK',
      user,
    });
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

    // email kontrol
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: 'fail',
        message: 'Böyle bir kullanıcı yok. Önce kayıt olun',
      });
    }

    // parola kontrol
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
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
    user
  });
};

export { creatUser, loginUser, logoutUser, getDashboardPage };
