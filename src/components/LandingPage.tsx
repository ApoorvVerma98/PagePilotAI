import React from "react";
import {
  BoldText,
  MainContainer,
  Headline,
  SubHeadline,
  CTAButton,
  CustomerReview,
  RocketImage,
  NavBarTabs,
  NavBarContainer,
  NavBarTabsContainer,
  LogoContainer,
  LoginButton,
  LogoImage,
  LoginButtonContainer,
  StickyBar,
  StickyLink,
  ButtonWrapper,
  StyledLink,
  StyledText,
  DarkGreyText,
  VideoContainer,
  CdnVideo,
  AnimatedSphereContainer,
  AnimatedSphere,
  AnimatedConeContainer,
  AnimatedCone,
  FourCardsContainer,
  CardWrapper,
  CardNumber,
  CardDescription,
} from "./LandingPageStyles";
import AppLogo from "../assets/app_logo.svg";
import loginIcon from "../assets/login_icon.svg";
import stars from "../assets/stars.svg";
import { StarsContainer } from "./LandingPageStyles";
import AnimatedRocket from "../assets/heroRocket.png";
import AnimateSphere from "../assets/animatedSphere.png";
import AnimateCone from "../assets/AnimateCone.png";
import { Card } from "@mui/material";

const LandingPage: React.FC = () => {
  return (
    <div>
      <div>
        <StickyBar>
          <StickyLink href="/signup">
            Try PagePilot.ai <span>100% FREE!</span> No credit card required.
          </StickyLink>
        </StickyBar>
      </div>
      {/* NavBar */}
      <NavBarContainer>
        <LogoContainer>
          <LogoImage src={AppLogo} alt="" />
        </LogoContainer>

        <NavBarTabsContainer>
          <NavBarTabs href="#howitworks">How It Works</NavBarTabs>
          <NavBarTabs href="#features">Features</NavBarTabs>
          <NavBarTabs href="#reviews">Reviews</NavBarTabs>
          <NavBarTabs href="#pricing">Pricing</NavBarTabs>
          <NavBarTabs href="#faqs">FAQ's</NavBarTabs>
        </NavBarTabsContainer>

        <LoginButtonContainer>
          <LoginButton>
            <img src={loginIcon} alt="" /> Login
          </LoginButton>
        </LoginButtonContainer>
      </NavBarContainer>

      {/* Main Page Content */}
      <MainContainer>
        <StarsContainer>
          Rated "Excellent"
          <BoldText> 4.8/5 </BoldText>
          {/* Render 5 stars.svg images */}
          <div className="stars-wrapper">
            {Array.from({ length: 5 }).map((_, index) => (
              <img src={stars} alt="Star" key={index} />
            ))}
          </div>
          by our <BoldText> 1000+ </BoldText> happy customers
        </StarsContainer>
        <Headline>
          Create high-converting{" "}
          <span>
            product <br /> pages
          </span>{" "}
          with just a few clicks
        </Headline>
        <SubHeadline>
          PagePilot's AI lets you test multiple products for your online store.
          <br />
          Outpace the competition as you save time, money, and effort.
        </SubHeadline>
        <ButtonWrapper>
          <CTAButton>Start Now For FREE</CTAButton>
        </ButtonWrapper>
        <div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "16px" }}
          >
            <StyledText>
              Shopify Deal: $1 for your first month <span>|</span>
            </StyledText>
            <StyledLink href="/create-store">Create a new store</StyledLink>
          </div>
        </div>
        <RocketImage src={AnimatedRocket} alt="Rocket illustration" />

        {/* Customer Review */}
        <CustomerReview>
          <div className="stars-wrapper">
            {Array.from({ length: 5 }).map((_, index) => (
              <img src={stars} alt="Star" key={index} />
            ))}
          </div>
          "PagePilot.ai is a game-changer! It generates high-converting <br />{" "}
          product pages in seconds, boosting my sales significantly. A must-{" "}
          <br />
          have time-saving tool for all dropshippers."
          <br /> <DarkGreyText>— Anthony Eclipse</DarkGreyText>
        </CustomerReview>

        <AnimatedSphereContainer>
          <AnimatedSphere src={AnimateSphere} alt="" />
        </AnimatedSphereContainer>

        {/* autoplayVideo*/}
        <VideoContainer>
          <CdnVideo
            autoPlay
            muted
            loop
            controls
            style={{ width: "80%", marginTop: "20px" }}
            src="https://cdn.shopify.com/videos/c/o/v/12a7f831d44f4b548d0a6b45839f743d.mp4"
          />
        </VideoContainer>
        <AnimatedConeContainer>
          <AnimatedCone src={AnimateCone} alt="" />
        </AnimatedConeContainer>

        <FourCardsContainer>
          <CardWrapper>
            <CardNumber>20x</CardNumber>
            <CardDescription>Faster than a copywriter ⌛</CardDescription>
          </CardWrapper>
          <CardWrapper>
            <CardNumber>+80h</CardNumber>
            <CardDescription>Timesaved ⏰</CardDescription>
          </CardWrapper>
          <CardWrapper>
            <CardNumber>3.5x</CardNumber>
            <CardDescription>Faster than ChatGPT⚡</CardDescription>
          </CardWrapper>
          <CardWrapper>
            <CardNumber>+$500</CardNumber>
            <CardDescription>Money saved 💸</CardDescription>
          </CardWrapper>
        </FourCardsContainer>
      </MainContainer>
    </div>
  );
};

export default LandingPage;
