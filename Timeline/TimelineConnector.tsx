import { Box, Divider, SxProps, useTheme } from '@mui/material';
import { FC } from 'react';

interface Props {
  color?: string
  sx?: SxProps;
}

const TimelineConnector: FC<Props> = ({ color, sx = {} }) => {
  const theme = useTheme();
  return (
    <Divider
      orientation="vertical"
      sx={{
        borderColor: color || theme.palette.grey[400],
        borderWidth:"1px",
        flex:1,
        ...sx,
      }}
    />
  );
};

export default TimelineConnector;
