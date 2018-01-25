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
  // color: ${props => props.theme.brand};
  color: white;
  // background: linear-gradient(120deg, ${props => props.theme.brand} 50%, #004E95 50%);
  background: ${props => props.theme.brand};
  box-shadow: 0 2px 30px 4px rgba(69, 115, 222, 0.4) !important;  
  display: inline-block;
  transition: all .5s ease;
  
  &:hover {
    color: white;
    transform: scale(1.01);
    box-shadow: 0 2px 35px 7px rgba(69, 115, 222, 0.6) !important;
  }
`
