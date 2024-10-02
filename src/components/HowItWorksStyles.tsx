import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { keyframes } from "@mui/system";

export const MainContentContainer = styled("div")({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "16px",
  lineHeight: "20px",
  color: "#ffffff",
  background: `
    radial-gradient(103.78% 100% at 50% 0%, #7692ff00 80.55%, #7a96ff0a),
    radial-gradient(120.05% 100% at 50% 0%, #e2e8ff00 33.78%, #e2e8ff14),
    #e2e8ff03
  `,
  height: "100vh",
  width: "80vw",
  border: "0px solid #E9ECEF",
  // border: "1px solid red",

  padding: "3.5rem 1.5rem",
  position: "relative",
  alignItems: "center",
  borderRadius: "1rem",
  boxShadow: "-20px 20px 20px -20px #e2e8ff1f inset",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
});

export const BodyContainer = styled("div")({
  padding: "3.5rem 1.5rem",
  alignItems: "center",
  borderRadius: "1rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",

});

const smoothMove = keyframes`
  0% {
    transform: translateX(0) translateY(0) rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: translateX(-20px) translateY(-10px) rotate(-5deg);
    opacity: 1;
  }
  100% {
    transform: translateX(0) translateY(0) rotate(0deg);
    opacity: 0.2;
  }
`;

export const CenteredGreyText = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#9B9B9B",
});

export const AnimatedDesignContainer = styled("div")({});

export const AnimatedDesign = styled("img")({
  position: "absolute",
  right: "-140px",
  top: "-160px",
  zIndex: -1,
  width: "400px",
  height: "400px",
});

export const ListAndNotificationContainer = styled ('div')({
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid red",
  alignItems: "center",
  borderRadius: "8px",
  marginBottom: "12px",
  padding: "0px 10px",
    width: "100%",
})

export const NotificationsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#2E2E2E",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "400px",
  marginTop: "32px",
  border: "1px solid red",
});

export const Notification = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#3A3A3A",
  padding: "16px",
  borderRadius: "8px",
  marginBottom: "12px",
});

export const ShopifyLogo = styled("img")({
  width: "40px",
  height: "40px",
  marginRight: "16px",
});

export const NotificationContent = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const NotificationText = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "14px",
});

export const NotificationTime = styled(Typography)({
  color: "#A8A8A8",
  fontSize: "12px",
});
export const ListContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  color: "#B8B8B8",
  fontSize: "16px",
  marginTop: "24px",
  maxWidth: "400px",
  border: "1px solid red",
});

export const ListItem = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "12px",
});

export const CheckIcon = styled("span")({
  color: "#A6CE39",
  marginRight: "12px",
  fontSize: "20px",
});

export const Headline = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "3rem",
  fontWeight: 800,
  lineHeight: "63px",
  textAlign: "center",
  paddingTop: "12rem",
  fontFamily: '"Plus Jakarta Sans", sans-serif',


  span: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontWeight: 800,
    lineHeight: '65px',
    textDecoration: 'none solid rgba(0, 0, 0, 0)',
    textAlign: 'center',
    wordSpacing: '0px',
    height: 'auto',
    width: 'auto',
    border: '0px solid #E9ECEF',
    display: 'inline',
    transform: 'none',
    transition: 'all',
    boxSizing: 'border-box',

    // Gradient styles applied to the text
    background: 'linear-gradient(180deg, #ffffff 10%, #7496F8)',
    backgroundClip: 'text',
    color: 'transparent',  // Makes the gradient visible
    '--tw-gradient-from-position': '30%',
    '--tw-gradient-to-position': '100%',
  }
});

export const HighlightedText = styled("span")({
  color: "#A8B3FF",
});

export const SubText = styled(Typography)({
  color: "#B8B8B8",
  fontSize: "18px",
  textAlign: "center",
  marginBottom: "32px",
  paddingTop: "2rem",

});
