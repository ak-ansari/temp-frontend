import { Box, CardMedia } from "@mui/material";
import { FC } from "react";

interface Props {
  fileUrl: string;
}

const VideoPlayer: FC<Props> = ({ fileUrl }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardMedia
        src={fileUrl}
        component={"video"}
        sx={{
          height: "100%",
          width: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
        controls
      />
    </Box>
  );
};

export default VideoPlayer;
