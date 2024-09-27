import { ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
interface Project {
  id: number;
  name: string;
  end_date: string;
  status: string;
}

const SaleCard = ({ project }: { project: Project }): ReactElement => {
  return (
    <Stack gap={6} p={5} borderRadius={4} height={1} bgcolor="background.default">
      <Box>
        <Typography variant="h4" color="common.white" mb={4}>
          {project.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          {project.status}
        </Typography>
        <Typography variant="body2" color="text.secondary" lineHeight={1.25}>
          Fin: {project.end_date}
        </Typography>
      </Box>²
    </Stack>
  );
};

export default SaleCard;
