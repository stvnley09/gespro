const express = require('express');
const { body } = require('express-validator');
const taskController = require('../controllers/taskController');
const projectController = require('../controllers/projectController');

const router = express.Router();

// Route pour créer un projet avec validation des données
router.post('/projects', [
  body('name').notEmpty().withMessage('Le nom du projet est requis'),
  body('start_date').isISO8601().toDate().withMessage('Date de début invalide'),
  body('status').notEmpty().withMessage('Le statut du projet est requis'),
], projectController.createProject);
router.put('/tasks/:id', [
  body('title').optional().notEmpty().withMessage('Le titre de la tâche est requis'),
  body('status').optional().notEmpty().withMessage('Le statut de la tâche est requis'),
  body('end_date').optional().isISO8601().toDate().withMessage('Date de fin invalide'),
  body('priority').optional().notEmpty().withMessage('La priorité est requise'),
], taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.get('/tasks', taskController.getAllTasks);
//router.get('/tasks/:id', taskController.getTaskById);

module.exports = router;
