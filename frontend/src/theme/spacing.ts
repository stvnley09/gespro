import { SpacingOptions } from '@mui/system/createTheme/createSpacing';

const spacing: SpacingOptions | undefined = (factor: number) => `${factor * 4}px`; // Exemple d'unité de 4px

export default spacing;
