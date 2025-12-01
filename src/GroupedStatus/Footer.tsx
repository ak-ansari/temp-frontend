import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import Pill from "./Pill";
import { CustomColors } from "../colors";

interface Props {
  totalTat: number;
  totalDelay: number;
}

const Footer: FC<Props> = ({ totalDelay, totalTat }) => {
  const isDelay = totalDelay > 0;
  const config = [
    {
      text: "Total TAT",
      number: totalTat,
      bgColor: CustomColors.PRIMARY_50,
      textColor: CustomColors.BLACK_500,
    },
    {
      text: isDelay ? "Total Delay" : "No Delay!",
      number: totalDelay,
      bgColor: isDelay ? CustomColors.WARNING_50 : CustomColors.SUCCESS_25,
      textColor: isDelay ? CustomColors.WARNING_500 : CustomColors.SUCCESS_500,
    },
  ];
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        gap: 1.5,
        width: "100%",
      }}
    >
      {config.map(({ number, text, textColor, bgColor }, key) => (
        <Pill
        key={key}
          sx={{
            flex: 1,
            bgcolor: bgColor,
            px: 1.5,
            py: 1,
            paddingRight: "40px",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={!isDelay && key === 1 ? "center" : "space-between"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                color: CustomColors.BLACK_500,
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "140%",
              }}
            >
              {text}
            </Typography>
            {isDelay && (
              <Typography
                sx={{
                  color: textColor,
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "140%",
                }}
              >
                {number} Days
              </Typography>
            )}
          </Stack>
        </Pill>
      ))}
    </Stack>
  );
};

export default Footer;
