import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25%;
  padding: 1rem;
  border: 1px solid #2bd566;
`;

const ShortTermBtn = styled.button`
  border: 4px dashed #10e7e2;
  background-color: #ff2153;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  &.selected {
    box-shadow: 5px 5px 0 black;
  }
`;

const LongTermBtn = styled.button`
  border: 4px dashed #3968cb;
  background-color: #2bd566;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px;
  margin-top: 1.5rem;
  width: 100%;
  border-radius: 10px;
  &.selected {
    box-shadow: 5px 5px 0 black;
  }
`;

export default function SideBar() {
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <Wrapper>
      <ShortTermBtn
        className={selectedButton === "shortTerm" ? "selected" : ""}
        onClick={() => setSelectedButton("shortTerm")}>
        Short-Term
      </ShortTermBtn>
      <LongTermBtn
        className={selectedButton === "longTerm" ? "selected" : ""}
        onClick={() => setSelectedButton("longTerm")}>
        Long-Term
      </LongTermBtn>
    </Wrapper>
  );
}
