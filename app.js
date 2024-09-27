const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mime = require('mime');

// Importer les nouvelles routes
const projectRoutes = require('./src/routes/projectRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const userRoutes = require('./src/routes/userRoutes');

// Importer le middleware d'erreur
const errorHandler = require('./src/middlewares/errorHandler');
const authMiddleware = require('./src/middlewares/authMiddleware')

//Charger les variables d'environnements
dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // URL frontend React
  credentials: true,
})); //Pour gérer les cors
app.use(bodyParser.json()); //Pour parser les requêtes JSON
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Tester la connexion à la base de données
sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie.')
  })
  .catch(err => {
    console.log('Connexion à la base de données échouée:', err.message)
  })

// Définir les routes publiques (sans authentification)
app.use('/api/users', userRoutes); // Route pour les utilisateurs (inscription, connexion)

// Définir les routes protégées (avec authentification)
app.use('/api/projects', authMiddleware, projectRoutes); // Route pour les projets protégée par JWT
app.use('/api/tasks', authMiddleware, taskRoutes); // Route pour les tâches protégée par JWT

// Servir l'application React pour toutes les autres routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

// Utiliser le middleware d'erreur
app.use(errorHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use((req, res, next) => {
  const mimeType = mime.getType(req.path);
  if (mimeType) {
    res.setHeader('Content-Type', mimeType);
  }
  next();
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
