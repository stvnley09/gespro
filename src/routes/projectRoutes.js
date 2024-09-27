const express = require('express');
const { body } = require('express-validator');
const projectController = require('../controllers/projectController');

const router = express.Router();


// Route pour créer un projet avec validation des données
router.post('/create', [
  body('name').notEmpty().withMessage('Le nom du projet est requis'),
  body('start_date').isISO8601().toDate().withMessage('Date de début invalide'),
  body('status').notEmpty().withMessage('Le statut du projet est requis'),
], projectController.createProject);
// Route pour mettre à jour un projet existant
router.put('/update/:id', [
  body('name').optional().notEmpty().withMessage('Le nom du projet est requis'),
  body('start_date').optional().isISO8601().toDate().withMessage('Date de début invalide'),
  body('end_date').optional().isISO8601().toDate().withMessage('Date de fin invalide'),
  body('status').optional().notEmpty().withMessage('Le statut du projet est requis'),
], projectController.updateProject);
// Route pour supprimer un projet existant
router.delete('/delete/:id', projectController.deleteProject);
router.get('/all', projectController.getAllProjects);
router.get('/get/user', projectController.getUserProjects);

module.exports = router;
