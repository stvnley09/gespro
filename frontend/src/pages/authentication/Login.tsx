import {
  Box,
  Link,
  Paper,
  Stack,
  Button,
  Divider,
  Checkbox,
  FormGroup,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import { useState, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';
import Image from 'components/base/Image';
import logoWithText from '/Logo-with-text.png';
import IconifyIcon from 'components/base/IconifyIcon';
import axios from 'axios';

const Login = (): ReactElement => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!email || !password) {
      setErrorMessage('Veuillez remplir tous les champs.');
      return;
    }

    try {
      // Appel à l'API pour se connecter
      const response = await axios.post('http://localhost:4000/api/users/login', {
        email,
        password,
      });

      // Si la connexion réussit, token dans sessionStorage
      localStorage.setItem('token', response.data.token);

      // Redirection vers la page d'accueil
      navigate(`/${rootPaths.homeRoot}`);
    } catch (error: any) {
      console.error('Erreur lors de la connexion:', error.response || error.message || error);
      if (error.response && error.response.status === 404) {
        // Cas où l'email n'existe pas
        setErrorMessage('Cet email n\'existe pas.');
      } else if (error.response && error.response.status === 401) {
        // Cas où le mot de passe est incorrect
        setErrorMessage('Le mot de passe est incorrect.');
      } else {
        // Autres erreurs
        setErrorMessage('Erreur lors de la connexion. Veuillez réessayer.');
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Box component="figure" mb={5} mx="auto" textAlign="center">
        <Link href={rootPaths.homeRoot}>
          <Image src={logoWithText} alt="logo with text" height={60} />
        </Link>
      </Box>
      <Paper sx={{ py: 6, px: { xs: 5, sm: 7.5 } }}>
        <Stack justifyContent="center" gap={5}>
          <Typography variant="h3" textAlign="center" color="text.secondary">
            Connexion
          </Typography>
          <Typography variant="h6" fontWeight={500} textAlign="center" color="text.primary">
            Aucun compte ?{' '}
            <Link href="/authentication/sign-up" underline="none">
              Inscrivez vous
            </Link>
          </Typography>

          {errorMessage && <Typography color="error">{errorMessage}</Typography>}

          <TextField
            variant="filled"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: 'grey.A100',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
          />
          <TextField
            variant="filled"
            label="Mot de passe"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: 'grey.A100',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    size="small"
                    edge="end"
                    sx={{
                      mr: 2,
                    }}
                  >
                    {showPassword ? (
                      <IconifyIcon icon="el:eye-open" color="text.secondary" />
                    ) : (
                      <IconifyIcon icon="el:eye-close" color="text.primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormGroup sx={{ ml: 1, width: 'fit-content' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Rester connecté"
              sx={{
                color: 'text.secondary',
              }}
            />
          </FormGroup>
          <Button
            onClick={handleSubmit}
            sx={{
              fontWeight: 'fontWeightRegular',
            }}
          >
            Se connecter
          </Button>
          <Divider />
        </Stack>
      </Paper>
    </>
  );
};

export default Login;