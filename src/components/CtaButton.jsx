import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class ctaButton extends Component {
  render() {
    const { children } = this.props
    return(
      <Link style={{border: 'none'}} to={this.props.to}>
        <ButtonContainer>
          {children}
        </ButtonContainer>
      </Link>
    )
  }
}

export default ctaButton

const ButtonContainer = styled.div`
  margin: 1em 0;
  margin-right: 0px;
  font-size: 1.05em;
  font-weight: 600;
  letter-spacing: 0.1em;
  min-width: 8em;
  text-align: center;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: rgb(255, 255, 255);
  background-color: white;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.brand};
  color: ${props => props.theme.brand};
  display: inline-block;
  transition: all .3s ease;
  
  &:hover {
    color: white;
    background: ${props => props.theme.brand};
  }
`
