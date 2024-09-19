const Project = require('../models/project');
const User = require('../models/user');
const Role = require('../models/role');
const ProjectUser = require('../models/project_user');

// Créer un projet
const { validationResult } = require('express-validator');

exports.createProject = async (req, res) => {
  try {
    // Validation des données fournies par l'utilisateur
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Récupération des informations du projet depuis req.body
    const { name, start_date, end_date, status, description } = req.body;

    // Création du projet avec les données fournies
    const project = await Project.create({
      name,
      start_date,
      end_date,
      status,
      description
    });

    // Réponse avec le projet créé
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création du projet', error });
  }
};

// Modifier un projet
exports.updateProject = async (req, res) => {
  try {
    // Validation des données fournies par l'utilisateur
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Récupérer les informations de mise à jour depuis req.body
    const { name, start_date, end_date, status, description } = req.body;

    // Récupérer le projet à modifier avec l'ID fourni dans l'URL
    const project = await Project.findByPk(req.params.id);

    // Si le projet n'existe pas
    if (!project) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }

    // Mise à jour du projet avec les nouvelles données
    await project.update({
      name: name || project.name,  // Mettre à jour seulement si une nouvelle valeur est fournie
      start_date: start_date || project.start_date,
      end_date: end_date || project.end_date,
      status: status || project.status,
      description: description || project.description
    });

    // Réponse avec le projet mis à jour
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour du projet', error });
  }
};

// Supprimer un projet
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Project.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: 'Projet supprimé' });
    } else {
      res.status(404).json({ message: 'Projet non trouvé' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la suppression du projet', error });
  }
};

// Afficher tous les projets
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la récupération des projets', error });
  }
};

// Ajouter l'utilisateur au projet avec le rôle spécifique
exports.addUserToProject = async (req, res) => {
  const { projectId, userId, roleId } = req.body;

  try {
    const project = await Project.findByPk(projectId);
    const user = await User.findByPk(userId);
    const role = await Role.findByPk(roleId);

    if (!project || !user || !role) {
      return res.status(404).json({ message: 'Projet, utilisateur ou rôle introuvable' });
    }

    await ProjectUser.create({
      project_id: project.id,
      user_id: user.id,
      role_id: role.id,
    });

    res.status(200).json({ message: `L'utilisateur a été ajouté au projet avec le rôle ${role.role_name}` });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'utilisateur au projet', error: err.message });
  }
};

//Afficher les utilisateur d'un projet
exports.getProjectUsers = async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findByPk(projectId, {
      include: {
        model: User,
        through: {
          attributes: ['role_id'],
        },
      },
    });

    if (!project) {
      return res.status(404).json({ message: 'Projet introuvable' });
    }

    // Inclure les rôles dans la réponse
    const usersWithRoles = await Promise.all(project.Users.map(async (user) => {
      const projectUser = await ProjectUser.findOne({
        where: { project_id: projectId, user_id: user.id },
        include: Role,
      });
      return {
        user,
        role: projectUser.Role.role_name,
      };
    }));

    res.status(200).json(usersWithRoles);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs du projet', error: err.message });
  }
};

//Mettre à jour le rôle d'un utilisateur dans un projet
exports.updateUserRoleInProject = async (req, res) => {
  const { projectId, userId, newRoleId } = req.body;

  try {
    const projectUser = await ProjectUser.findOne({
      where: {
        project_id: projectId,
        user_id: userId,
      },
    });

    if (!projectUser) {
      return res.status(404).json({ message: 'Utilisateur non trouvé dans ce projet' });
    }

    const newRole = await Role.findByPk(newRoleId);

    if (!newRole) {
      return res.status(404).json({ message: 'Rôle introuvable' });
    }

    // Mise à jour du rôle de l'utilisateur dans le projet
    projectUser.role_id = newRole.id;
    await projectUser.save();

    res.status(200).json({ message: `Le rôle de l'utilisateur a été mis à jour en ${newRole.role_name}` });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du rôle', error: err.message });
  }
};

// Afficher un projet par ID
// exports.getProjectById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const project = await Project.findOne({ where: { id } });
//     if (project) {
//       res.status(200).json(project);
//     } else {
//       res.status(404).json({ message: 'Projet non trouvé' });
//     }
//   } catch (error) {
//     res.status(400).json({ message: 'Erreur lors de la récupération du projet', error });
//   }
// };
