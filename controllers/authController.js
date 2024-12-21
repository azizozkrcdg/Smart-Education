import User from '../models/User.js';
import bcrypt from 'bcrypt';
import expressAsyncHandler from 'express-async-handler';

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

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const isAuth = await User.findOne({ email });

  if (!isAuth) {
    return res.status(404).json({
      status: 'fail',
      message: 'Böyle bir kullanıcı yok',
    });
  }

  const passwordIsTrue = await bcrypt.compare(password, isAuth.password);

  if (!passwordIsTrue) {
    return res.status(404).json({
      status: 'fail',
      message: 'Parolanız yanlış',
    });
  }

  return res.status(200).send('you are login');
});

export { creatUser, loginUser };
