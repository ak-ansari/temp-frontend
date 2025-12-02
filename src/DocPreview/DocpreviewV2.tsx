import { SxProps, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import DialogRenderer from "../DialogRenderer";
import ViewWrapper from "./ViewWrapper";
import { DocCategory } from "./DocPreview.types";

interface Props {
  open: boolean;
  onClose: () => void;
  dialogSx?: SxProps;
  dialogTitle?: string;
  titleSx?: SxProps;
}

const DocPreviewV2: FC<Props> = ({
  open,
  dialogTitle = "Preview",
  onClose,
  dialogSx = {},
  titleSx = {},
}) => {
  const [currentFile, setCurrentFile] = useState<{
    fileData: { fileUrl: string; fileCategory: DocCategory } | null;
    index: number;
  }>({ fileData: null, index: -1 });
  const fileDetails = [
    {
      fileUrl: "https://picsum.photos/seed/picsum/200/300",
      fileCategory: DocCategory.IMAGE,
    },
    {
      fileUrl: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileCategory: DocCategory.DOCUMENT,
    },
    {
      fileUrl:
        "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
      fileCategory: DocCategory.PDF,
    },
    {
      fileUrl: "https://www.unm.edu/~unmvclib/powerpoint/pptexamples.ppt",
      fileCategory: DocCategory.DOCUMENT,
    },
    {
      fileUrl:
        "https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls",
      fileCategory: DocCategory.DOCUMENT,
    },
  ];
  const onNextClick = () => {
    if (currentFile.index !== fileDetails.length - 1) {
      setCurrentFile({
        fileData: fileDetails[currentFile.index + 1],
        index: currentFile.index + 1,
      });
    }
  };
  const onPreviousClick = () => {
    if (currentFile.index > 0) {
      setCurrentFile({
        fileData: fileDetails[currentFile.index - 1],
        index: currentFile.index - 1,
      });
    }
  };
  useEffect(() => {
    //fetch file details here
    setCurrentFile({
      fileData: fileDetails[0],
      index: 0
    });
    return ()=>{}
  }, []);
  return (
    <DialogRenderer
      open={open}
      sx={{
        width: "866px",
        minHeight: "576px",
        maxHeight: "85vh",
        borderRadius: 2,
        ...dialogSx,
      }}
      onClose={() => onClose()}
      title={dialogTitle}
      titleStyles={{ p: 2, minHeight: 0, ...titleSx }}
      contentSx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <ViewWrapper
        onNext={onNextClick}
        onPrevious={onPreviousClick}
        fileDetails={{
          fileUrl: currentFile.fileData?.fileUrl,
          fileCategory: currentFile.fileData?.fileCategory,
        }}
        currentIndex={currentFile.index}
        total={fileDetails?.length}
      />
      <Typography sx={{ height: "50px", flexShrink: 0, minHeight: 0 }}>
        Footer text
      </Typography>
    </DialogRenderer>
  );
};

export default DocPreviewV2;
