import { ReactElement } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import SaleCard from './SaleCard';
import React, { useEffect, useState } from 'react';

// Définir l'interface pour un projet
interface Project {
  id: number;
  name: string;
  end_date: string;
  status: string;
}

const TodaysSales = (): ReactElement => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/projects/get/user', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Envoie du token JWT
          },
        });

        const projects = await response.json();
        console.log(projects);
        setProjects(Array.isArray(projects) ? projects : []);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
      }
    };

    fetchUserProjects();
  }, []);
  
  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={1.25}>
        Projets
      </Typography>
      <Typography variant="subtitle2" color="text.disabled" mb={6}>
        Sales Summary
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={{ xs: 4, sm: 6 }}>
        {projects.map((project) => (
          <Box key={project.id} gridColumn={{ xs: 'span 12', sm: 'span 6', lg: 'span 3' }}>
            <SaleCard project={project} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default TodaysSales;
