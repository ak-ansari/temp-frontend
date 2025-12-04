import { Stack, styled, SxProps, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import DialogRenderer from "../DialogRenderer";
import ViewWrapper from "./ViewWrapper";
import { DocCategory } from "./DocPreview.types";
import { CustomColors } from "../colors";

interface Props {
  open: boolean;
  onClose: () => void;
  dialogSx?: SxProps;
  dialogTitle?: string;
  titleSx?: SxProps;
  fileIndex: number
}
const FooterText = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '-2%',
  lineHeight:"20px",
  color:"#2C3045"
}));

const DocPreviewV2: FC<Props> = ({
  open,
  dialogTitle = "Preview",
  onClose,
  dialogSx = {},
  titleSx = {},
  fileIndex
}) => {
  const [currentFile, setCurrentFile] = useState<{
    fileData: { fileUrl: string; fileCategory: DocCategory } | null;
    index: number;
  }>({ fileData: null, index: -1 });
  const fileDetails = [

    {
      fileUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      fileCategory: DocCategory.VIDEO
    },
    {
      fileUrl: "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_h264.mp4",
      fileCategory: DocCategory.VIDEO
    },
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
      fileData: fileDetails[fileIndex],
      index: fileIndex
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
      titleStyles={{ p: 2, minHeight: 0,fontSize:"18px",lineHeight:"20px", ...titleSx }}
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
      <Stack
        sx={{
          flexDirection: 'row',
          gap: 2.5,
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          minHeight:0,
          padding:2,
        }}
      >
        <FooterText>
          something.pdf
        </FooterText>
        <FooterText>
          (1/4)
        </FooterText>
      </Stack>
    </DialogRenderer>
  );
};

export default DocPreviewV2;
