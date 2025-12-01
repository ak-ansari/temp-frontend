import { Button, Typography, Box, Popover } from "@mui/material";
import GroupedStatusModal from "./GroupedStatus/GroupedStatusModal";
import { IGroupedStatusData, Status } from "./types";
import { useState } from "react";

export default function App() {
  const dummyData: IGroupedStatusData[] = [
    {
      status: Status.COMPLETED,
      completionDate: "2025-08-12T18:30:00.000+00:00",
      groupedStatus: "Onboarding",
      tat: 7,
      delay: 4, // delay in days;
      totalDays: 9, // taken time in days
      statusData: [
        {
          status: Status.COMPLETED,
          name: "Welcome call",
          date: "2025-08-12T18:30:00.000+00:00",
        },
        {
          status: Status.COMPLETED,
          name: "Document Verification",
          date: "2025-08-08T18:30:00.000+00:00",
        },
        {
          status: Status.PENDING,
          name: "Customer form",
          date: "2025-08-12T18:30:00.000+00:00",
        },
      ],
    },
    {
      status: Status.COMPLETED,
      tat: 6,
      completionDate: "2025-08-29T18:30:00.000+00:00",
      groupedStatus: "Design",
      delay: 1, // delay in days;
      totalDays: 8, // taken time in days
      statusData: [
        {
          status: Status.COMPLETED,
          name: "Welcome call",
          date: "2025-08-12T18:30:00.000+00:00",
        },
        {
          status: Status.COMPLETED,
          name: "Document Verification",
          date: "2025-08-08T18:30:00.000+00:00",
        },
        {
          status: Status.PENDING,
          name: "Customer form",
          date: "2025-08-12T18:30:00.000+00:00",
        },
      ],
    },
    {
      status: Status.COMPLETED,
      tat: 18,
      completionDate: "2025-08-29T18:30:00.000+00:00",
      groupedStatus: "Payment",
      delay: 0, // delay in days;
      totalDays: 7, // taken time in days
      statusData: [
        {
          status: Status.COMPLETED,
          name: "Welcome call",
          date: "2025-08-12T18:30:00.000+00:00",
        },
        {
          status: Status.COMPLETED,
          name: "Document Verification",
          date: "2025-08-08T18:30:00.000+00:00",
        },
        {
          status: Status.PENDING,
          name: "Customer form",
          date: "2025-08-12T18:30:00.000+00:00",
        },
      ],
    },
    {
      status: Status.ONGOING,

      tat: 10,
      completionDate: "2025-09-12T18:30:00.000+00:00",
      groupedStatus: "Site Installation",
      delay: 4, // delay in days;
      totalDays: 2, // taken time in days
      statusData: [
        {
          status: Status.COMPLETED,
          name: "Welcome call",
          date: "2025-08-12T18:30:00.000+00:00",
        },
        {
          status: Status.COMPLETED,
          name: "Document Verification",
          date: "2025-08-08T18:30:00.000+00:00",
        },
        {
          status: Status.PENDING,
          name: "Customer form",
          date: "2025-08-12T18:30:00.000+00:00",
        },
      ],
    },
    {
      status: Status.UPCOMING,

      tat: 2,
      groupedStatus: "Quality Audit",
      delay: 0, // delay in days;
      totalDays: 9, // taken time in days
      statusData: [],
    },
    {
      status: Status.UPCOMING,

      tat: 2,
      groupedStatus: "Completed",
      delay: 0, // delay in days;
      totalDays: 9, // taken time in days
      statusData: [],
    },
    {
      status: Status.UPCOMING,

      tat: 2,
      groupedStatus: "Completed",
      delay: 0, // delay in days;
      totalDays: 9, // taken time in days
      statusData: [],
    },
    {
      status: Status.UPCOMING,

      tat: 2,
      groupedStatus: "Completed",
      delay: 0, // delay in days;
      totalDays: 9, // taken time in days
      statusData: [],
    },
    {
      status: Status.UPCOMING,

      tat: 2,
      groupedStatus: "Completed",
      delay: 0, // delay in days;
      totalDays: 9, // taken time in days
      statusData: [],
    },
    {
      status: Status.UPCOMING,

      tat: 2,
      groupedStatus: "Completed",
      delay: 0, // delay in days;
      totalDays: 9, // taken time in days
      statusData: [],
    },
    {
      status: Status.UPCOMING,

      tat: 2,
      groupedStatus: "Completed",
      delay: 0, // delay in days;
      totalDays: 9, // taken time in days
      statusData: [],
    },
    {
      status: Status.UPCOMING,

      tat: 2,
      groupedStatus: "Completed",
      delay: 0, // delay in days;
      totalDays: 9, // taken time in days
      statusData: [],
    },
    {
      status: Status.UPCOMING,

      tat: 2,
      groupedStatus: "Completed",
      delay: 0, // delay in days;
      totalDays: 9, // taken time in days
      statusData: [],
    },
  ];
  const [modalOpen, setModalOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<any>();
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
          setAnchorEl(e.currentTarget);
        }}
      >
        Click Here
      </Button>
      <Popover
        open={modalOpen}
        anchorEl={anchorEl}
        onClose={() => setModalOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <GroupedStatusModal title="Project Stage" data={dummyData} totalDelay={2} totalTat={41}/>
      </Popover>
    </Box>
  );
}
