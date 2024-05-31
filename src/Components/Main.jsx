import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 35rem;
  /* background-color: #ff68a8; */
  padding: 1rem;
  border: 1px solid #2bd566;
  box-sizing: border-box;
`;

const ToDos = styled.div`
  background-color: #efb6bf;
  border: 5px dashed #10e7e2;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  margin-top: 1rem;
`;

const ToDo = styled.div`
  background-color: #efc40e;
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  height: 1.5rem;
  border-radius: 10px;
  cursor: default;
`;

const CheckWContent = styled.div`
  display: flex;
  color: #3968cb;
  width: 80%;
  height: 100%;
`;

const CheckBtn = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-top: 2px;
  border: 2px solid #3968cb;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? "#3968cb" : "transparent")};
`;

const Content = styled.h3`
  margin: 0 1rem;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

const DateWDelete = styled.div`
  display: flex;
`;

const CreatedAt = styled.span`
  color: #2a326d;
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
  cursor: default;
`;

const DeleteBtn = styled.button`
  font-size: 1.5rem;
  background: none;
  border: 0;
  margin-top: 0.4rem;
  color: red;
  cursor: pointer;
`;

export default function Main() {

  //* Delete Function
  const deleteBtn = (index) => {
    setToDos(todos.filter((_, i) => i !== index));
  };

  const toggleCheck = (index) => {
    setToDos(
      todos.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <Wrapper>
      <ToDos>
        {todos.map((todo, index) => (
          <ToDo key={index}>
            <CheckWContent>
              <CheckBtn
                checked={todo.checked}
                onClick={() => toggleCheck(index)}
              />
              <Content checked={todo.checked}>{todo.text}</Content>
            </CheckWContent>
            <DateWDelete>
              <CreatedAt>{todo.date}</CreatedAt>
              <DeleteBtn onClick={() => deleteBtn(index)}>
                <svg
                  dataSlot="icon"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="#FF2153" // change this line
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="30" // add this line
                  height="30" // add this line
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </DeleteBtn>
            </DateWDelete>
          </ToDo>
        ))}
      </ToDos>

      <Write>{write}</Write>
      <ToDoInput onSubmit={onSubmit}>
        <InputTodo value={input} onChange={onChange} />
        <SubmitBtn>Submit</SubmitBtn>
      </ToDoInput>
    </Wrapper>
  );
}
