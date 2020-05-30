import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";

import PostCard from "../components/PostCard";

const Home = () => {
  const { loading, data } = useQuery(FETCH_POST_QUERY);
  const posts = data && data.getPosts;

  return (
    <Grid columns={3} divided>
      <Grid.Row className="page-title">
        <h2>Recent Posts</h2>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h2>Loading posts...</h2>
        ) : (
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: "20px" }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
};

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
    }
  }
`;

export default Home;
