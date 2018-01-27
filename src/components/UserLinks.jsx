import React, {Component} from 'react'
import {FaGithubAlt} from 'react-icons/lib/fa'
import {MdMessage, MdEmail} from 'react-icons/lib/md'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    
`

const UserIcon = styled.a`
  margin-left: 25px;
  color: white;
  &:hover {
    color: rgba(0, 0, 0, .2);
    border-bottom: none;
  }
  
  
`

const iconStyle = {
  color: 'black',
  verticalAlign: 'initial',
  width: '20px',
  height: '20px',
}

class UserLinks extends Component {
  render() {
    return (
      <Container className="user-links">
        <UserIcon href="https://github.com/clippedjs/clipped" target="_blank" title="Fork me!">
          <FaGithubAlt style={iconStyle} />
        </UserIcon>
      </Container>
    )
  }
}

export default UserLinks
