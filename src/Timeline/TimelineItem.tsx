import { Box, SxProps } from '@mui/material';
import { FC } from 'react';

interface Props {
    sx?: SxProps
}

const TimelineItem: FC<Props> = ({children,sx={}}) => {
  return (
    <Box sx={{
        display: "flex",
        ...sx
    }}>{children}</Box>
  );
};

export default TimelineItem;