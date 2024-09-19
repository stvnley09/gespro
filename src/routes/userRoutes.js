// routes/authRoutes.js
const express = require('express');
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const projectController = require('../controllers/projectController');


const router = express.Router();

// Route pour l'inscription
router.post(
  '/signup',
  [
    body('username').notEmpty().withMessage('Le nom d\'utilisateur est requis'),
    body('email').isEmail().withMessage('Veuillez entrer un email valide'),
    body('password').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères'),
  ],
  userController.signup
);

// Route pour la connexion
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Veuillez entrer un email valide'),
    body('password').notEmpty().withMessage('Le mot de passe est requis'),
  ],
  userController.login
);

// Route protégée pour créer un projet
router.post('/projects', authMiddleware, projectController.createProject);

module.exports = router;
