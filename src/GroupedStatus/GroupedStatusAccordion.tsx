import { Accordion, AccordionDetails, Stack, Typography } from "@mui/material";
import { FC } from "react";
import moment from "moment";
import TickIcon from "@mui/icons-material/CheckCircleOutline";
import ThreeDot from "@mui/icons-material/PendingOutlined";
import { IGroupedStatusData, Status } from "../types";
import { CustomColors } from "../colors";
import GroupedStatusAccordionSummary from "./GroupedStatusAccordionSummary";

interface Props {
  expended: boolean;
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    expanded: boolean
  ) => void | undefined;
  data: IGroupedStatusData;
}

const GroupedStatusAccordion: FC<Props> = ({ expended, onChange, data }) => {
  return (
    <Accordion
      // slotProps={{
      //   transition: {
      //     timeout: 600,
      //     easing: {
      //       enter: 'cubic-bezier(0.4, 0, 0.2, 1)',
      //       exit: 'cubic-bezier(0.4, 0, 0.2, 1)',
      //     },
      //   },
      // }}
      expanded={expended}
      onChange={onChange}
      sx={{
        width: "100%",
        border: 0,
        boxShadow: 0,

        // --- FIX SUMMARY EXPANDED MARGIN ---
        "& .MuiAccordionSummary-content": {
          margin: 0,
          minHeight: 0,
          padding: 1.5,
        },

        "& .MuiAccordionSummary-content.Mui-expanded": {
          margin: 0,
          minHeight: 0,
          paddingTop: 1.5,
          paddingBottom: 1,
        },

        "& .MuiAccordionSummary-root.Mui-expanded": {
          minHeight: 0,
          margin: 0,
          paddingBottom: 1,
        },

        // --- FIX DETAILS PADDING ---
        "& .MuiAccordionDetails-root": {
          padding: 0.75,
          margin: 0,
          marginRight: 1.5,
          marginBottom: "11px",
          borderRadius: 1.5,
          border: `1px solid ${CustomColors.PRIMARY_100}`,
          bgcolor: CustomColors.BLACK_26,
          overflow: "hidden",
        },
      }}
    >
      <GroupedStatusAccordionSummary data={data} />
      <AccordionDetails
        sx={{
          
        }}
      >
        <Stack>
          {data.statusData.map((statusData, sIdx) => (
            <Stack
              direction={"row"}
              key={sIdx}
              sx={{
                justifyContent: "space-between",
                px: 1.5,
                py: 0.75,
                gap:1.5
              }}
            >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1E1E1E",
                    lineHeight: "130.88%",
                    flex:1
                  }}
                >
                  { statusData.status === Status.COMPLETED ? moment(statusData.date).format("DD MMM 'YY") : "Pending"}
                </Typography>
              <Stack
                direction={"row"}
                sx={{
                  justifyContent: "start",
                  gap: "5px",
                  flex: 3,
                }}
              >
                {statusData.status === Status.COMPLETED ? (
                  <TickIcon sx={{ width: "20px", height: "20px" }} />
                ) : (
                  <ThreeDot sx={{ width: "20px", height: "20px" }} />
                )}

                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: CustomColors.BLACK_500,
                  }}
                >
                  {statusData.name}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default GroupedStatusAccordion;
