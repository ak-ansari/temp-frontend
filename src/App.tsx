import { Button, Typography, Box, Popover } from "@mui/material";
import GroupedStatusModal from "./GroupedStatus/GroupedStatusModal";
import { IGroupedStatusData, Status } from "./types";
import { useState } from "react";
import DocPreviewV2 from "./DocPreview/DocpreviewV2";
import { CustomColors } from "./colors";
import ViewWrapper from "./DocPreview/ViewWrapper";
import DelayHistory from "./Hoverbox/DelayHistory";
import { IDelayHistory } from "./Hoverbox/types";

export default function App() {
  const delayData: IDelayHistory = {
    initialDate: "2025-07-26",
    updatedDate: "2025-08-06",
    delayData: [
      {
        stage: "Onboarding",
        id: 0,
        delay: 1,
        comment: "Comment: Customer not available",
      },
      {
        stage: "Payment",
        id: 1,
        delay: 10,
        comment: "Comment: Customer did not receive the call",
      },
      {
        stage: "Onboarding",
        id: 2,
        delay: 1,
        comment: "Comment: Customer not available",
      },
    ],
  };
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
      {/* <DocPreviewV2 fileIndex={2} onClose={()=> setModalOpen(false)} open={modalOpen}/> */}
      
        <DelayHistory data={delayData} />
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
