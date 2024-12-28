import User from '../models/User.js';

export default async (req, res, next) => {
  const user = await User.findById(req.session.userID);
  if (!user) return res.redirect('/login');
  next();
};