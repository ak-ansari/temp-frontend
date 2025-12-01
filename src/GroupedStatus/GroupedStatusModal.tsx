import { FC, SyntheticEvent, useState } from "react";
import { Box, Divider, Skeleton, Typography } from "@mui/material";
import GroupedStatusAccordion from "./GroupedStatusAccordion";
import { GroupedStatusColorConfig as ColorConfig } from "./GroupedStatusHelper";
import { IGroupedStatusData, Status } from "../types";
import { CustomColors } from "../colors";
import {
  Timeline,
  TimelineConnector,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
} from "../../Timeline/index";
import Footer from "./Footer";

interface Props {
  data: IGroupedStatusData[];
  title: string;
  totalTat: number;
  totalDelay: number;
}

const GroupedStatusModal: FC<Props> = ({ data, title,totalDelay,totalTat }) => {
  const [expendedIdx, setExpendedIdx] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const onAccordionChange =
    (idx: number) => (event: SyntheticEvent, newExpended: boolean) =>
      setExpendedIdx(newExpended ? idx : null);
  return (
    <Box
      sx={{ 
        p: 1.5,
        mt: 0.5,
        width: 440,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxHeight: "590px"
      }}
    >
      <Box sx={{
        display:"flex",
        paddingTop:0,
        paddingBottom:1,
        paddingLeft:0.25

      }}>
        <Typography sx={{}}>{title}</Typography>
      </Box>
      <Divider sx={{my:0.75,width:"100%"}}/>
      <Timeline
        sx={{
          width: "100%",
          flex:1,
          overflowY:"auto"
        }}
      >
        {loading
          ? [0, 1, 2, 3, 4, 5].map((key) => (
              <TimelineItem key={key} sx={{ width: "100%" }}>
                <TimelineSeparator sx={{ mb: 0 }}>
                  <TimelineConnector
                    sx={{
                      flex: 0,
                      minHeight: "20.5px",
                      visibility: key !== 0 ? "visible" : "hidden",
                    }}
                  />
                  <TimelineDot
                    sx={{
                      height: "6px",
                      width: "6px",
                      minHeight: "4px",
                      minWidth: "4px",
                      bgcolor: CustomColors.PRIMARY_MAIN,
                      margin: 0,
                    }}
                  />
                  <TimelineConnector
                    sx={{
                      visibility:
                        key !== data?.length - 1 ? "visible" : "hidden",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent sx={{ flex: 1, minHeight: 0, mx: 1 }}>
                  <Skeleton width={"100%"} height={56} />
                  <Divider />
                </TimelineContent>
              </TimelineItem>
            ))
          : (data || [])?.map((row, idx) => {
              const config = ColorConfig[row.status];
              const nextConfig =
                ColorConfig[data[idx + 1]?.status] ||
                ColorConfig[Status.PENDING];
              return (
                <TimelineItem key={idx} sx={{ width: "100%", gap: 1 }}>
                  <TimelineSeparator sx={{ mb: 0 }}>
                    <TimelineConnector
                      sx={{
                        flex: 0,
                        minHeight: "20.5px",
                        visibility: idx !== 0 ? "visible" : "hidden",
                        borderColor: config?.connectorColor,
                      }}
                    />
                    <TimelineDot
                      sx={{
                        height: "8px",
                        width: "8px",
                        bgcolor: config?.dotColor,
                        margin: 0,
                      }}
                    />
                    <TimelineConnector
                      sx={{
                        visibility:
                          idx !== data?.length - 1 ? "visible" : "hidden",
                        borderColor: nextConfig.connectorColor,
                      }}
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ flex: 1, minHeight: 0, mx: 0 }}>
                    <GroupedStatusAccordion
                      expended={expendedIdx === idx}
                      onChange={onAccordionChange(idx)}
                      data={row}
                    />
                    {idx !== data.length - 1 && <Divider />}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
      </Timeline>
      <Footer totalDelay={totalDelay} totalTat={totalTat}></Footer>
    </Box>
  );
};

export default GroupedStatusModal;
