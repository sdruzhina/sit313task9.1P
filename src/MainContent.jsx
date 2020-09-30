import React from 'react';
import RequesterList from './RequesterList'
import { Container, Segment, Header } from 'semantic-ui-react'

function MainContent() {
  return (
    <div>
      <Segment
        textAlign='center'
      >
        <Header as='h1'>
          Featured Requesters
        </Header>
        <Container>
            <RequesterList />
        </Container>

      </Segment>
    </div>
  );
}

export default MainContent;
