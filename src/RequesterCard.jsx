import React from 'react';
import { Card, Image } from 'semantic-ui-react' 

function RequesterCard(props) {
  return (
    <Card>
    <Image src={props.avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
  );
}

export default RequesterCard;
