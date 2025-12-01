import { Box, SxProps, useTheme } from '@mui/material';
import { FC } from 'react';

interface Props {
  // define props here
  sx?: SxProps;
}

const TimelineDot: FC<Props> = ({ sx = {}, children }) => {
  const theme = useTheme();
  return (
    <>
      {children ? (
        children
      ) : (
        <Box
          sx={{
            height: "8px",
            width: "8px",
            borderRadius: '50%',
            color: theme.palette.grey[400],
            bgcolor: theme.palette.grey[400],
            m:"4px",
            ...sx,
          }}
        ></Box>
      )}
    </>
  );
};

export default TimelineDot;
