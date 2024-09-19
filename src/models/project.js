const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Connexion à la DB

const Project = sequelize.define('Project', {
  name: { type: DataTypes.STRING, allowNull: false },
  start_date: { type: DataTypes.DATE, allowNull: false },
  end_date: { type: DataTypes.DATE },
  status: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  createdAt: {type: Date, field: 'created_at'},
  updatedAt: {type: Date, field: 'updated_at'}
}, {
  timestamps: true,
});

module.exports = Project;