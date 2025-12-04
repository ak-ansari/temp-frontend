import { Box, SxProps, Typography } from '@mui/material';
import { FC } from 'react';
import ErrorIcon from "@mui/icons-material/ErrorOutlineOutlined"
import { CustomColors } from '../colors';

interface Props {
    errorText: string,
    sx?: SxProps
}

const UnsupportedFormat: FC<Props> = ({errorText,sx={}}) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        padding: '20px 60px',
        display: 'flex',
        gap: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#F5F8FD',
        width: 'fit-content',
        ...sx
      }}
    >
      <ErrorIcon
        sx={{
          height: '20px',
          width: '20px',
          color: '#9EA2B8',
        }}
      />
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '20px',
          color: CustomColors.BLACK_300,
        }}
      >
        {errorText}
      </Typography>
    </Box>
  );
};

export default UnsupportedFormat;
