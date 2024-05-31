import styled from 'styled-components';

const MadeBy = styled.a`
  display: flex;
  justify-content: right;
  margin: 0.5rem 1rem 0 0;
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
  &:visited {
    color: #515151;
  }
  &:hover {
    text-shadow: 2px 2px 0 #000;
  }
`;

export default function Footer() {
  return (
    <>
      <MadeBy href={"https://github.com/Alex-SH-Ahn/KitscheNote"} target="_blank">
        Made by @Alex-SH-Ahn
      </MadeBy>
    </>
  )
}