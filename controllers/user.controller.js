const User = require('./../models/user')

async function index(req, res) {
  try {
    const users = await User.find().lean();
    return res.status(200).json({
      status: 'success',
      message: 'User listed successfully',
      data: users
    });
  } catch (error) {
    throw error
  }
}

module.exports = {
  index: index
}