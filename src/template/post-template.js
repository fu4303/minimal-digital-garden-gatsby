import React from "react";
import { Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./../components/layout";
import getShareImage from "@jlengstorf/get-share-image";
import Header from "./../components/blog/header";
import SEO from "react-seo-component";
import WordCount from "../assets/word-count";
import ReadingTime from "./../assets/reading-time";
// import ShareOnTwitter from "../components/blog/share-on-twitter";

const PostTemplate = ({ data, pageContext }) => {
  const { frontmatter, body, slug, timeToRead, wordCount } = data.mdx;
  const { title, description, canonical } = frontmatter;
  const { previous, next } = pageContext;
  const titleBox = useColorModeValue("brand.bg", "dark.lightGrey");

  const socialImage = getShareImage({
    title: title,
    tagline: description,
    cloudName: "richardhaines",
    imagePublicID: "social-card/social-card-garden",
    textAreaWidth: 1019,
    textLeftOffset: 130,
    titleFontSize: 80,
    titleColor: "1f2127",
    titleExtraConfig: "_bold",
    titleBottomOffset: 110,
    titleGravity: "north_west",
    taglineGravity: "north_west",
    titleFont: "Jost.ttf",
    taglineFont: "Jost.ttf",
    taglineTopOffset: 482,
    taglineLeftOffset: 130,
    taglineFontSize: 35,
    textColor: "ffffff",
    version: "v1605269202",
  });

  const domain = "richardhaines.dev";
  const backgroundImage = "/diamonds.png";

  const api = "https://i.microlink.io/";
  const cardUrl = `https://cards.microlink.io/?p=undefined&preset=richhaines&headline=${title}&caption=${description}&domain=${domain}&backgroundImage=${backgroundImage}`;
  const image = `${api}${encodeURIComponent(cardUrl)}`;

  return (
    <>
      <Layout>
        <SEO
          title={title}
          titleTemplate={slug}
          titleSeparator={`-`}
          description={description}
          image={image}
          pathname={canonical ? canonical : `https://richardhaines.dev${slug}`}
          twitterUsername="@studio_hungry"
          author="Rich Haines"
          article={true}
        />
        <Header previous={previous} next={next} opacity={0.7} />

        <Flex
          bgColor={titleBox}
          wrap="wrap"
          maxW={["300px", "600px"]}
          p={3}
          my={6}
        >
          <Text
            as="h1"
            fontSize={["4xl", "5xl"]}
            color="brand.black"
            fontFamily="heading"
            fontWeight={800}
            lineHeight={1}
            my={5}
          >
            {title}
          </Text>
        </Flex>
        <Flex>
          <Flex p={3} align="center">
            <WordCount />
            <Text fontSize="xl">{wordCount.words} words</Text>
          </Flex>
          <Flex p={3} align="center">
            <ReadingTime />
            <Text fontSize="xl">{timeToRead} minutes</Text>
          </Flex>
        </Flex>

        <MDXRenderer>{body}</MDXRenderer>
        {/* <ShareOnTwitter/> */}
      </Layout>
    </>
  );
};

export default PostTemplate;

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        description
        canonical
      }
      slug
      body
      excerpt
      timeToRead
      wordCount {
        words
      }
    }
  }
`;
