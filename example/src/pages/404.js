/** @jsx jsx */
import { jsx, Heading, Text } from "theme-ui";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <Heading>NOT FOUND</Heading>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Layout>
);

export default NotFoundPage;
