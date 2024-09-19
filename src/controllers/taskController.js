const Task = require('../models/task');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');

// Créer une tâche
exports.createTask = async (req, res) => {
  try {
    // Validation des données fournies par l'utilisateur
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Récupération des informations de la tâche depuis req.body
    const { title, status, end_date, priority, description, assigned_user_id, project_id } = req.body;

    // Création de la tâche avec les données fournies
    const task = await Task.create({
      title,
      status,
      end_date,
      priority,
      description,
      assigned_user_id,
      project_id
    });

    // Réponse avec la tâche créée
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création de la tâche', error });
  }
};

//Mettre à jour une tâche
exports.updateTask = async (req, res) => {
  try {
    // Validation des données fournies par l'utilisateur
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Récupérer les informations de mise à jour depuis req.body
    const { title, status, end_date, priority, description } = req.body;

    // Récupérer la tâche à modifier avec l'ID fourni dans l'URL
    const task = await Task.findByPk(req.params.id);

    // Si la tâche n'existe pas
    if (!task) {
      return res.status(404).json({ message: 'Tâche non trouvée' });
    }

    // Mise à jour de la tâche avec les nouvelles données
    await task.update({
      title: title || task.title,
      status: status || task.status,
      end_date: end_date || task.end_date,
      priority: priority || task.priority,
      description: description || task.description
    });

    // Réponse avec la tâche mise à jour
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour de la tâche', error });
  }
};

// Supprimer une tâche
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Task.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: 'Tâche supprimée' });
    } else {
      res.status(404).json({ message: 'Tâche non trouvée' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la suppression de la tâche', error });
  }
};

// Afficher toutes les tâches
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la récupération des tâches', error });
  }
};

//Filtrage par statut, priorité et date d'échéance
exports.getTasksByFilters = async (req, res) => {
  const { status, priority, dueDate } = req.query;

  try {
    const tasks = await Task.findAll({
      where: {
        ...(status && { status }),  // Filtrer par statut si fourni
        ...(priority && { priority }),  // Filtrer par priorité si fourni
        ...(dueDate && { end_date: { [Op.lte]: dueDate } }),  // Filtrer par date d'échéance si fourni
      },
      order: [['end_date', 'ASC']],  // Toujours trier par date d'échéance
    });

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des tâches', error: err.message });
  }
};

// Afficher une tâche par ID
// exports.getTaskById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const task = await Task.findOne({ where: { id } });
//     if (task) {
//       res.status(200).json(task);
//     } else {
//       res.status(404).json({ message: 'Tâche non trouvée' });
//     }
//   } catch (error) {
//     res.status(400).json({ message: 'Erreur lors de la récupération de la tâche', error });
//   }
// };