import { Box, Stack, SxProps } from '@mui/material';
import { FC } from 'react';

interface Props {
  sx?: SxProps
}

const TimelineSeparator: FC<Props> = ({children,sx={}}) => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection:"column",
        justifyContent:"start",
        alignItems:"center",
        ...sx
    }}>
        {children}
    </Box>
  );
};

export default TimelineSeparator;