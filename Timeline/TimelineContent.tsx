import { Box, SxProps } from '@mui/material';
import { FC } from 'react';

interface Props {
    sx?: SxProps
}

const TimelineContent: FC<Props> = ({children,sx}) => {
  return (
    <Box sx={{minHeight: "70px", mx: 1, ...sx}}>{children}</Box>
  );
};

export default TimelineContent;