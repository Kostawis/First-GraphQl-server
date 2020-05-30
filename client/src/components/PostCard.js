import React from "react";
import moment from "moment";
// import "moment/locale/pl";
import { Icon, Card, Label, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PostCard = ({ post: { body, createdAt, id, username } }) => {
  const likePost = () => {
    console.log("Like post!");
  };
  const commentOnPost = () => {
    console.log("Comment on post");
  };
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>
          {`${username[0].toUpperCase()}${username.slice(1)}`}
        </Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {/* {moment(createdAt).locale("pl").fromNow(true)} */}
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="teal" basic>
            <Icon name="heart" />
          </Button>
          <Label as="a" basic color="teal" pointing="left">
            0
          </Label>
        </Button>
        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button color="blue" basic>
            <Icon name="comments" />
          </Button>
          <Label as="a" basic color="blue" pointing="left">
            0
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
