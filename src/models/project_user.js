// models/ProjectUser.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('./user');
const Project = require('./project');
const Role = require('./role');

const ProjectUser = sequelize.define('ProjectUser', {
  // Nous faisons référence à des clés étrangères project_id, user_id et role_id
  project_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Project,
      key: 'id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: 'id',
    },
  },
});

// Définir les relations many-to-many
Project.belongsToMany(User, { through: ProjectUser });
User.belongsToMany(Project, { through: ProjectUser });
Role.hasMany(ProjectUser);  // Chaque rôle peut être utilisé dans plusieurs liaisons Projet-Utilisateur

module.exports = ProjectUser;
