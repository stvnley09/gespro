const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('./user');
const Project = require('./project');

const Task = sequelize.define('Task', {
  title: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING },
  end_date: { type: DataTypes.DATE },
  priority: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  createdAt: {type: Date, field: 'created_at'},
  updatedAt: {type: Date, field: 'updated_at'}
}, {
  timestamps: true,
});

Task.belongsTo(User, { foreignKey: 'assigned_user_id' });
Task.belongsTo(Project, { foreignKey: 'project_id' });

module.exports = Task;
