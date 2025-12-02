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

  return <iframe width="100%" height="544px" src={url}></iframe>;
};

export default DocumentViewer;
