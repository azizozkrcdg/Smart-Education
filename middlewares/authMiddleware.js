import User from '../models/User.js';

const authMiddleware = async (req, res, next) => {
  const user = await User.findById(req.session.userID);
  if (!user) return res.redirect('/login');
  next();
};
export default authMiddleware;
