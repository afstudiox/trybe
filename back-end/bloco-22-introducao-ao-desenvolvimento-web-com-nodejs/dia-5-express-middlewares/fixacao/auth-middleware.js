const validateUser = {
  username: 'MestreCuca',
  password: 'MinhaSenhaSuperSeguraSqn'
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  if (!username || !password) {
    return res.status(401).json({ message: 'Username or password can´t be blank!'})
  }
  if (username !== validateUser.username || password !== validateUser.password) {
    return res.status(401).json({ message: 'Invalid credentials|'});
  }

  next();
}

module.exports = authMiddleware;