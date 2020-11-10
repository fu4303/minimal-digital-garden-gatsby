import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ChakraProvider, Text, UnorderedList, ListItem, Image } from "@chakra-ui/core";
import theme from './src/theme';
import Code from './src/components/blog/code';
import Layout from './src/components/layout';

const components = {
  code: (props) => <Code {...props}/>,
  h1: (props) => (
    <Text fontSize="6xl" mb={3} fontFamily="heading">
      {props.children}
    </Text>
  ),
  h2: (props) => (
    <Text fontSize="4xl" my={3} fontFamily="heading">
      {props.children}
    </Text>
  ),
  h3: (props) => (
    <Text fontSize="3xl" my={3} fontFamily="heading">
      {props.children}
    </Text>
  ),
  ul: (props) => <UnorderedList my={2}>{props.children}</UnorderedList>,
  li: (props) => <ListItem fontFamily="body">{props.children}</ListItem>,
  p: (props) => <Text my={2} fontSize="xl" fontFamily="body">{props.children}</Text>,
  img: (props) => (
    <Image m="0 auto" src={props.src} alt={props.alt} boxSize={props.boxSize} />
  ),
  wrapper: ({children, ...props}) => {
    console.log({props})
    return (
      <Layout>
          {children}
    </Layout>
    )
  },
}

export const wrapRootElement = ({ element }) => (
  <ChakraProvider resetCSS theme={theme}>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ChakraProvider>
  
)