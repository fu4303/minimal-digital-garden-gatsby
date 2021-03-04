import React from "react";
import {
  Box,
  Grid,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import { RoughNotation } from "react-rough-notation";
import ModeButton from "./mode-button";
import ExternalLink from "./../external-link";
import Github from "../../assets/github";
import Twitter from "../../assets/twitter";
import RSS from "../../assets/rss";

const Subtitle = () => {
  const { colorMode } = useColorMode();
  const textBox = useColorModeValue("brand.bg", "dark.black");
  const text = useColorModeValue("brand.black", "dark.lightGrey");
  const isDarkMode = colorMode === "dark";
  return (
    <Grid
      templateColumns={[
        "max-content repeat(5, 1fr)",
        "max-content auto 100px 50px 50px 50px 150px",
      ]}
      templateRows="auto"
      w="100%"
      placeItems="center"
      my={4}
    >
      <RoughNotation
        type="underline"
        strokeWidth={2}
        color="#000"
        show={!isDarkMode}
      >
        <Box
          gridColumn={1}
          bgColor={textBox}
          height="min-content"
          mt={[2, 5]}
          px={2}
          style={{
            transform: isDarkMode ? "rotate(5deg)" : null,
          }}
        >
          <Text
            fontSize={["md", "xl"]}
            fontWeight={500}
            fontFamily="heading"
            color={text}
          >
            By Rich Haines
          </Text>
        </Box>
      </RoughNotation>
      <Box gridColumn={["1 / 7", 7]} gridRow={[4, 1]} mt={[6, 0]}>
        <iframe
          src="https://github.com/sponsors/molebox/button"
          title="Sponsor Rich"
          height="35"
          width="115"
          style={{ border: 0 }}
        ></iframe>
      </Box>
      <ModeButton />
      <ExternalLink
        icon={<Github />}
        href="https://github.com/molebox"
        gridColumn={4}
        name="Github link"
      />
      <ExternalLink
        icon={<Twitter />}
        href="https://twitter.com/studio_hungry"
        gridColumn={5}
        name="Twitter link"
      />
      <Link as={GatsbyLink} href="/rss.xml" gridColumn={6}>
        <VisuallyHidden>Rich Haines RSS Feed</VisuallyHidden>
        <RSS />
      </Link>
    </Grid>
  );
};

export default Subtitle;
