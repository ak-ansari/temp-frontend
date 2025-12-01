import { AccordionSummary, Stack, styled, Typography } from "@mui/material";
import { FC } from "react";
import moment from "moment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DatePill from "./Pill";
import { IGroupedStatusData, Status } from "../types";
import { CustomColors } from "../colors";

interface Props {
  data: IGroupedStatusData;
}
const StyledPillText = styled(Typography)(() => ({
  fontSize: "10px",
  fontWeight: 500,
}));

const GroupedStatusAccordionSummary: FC<Props> = ({ data }) => {
  return (
    <AccordionSummary
      sx={{
        flex: 1,
        boxShadow: 0,
        p: 0,
      }}
      expandIcon={<ExpandMoreIcon />}
      disabled={data.status === Status.UPCOMING}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flex={1}
      >
        <Stack
          component={"span"}
          gap={1.5}
          alignItems={"center"}
          direction={"row"}
        >
          <DatePill status={data.status} sx={{ height: "29px" }}>
            {data.completionDate ? (
              <Stack direction={"row"} gap={0.5} alignItems={"center"}>
                <StyledPillText sx={{ fontSize: "16px", fontWeight: 700 }}>
                  {moment(data.completionDate).date()}
                </StyledPillText>
                <StyledPillText>
                  {moment(data.completionDate).format("MMM")}
                </StyledPillText>
              </Stack>
            ) : (
              <StyledPillText>Upcoming</StyledPillText>
            )}
          </DatePill>

          <Stack>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: CustomColors.BLACK_500,
              }}
            >
              {data.groupedStatus}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: CustomColors.BLACK_500,
                lineHeight: "140%",
              }}
            >
              TAT - {data.tat} Days
            </Typography>
          </Stack>
        </Stack>
        {data.delay > 0 ? (
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color:
                data.status === Status.ONGOING
                  ? CustomColors.ALERT_500
                  : CustomColors.WARNING_500,
            }}
          >
            {data.status === Status.ONGOING
              ? "Ongoing"
              : `${data.delay}D Delay`}
          </Typography>
        ) : (
          "-"
        )}
      </Stack>
    </AccordionSummary>
  );
};

export default GroupedStatusAccordionSummary;
