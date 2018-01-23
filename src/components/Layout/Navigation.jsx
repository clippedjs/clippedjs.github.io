import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import UserLinks from '../UserLinks'

const NavContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  border-bottom: 1px solid rgb(246, 242, 248);
  box-shadow: 0 8px 6px -6px #ddd;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: white;
  
  .nav-link {
    font-size: 1.6rem;
    margin-right: 50px;
    font-weight: 600;
    color: ${props => props.theme.brand};
    padding: 4px 0.7rem 0;
  }
  
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    section {
      margin-bottom: 20px;
    }
    
    span {
      display: none;
    }
    
  }
`

class Navigation extends React.Component {

  render() {
    return (
      <NavContainer>
        <section>        
          <Link className='nav-link' to='/' >Clipped.js</Link>        
        </section>        
        <div style={{flex: 1}} />
        <section>
          <Link className='nav-link' to='/hello-world' >Docs</Link>
          <Link className='nav-link' to='/about' >About</Link>
        </section>
        <span><UserLinks /></span>
      </NavContainer>
    )
  }
}

export default Navigation
