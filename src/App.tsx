import { Button, Typography, Box, Popover } from "@mui/material";
import GroupedStatusModal from "./GroupedStatus/GroupedStatusModal";
import { IGroupedStatusData, Status } from "./types";
import { useState } from "react";
import DocPreviewV2 from "./DocPreview/DocpreviewV2";
import { CustomColors } from "./colors";
import ViewWrapper from "./DocPreview/ViewWrapper";

export default function App() {
 
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Button
        onClick={(e) => {
          setModalOpen(true);
        }}
      >
        Click Here
      </Button>
      <DocPreviewV2 onClose={()=> setModalOpen(false)} open={modalOpen}/>
        {/* <Box
        sx={{
          bgcolor: CustomColors.BLACK_100,
          display: 'flex',
          alignItems: 'center',
          overflowY: 'auto',
          height:"300px",
          flex:1,
          minHeight:0
        }}
      >
        <ViewWrapper />
      </Box> */}
    </Box>
  );
}
