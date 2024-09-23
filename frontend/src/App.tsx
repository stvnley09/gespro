import { ReactElement, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { rootPaths } from './routes/paths'; // Ajoutez vos chemins de navigation

const App = (): ReactElement => {
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifie si un token est présent dans le sessionStorage
    const token = sessionStorage.getItem('token');
    console.log('Token found:', token); 
  
    if (token) {
      // Si un token est trouvé, rediriger vers le dashboard
      navigate(`/${rootPaths.homeRoot}`);
    } else {
      // Sinon, rediriger vers la page de connexion
      navigate(`/${rootPaths.authRoot}/login`);
    }
  }, [navigate]);

  return <Outlet />;
};

export default App;
