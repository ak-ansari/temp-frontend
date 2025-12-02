import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import ImageViewer from "./ImageViewer";
import { CustomColors } from "../colors";
import DocumentViewer from "./DocumentViewer";
import { DocCategory } from "./DocPreview.types";
import ArrowNextIcon from "@mui/icons-material/NavigateNextOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";

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
        display: "flex",
        overflowY: "hidden",
        bgcolor: CustomColors.BLACK_100,
      }}
    >
      <Box
        sx={{
          width: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {currentIndex > 0 && (
          <IconButton children={<ArrowBackIcon />} onClick={onPrevious} />
        )}
      </Box>
      {(() => {
        switch (fileDetails.fileCategory) {
          case DocCategory.IMAGE:
            return <ImageViewer fileUrl={fileDetails.fileUrl} />;
          case DocCategory.PDF:
            return <DocumentViewer isPdf fileUrl={fileDetails.fileUrl} />;
          case DocCategory.DOCUMENT:
            return <DocumentViewer fileUrl={fileDetails.fileUrl} />;
        }
      })()}
      <Box
        sx={{
          width: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {currentIndex < total - 1 && (
          <IconButton children={<ArrowNextIcon />} onClick={onNext} />
        )}
      </Box>
    </Box>
  );
};

export default ViewWrapper;
