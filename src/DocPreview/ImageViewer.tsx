import { Box } from "@mui/material";
import { FC, useState } from "react";

interface Props {
  fileUrl: string;
  alt?: string;
}

const ImageViewer: FC<Props> = ({ fileUrl, alt = "image" }) => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const handleRotate = () => setRotation((prev) => prev + 90);
  const handleZoomIn = () => setScale((prev) => prev * 1.2);
  const handleZoomOut = () => setScale((prev) => Math.max(1, prev / 1.2));
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={fileUrl}
        alt={alt}
        style={{
          height: "100%",
          width: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          transform: `rotate(${rotation}deg) scale(${scale})`,
          transition: "transform 0.3s ease-in-out",
        }}
      />
    </Box>
  );
};

export default ImageViewer;
