import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars} from 'react-icons/fa';

export const ParentDiv = styled.div`
  background-color: rgba(26, 235, 182, 255);
  position: fixed;
`

export const Div = styled.div`
  margin: 20px;
  width: 100vw;
  height: 100vh;
  background: rgba(26, 235, 182, 255);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 01), 0 6px 20px 0 rgba(0, 0, 0, 01);
`

export const Nav = styled.nav`
  width: 100%;
  height: 17vh;
  list-style-type: none;
  overflow: hidden;
`

export const NavLink = styled(Link)`
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  display: inline;
  max-height: 20vh;

  &.active {
      color: #15cdfc;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
  }
`

export const Picture = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  float: right;
  margin-right: 40px;
  height: 70%;
`

export const ProfileImage = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`