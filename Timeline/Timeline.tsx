import { Stack, SxProps } from '@mui/material';
import { FC } from 'react';

interface Props {
  sx?: SxProps
}
// wrapper component for timeline
const Timeline: FC<Props> = ({children,sx={}}) => {
  return (
    <Stack direction="column" sx={sx}>{children}</Stack>
  );
};

export default Timeline;