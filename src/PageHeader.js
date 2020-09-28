import React from 'react';
import './App.css';
import Hero from './Hero'
import { Container, Segment, Menu, Button } from 'semantic-ui-react'

function PageHeader() {
  return (
    <div>
        <Segment
          inverted
          textAlign='center'
          style={{ height: 500, padding: '1em 0em' }}
          vertical
        >
          <Menu
            inverted='true'
            pointing='true'
            secondary='true'
            size='large'
          >
          <Container>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>How it works</Menu.Item>
            <Menu.Item as='a'>Requesters</Menu.Item>
            <Menu.Item as='a'>Workers</Menu.Item>
            <Menu.Item as='a'>Pricing</Menu.Item>
            <Menu.Item as='a'>About</Menu.Item>
            <Menu.Item position='right'>
              <Button as='a' inverted={true}>
                Sign in
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
        <Hero />
      </Segment>
    </div>
  );
}

export default PageHeader;
