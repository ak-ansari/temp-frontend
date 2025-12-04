import { Box } from "@mui/system";
import { FC, useMemo } from "react";

interface Props {
  isPdf?: boolean;
  fileUrl: string;
}

const DocumentViewer: FC<Props> = ({ isPdf = false, fileUrl }) => {
  const officeViewerUrl = "https://view.officeapps.live.com/op/view.aspx";
  const url = useMemo(() => {
    return isPdf
      ? fileUrl
      : `${officeViewerUrl}?src=${encodeURIComponent(fileUrl)}`;
  }, [isPdf, fileUrl]);

  return (
    <Box sx={{flex:1}}>
      <iframe style={{border:0}} width="100%" height="100%" src={url}></iframe>
    </Box>
  );
};

export default DocumentViewer;
