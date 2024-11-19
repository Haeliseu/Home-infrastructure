const db = require('../database/connect');
const User = db.User;
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
  
    if (!user) {
      return res.status(400).json({ success: false, message: 'Nom d\'utilisateur ou mot de passe invalide' });
    }
  
    //const validPassword = await bcrypt.compare(password, user.password);
  
    //if (!validPassword) {
    //  return res.status(400).json({ success: false, message: 'Nom d\'utilisateur ou mot de passe invalide' });
    //}
  
    return res.json({ success: true, message: 'Connecté' });
};