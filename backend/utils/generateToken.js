import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JSONWEBTOKEN_SECRET,
    {
      expiresIn: '10d',
    }
  );
};

export default generateToken;