const User = require("../models/User");
exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
exports.addUser = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);

};

exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
}; 
exports.updateUser = async(req,res)=>{
   const user = await user.findByIdAndUpdate(req.params.id , req.body);
   res.json(user) 

}