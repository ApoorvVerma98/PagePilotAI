import React from "react";
import AnimateSphere from "../assets/animatedSphere.png";

import {
  AnimatedDesign,
  BodyContainer,
  CheckIcon,
  Headline,
  HighlightedText,
  ListAndNotificationContainer,
  ListContainer,
  MainContentContainer,
  Notification,
  NotificationContent,
  NotificationsContainer,
  NotificationText,
  NotificationTime,
  ShopifyLogo,
  SubText,
} from "./HowItWorksStyles";
import { ListItem } from "@mui/material";

const HowItWorks = () => {
  return (
    <BodyContainer>
      <MainContentContainer>
        <AnimatedDesign src={AnimateSphere} alt="Design" />
        <Headline>
          Take the <span>guesswork</span> out of <br />
          profitable dropshipping
        </Headline>
        <SubText>
          PagePilot.ai allows you to test multiple products, using
          industry-leading <br /> conversion practices to give your pages an edge over
          the competition.
        </SubText>

<ListAndNotificationContainer>

        <ListContainer>
          <ListItem>
            <CheckIcon>✔</CheckIcon>
            Inefficient and time-consuming manual work
          </ListItem>
          <ListItem>
            <CheckIcon>✔</CheckIcon>
            The high cost of human resources
          </ListItem>
          <ListItem>
            <CheckIcon>✔</CheckIcon>
            Falling behind the competition
          </ListItem>
          <ListItem>
            <CheckIcon>✔</CheckIcon>
            Inconsistent quality and output
          </ListItem>
          <ListItem>
            <CheckIcon>✔</CheckIcon>
            Limited scalability and flexibility
          </ListItem>
          <ListItem>
            <CheckIcon>✔</CheckIcon>
            Spending big on ads without getting sales
          </ListItem>
        </ListContainer>

        <NotificationsContainer>
          <Notification>
            <ShopifyLogo src="shopify-logo.png" alt="Shopify" />
            <NotificationContent>
              <NotificationText>
                Your Store has a new order for 1 item totaling $34.99
              </NotificationText>
              <NotificationTime>1m ago</NotificationTime>
            </NotificationContent>
          </Notification>
          <Notification>
            <ShopifyLogo src="shopify-logo.png" alt="Shopify" />
            <NotificationContent>
              <NotificationText>
                Your Store has a new order for 1 item totaling $19.99
              </NotificationText>
              <NotificationTime>1m ago</NotificationTime>
            </NotificationContent>
          </Notification>
          <Notification>
            <ShopifyLogo src="shopify-logo.png" alt="Shopify" />
            <NotificationContent>
              <NotificationText>
                Your Store has a new order for 1 item totaling $59.97
              </NotificationText>
              <NotificationTime>1m ago</NotificationTime>
            </NotificationContent>
          </Notification>
        </NotificationsContainer>
</ListAndNotificationContainer>

      </MainContentContainer>
    </BodyContainer>
  );
};

export default HowItWorks;
