import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { keyframes } from "@mui/system";

// Sticky Bar
export const StickyBar = styled('div')({
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 30,
  width: "100%",
  backgroundColor: "#4318FF",
  padding: "10px 24px",
  textAlign: "center",

});

// NavBar
export const NavBarContainer = styled('div')({
  padding: "10px 80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // border: "1px solid green",
  marginTop: "105px",
});

export const LogoContainer = styled('div')({
  display: "flex",
  alignItems: "center",
  fontSize: "24px",
  color: "#FFF",

});

export const LogoImage = styled('img')({
  height: "40px",
  maxWidth: "175px",
  "@media (min-width: 600px)": {
    height: "50px",
  },
  "@media (min-width: 960px)": {
    height: "60px",
  },
});


export const NavBarTabsContainer = styled('div')({
  display: "flex",
  justifyContent: "center",
  gap: "60px",
  // flex: 1, 
  // border: "1px solid red",
  padding: "16px 24px 16px 24px",
});

// Logo
export const NavBarLogo = styled('div')({
  fontWeight: "bold",
  fontSize: "20px",
  color: "#fff",
});

// NavBar Tabs
export const NavBarTabs = styled(Typography)({
  color: "white",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
  fontWeight: 500,
  wordSpacing: "0px",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
    color: "#797AFF",
  },
});

export const StyledLink = styled('span')({
  color: 'rgba(187, 247, 208, 1)',
  fontSize: '.875rem',
  lineHeight: '1.75rem',
  textDecoration: 'none',
  display: 'inline-block',
  borderBottom: '1px solid rgba(187, 247, 208, 1)',
  cursor: 'pointer',
  marginLeft: '4px',
  '&:hover': {
    textDecoration: 'none',
  },
});

export const StyledText = styled('span')({
  color: 'rgba(187, 247, 208, 1)',
  fontSize: '.875rem',
  lineHeight: '1.75rem',
  textDecoration: 'none',
  display: 'inline-block',
  paddingBottom: '2px',
  cursor: 'pointer',
  marginLeft: '10px',
  '&:hover': {
    textDecoration: 'none',
  },
})




export const LoginButtonContainer = styled('div')({

})

export const LoginButton = styled('button')({
  alignItems: "center",
  gap: "8px",
  backgroundColor: "#050522",
  padding: "16px 24px",

  borderRadius: "8px",
  border: "1px solid #868CFF",
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: "500",
  textAlign: "center",
  textDecoration: "none",
  transition: "background-color 150ms ease-in-out, box-shadow 150ms ease-in-out, border-color 150ms ease-in-out",
  "&:hover": {
    background: "linear-gradient(90deg, #6B46C1, #2B6CB0)",
    boxShadow: "0px 10px 10px 0px rgba(134, 140, 255, 0.5)",
    // borderColor: "#6B46C1",
  },
});



// StickyLink
export const StickyLink = styled('span')({
  color: "white",
  fontSize: "16px",
  lineHeight: "24px",
  textDecoration: "none",


});

// Main Container
export const MainContainer = styled('div')({
  minHeight: "100vh",
  // width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "90px 10px",
  color: "#FFF",
  // border: "1px solid red",
});

// Main Headline
export const Headline = styled('span')({
  fontSize: '60px',
  fontWeight: 900,
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  textAlign: 'center',
  marginBottom: '16px',
  padding: '0px',
  lineHeight: '65px',
  // wordSpacing: 10,
  "@media (min-width: 600px)": {
    // fontSize: '42px',
  },
  "@media (min-width: 960px)": {
    // fontSize: '56px',
  },

  span: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontWeight: 900,
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




// Sub Headline
export const SubHeadline = styled('p')({
  fontSize: "18px",
  textAlign: "center",
  marginBottom: "32px",
  color: "#FFFFFF",
  "@media (min-width: 600px)": {
    fontSize: "22px",
  },
  "@media (min-width: 960px)": {
    fontSize: "26px",
  },
});

export const StarsContainer = styled('span')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: 300,

  '.stars-wrapper': {
    display: 'flex',
    marginLeft: '8px',
    img: {
      width: '20px',
      height: '20px',
      marginRight: '4px',
    },
  },
});

export const BoldText = styled('span')({
  fontWeight: 800,
  lineHeight: '28px',

})

const beamRotation = keyframes`
  0% {
    background-position: 360%;
  }
  100% {
    background-position: 0%;
  }
`;

export const ButtonWrapper = styled('div')({
  position: "relative",
  padding: "4px",
  borderRadius: "16px",
  display: "inline-block",
  overflow: "hidden",
  backgroundColor: "",

  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "16px",
    padding: "1px",

    background: "conic-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 180%)",
    backgroundSize: "200% 200%",
    zIndex: 0,
    animation: `${beamRotation} 8s linear infinite`,
  },
});


// Styled button
export const CTAButton = styled('button')({
  padding: "14px 28px",
  backgroundColor: "#2B6CB0",
  color: "#FFF",
  border: "none",
  borderRadius: "12px",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "bold",
  textAlign: "center",
  zIndex: 1,
  position: "relative",
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: "#2C5282",
  },

  "@media (min-width: 600px)": {
    fontSize: "20px",
  },
  "@media (min-width: 960px)": {
    fontSize: "22px",
  },
});


// Customer Review
export const CustomerReview = styled('p')({
  marginTop: "32px",
  fontSize: "1rem",
  lineHeight: '1.75',
  textAlign: "center",
  color: "#FFFFFF",
  fontStyle: "italic",
  maxWidth: "800px",
  "@media (min-width: 600px)": {
    fontSize: "16px",
  },
  "@media (min-width: 960px)": {
    fontSize: "18px",
  },
});

export const DarkGreyText = styled('span')({
  color: "#A0AEC0",
  fontWeight: 300,
})

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

// Rocket Image
export const RocketImage = styled('img')({
  position: "absolute",
  bottom: "-210px",
  left: "-10px",
  zIndex: 0,
  width: "100%",
  filter: "blur(px)",

  maxHeight: "370px",
  maxWidth: "400px",
  transform: "rotate(0deg)",
  // border: '10px solid red',

  opacity: 0.1,
  animation: `${smoothMove} 5s infinite ease-in-out`,
  "@media (min-width: 1280px)": {
    opacity: 1,
  },
});

export const RocketImageContainer = styled('div')({
  border: '10px solid red',
})

export const AnimatedSphereContainer = styled('div')({

})

export const AnimatedSphere = styled('img')({
  position: "absolute",
  right: "10px",
  bottom: "-440px",
  zIndex: -1,
  width: "400px",
  height: "400px",
  filter: "blur(12px)",

  opacity: 0.5,
  animation: `${smoothMove} 5s infinite ease-in-out`,
});

export const VideoContainer = styled('div')({
  position: 'relative',
  zIndex: 1,
  marginTop: '1rem',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});

export const CdnVideo = styled('video')({
  borderRadius: "16px",
  zIndex: 2,
  boxShadow: "-20px 20px 20px -20px #e2e8ff1f inset",
  boxSizing: "border-box",

});

export const AnimatedConeContainer = styled('div')({

})

export const AnimatedCone = styled('img')({
  position: "absolute",
  left: "1px",
  bottom: "-1120px",
  zIndex: -1,
  width: "280px",
  height: "280px",
  filter: "blur(12px)",
  opacity: 0.5,
  animation: `${smoothMove} 5s infinite ease-in-out`,
});

export const FourCardsContainer = styled('div')({
  display: "flex",
  marginTop: "40px",
  // border: "1px solid red",
  width: "90%",
  justifyContent: "space-between",
});


export const CardWrapper = styled('div')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "16px",
  lineHeight: "20px",
  textDecoration: "none solid rgb(0, 0, 0)",
  color: "#ffffff",
  background: `
    radial-gradient(103.78% 100% at 50% 0%, #7692ff00 80.55%, #7a96ff0a),
    radial-gradient(120.05% 100% at 50% 0%, #e2e8ff00 33.78%, #e2e8ff14),
    #e2e8ff03
  `,
  height: "162px",
  width: "22%",
  border: "0px solid #E9ECEF",
  padding: "3.5rem 1.5rem",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "1rem",
  boxShadow: "-20px 20px 20px -20px #e2e8ff1f inset",
  transition: "all",
  boxSizing: "border-box",
  

});


export const CardNumber = styled('div')({
  fontSize: "50px",
  fontWeight: "700",
  marginBottom: "10px",
});

export const CardDescription = styled('div')({
  fontSize: "18px",
  fontWeight: "700",
  textAlign: "center",
  textWrap: "nowrap",
  padding: "10px",
});






