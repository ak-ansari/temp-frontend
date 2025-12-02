import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  SxProps,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FC } from 'react';

const DialogRenderer: FC<DialogProps & { titleStyles?: SxProps,contentSx?: SxProps }> = ({
  open,
  title,
  children,
  onClose = () => {},
  titleStyles = {},
  sx = {},
  contentSx={}
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      closeAfterTransition={false}
      PaperProps={{
        sx: {
          borderRadius: 3,
          ...sx,
        },
      }}
    >
      <DialogTitle sx={titleStyles}>
        {title}
        <IconButton
          aria-label="close"
          onClick={() => onClose({}, 'escapeKeyDown')}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{ p: 0,...contentSx}}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogRenderer;
