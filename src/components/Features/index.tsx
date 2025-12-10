"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  LuBot,
  LuCreditCard,
  LuGauge,
  LuLanguages,
  LuLayoutTemplate,
  LuLifeBuoy,
} from "react-icons/lu";

const Features = () => {
  return (
    <Flex
      id="features"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
      >
        Everything You Need to Build Smarter
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={10}
        my={10}
      >
        {Cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title}>
            {card.text}
          </Card>
        ))}
      </Grid>
    </Flex>
  );
};

interface CardProps {
  icon: IconType;
  title: string;
  children: ReactNode;
}

const Card = ({ icon, title, children }: CardProps) => (
  <Flex maxW={350} role="group">
    <Icon
      as={icon}
      fontSize={48}
      mr={5}
      p={2}
      bg={StargateColors.lightGrey}
      rounded={"md"}
      strokeWidth={1.5}
      transition={"all 0.25s ease"}
      _groupHover={{
        bg: StargateColors.black,
        color: StargateColors.white,
        shadow: "dark-lg",
        transform: "scale(1.1)",
      }}
    />
    <Flex direction={"column"} gap={1}>
      <Heading fontSize={"xl"}>{title}</Heading>
      <Text fontSize={"small"} color={StargateColors.grey}>
        {children}
      </Text>
    </Flex>
  </Flex>
);

const Cards = [
  {
    icon: LuBot,
    title: "AI Workflows",
    text: "Automate creation, decision-making and execution using intelligent agents designed to work the way you do.",
  },
  {
    icon: LuGauge,
    title: "Insight Dashboard",
    text: "Track progress and outcomes with real-time analytics that help you iterate faster and scale confidently.",
  },
  {
    icon: LuCreditCard,
    title: "Secure Transactions",
    text: "Built-in payment infrastructure with encryption and global compliance so you can monetize without stress.",
  },
  {
    icon: LuLanguages,
    title: "Global Communication",
    text: "Reach every audience with seamless multilingual support powered by advanced language understanding.",
  },
  {
    icon: LuLayoutTemplate,
    title: "Launch-Ready Templates",
    text: "Choose from professional templates crafted for speed, quality and flexibility. Customize in minutes.",
  },
  {
    icon: LuLifeBuoy,
    title: "Assisted Support",
    text: "Help whenever you need it, including AI-assisted onboarding that keeps your ideas moving forward.",
  },
];

export default Features;
