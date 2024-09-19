// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  createdAt: {type: Date, field: 'created_at'},
  updatedAt: {type: Date, field: 'updated_at'}
}, {
  timestamps: true, 
});

// Hook Sequelize pour hasher le mot de passe avant de sauvegarder l'utilisateur
User.beforeSave(async (user, options) => {
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
    
});

module.exports = User;
