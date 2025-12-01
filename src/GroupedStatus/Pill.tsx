import { Box, SxProps } from '@mui/material';
import { FC } from 'react';
import { CustomColors } from '../colors';
import { Status } from '../types';
interface Props {
  status?: Status;
  sx?: SxProps;
}
const styleConfig: Partial<Record<Status, { bgColor: string; borderColor: string }>> = {
  [Status.COMPLETED]: {
    bgColor: CustomColors.PRIMARY_50,
    borderColor: CustomColors.PRIMARY_50,
  },
  [Status.ONGOING]: {
    bgColor: CustomColors.ALERT_50,
    borderColor: CustomColors.ALERT_50,
  },
  [Status.UPCOMING]: {
    bgColor: CustomColors.PRIMARY_50,
    borderColor: CustomColors.PRIMARY_50,
  },
};

const DatePill: FC<Props> = ({ sx = {}, status, children }) => {
  const style = styleConfig[status || Status.UPCOMING]
  return (
    <Box
      sx={{
        border: `1px solid ${style.borderColor}`,
        bgcolor: style.bgColor,
        borderRadius: 1,
        py: 0.5,
        px: 1,
        textAlign: 'center',
        ...sx
      }}
    >
        {children}
    </Box>
  );
};

export default DatePill;
