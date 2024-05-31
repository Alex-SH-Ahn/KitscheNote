import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  border: 1px solid #2bd566;
  align-items: center;
  cursor: default;
`;

const Title = styled.h1`
  padding: 0 1rem;
  span:nth-child(1) {
    color: #10e7e2;
  }
  span:nth-child(2) {
    color: #f9eb0f;
  }
  span:nth-child(3) {
    color: #3968cb;
  }
  span:nth-child(4) {
    color: #ff2153;
  }
  span:nth-child(5) {
    color: #2bd566;
  }
  span:nth-child(6) {
    color: #3968cb;
  }
  font-weight: bold;
  font-size: 50px;
  text-shadow: 4px 4px 0 #515151;
`;

export default function Nav() {
  const title = "Kitsch Note"
    .split("")
    .map((char, index) => <span key={index}>{char}</span>);
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}
