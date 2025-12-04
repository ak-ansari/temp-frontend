import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import ImageViewer from "./ImageViewer";
import { CustomColors } from "../colors";
import OfficeDocViewer from "./DocumentViewer";
import { DocCategory } from "./DocPreview.types";
import ArrowNextIcon from "@mui/icons-material/NavigateNextRounded";
import ArrowBackIcon from "@mui/icons-material/NavigateBeforeRounded";
import UnsupportedFormat from "./UnsupportedFormat";
import VideoPlayer from "./VideoPlayer";

interface Props {
  fileDetails: {
    fileUrl: string;
    fileCategory: DocCategory;
  };
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  total: number;
}

const ViewWrapper: FC<Props> = ({
  fileDetails,
  onNext,
  onPrevious,
  total,
  currentIndex,
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        overflowY: 'hidden',
        bgcolor: CustomColors.BLACK_100,
      }}
    >
      <Box
        sx={{
          width: '64px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {currentIndex > 0 && (
          <IconButton
            sx={{ bgcolor: '#FFF', borderRadius: '50%' }}
            children={<ArrowBackIcon />}
            onClick={onPrevious}
          />
        )}
      </Box>
      {(() => {
        switch (fileDetails.fileCategory) {
          case DocCategory.IMAGE:
            return <ImageViewer fileUrl={fileDetails.fileUrl} />;
          case DocCategory.PDF:
            return <OfficeDocViewer isPdf fileUrl={fileDetails.fileUrl} />;
          case DocCategory.DOCUMENT:
            return <OfficeDocViewer fileUrl={fileDetails.fileUrl} />;
          case DocCategory.VIDEO:
            return <VideoPlayer fileUrl={fileDetails.fileUrl} />;
          default:
            return <Box sx={{
              flex:1,
              justifyContent:"center",
              alignItems:"center",
              display:"flex",
            }}><UnsupportedFormat sx={{height:"64px"}} errorText='Unsupported File'/></Box>;
        }
      })()}
      <Box
        sx={{
          width: '64px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {currentIndex < total - 1 && (
          <IconButton
            sx={{ bgcolor: '#FFF', borderRadius: '50%' }}
            children={<ArrowNextIcon />}
            onClick={onNext}
          />
        )}
      </Box>
    </Box>
  );
};

export default ViewWrapper;

