import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ToDoInput = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitBtn = styled.button`
  cursor: pointer;
  background-color: #3968cb;
  color: #ff68a8;
  border: 3px dashed #f9eb0f;
  margin-top: 1.5rem;
  width: 20%;
  font-size: 1.2rem;
  padding: 8px;
  border-radius: 10px;
  &:hover {
    background-color: #ff2153;
    color: #3968cb;
    box-shadow: 4px 4px 0 black;
  }
`;

const InputTodo = styled.input`
  box-sizing: border-box;
  display: inline-block;
  width: 101%;
  height: 2.5rem;
  background-color: #efb6bf;
  border: 5px dashed #10e7e2;
  border-radius: 10px;
  font-size: 1.5rem;
  &:focus {
    outline: none;
  }
`;

const Write = styled.h2`
  cursor: default;
  margin: 1rem 0;
  span:nth-last-child(6) {
    color: #2bd566;
  }
  span:nth-last-child(5) {
    color: #efc40e;
  }
  span:nth-last-child(4) {
    color: #3968cb;
  }
  span:nth-last-child(3) {
    color: #ff2153;
  }
  span:nth-last-child(2) {
    color: #3a7359;
  }
  span:nth-last-child(1) {
    color: #2a326d;
  }
  text-shadow: 2px 2px 0 #404040;
`;

const Selection = styled.div``;

const Deadline = styled.div``;

const TermSelect = styled.select``;

export default function SubmitSection({ text }) {
  const [input, setInput] = useState("");
  const [todos, setToDos] = useState([]);
  //* Set Date for Deadline
  const [value, setTime] = useState(currentTime);
  const termOptions = ["Short-Term", "Long-Term"];
  console.log(currentTime);
  todos.forEach((todo) => console.log(todo.date));

  //* Set Date for Created At
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours(); // 24 hours
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const currentTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

  const onTimeChange = (value) => setTime(value); //* To Set Deadline

  const onChange = (e) => setInput(e.target.value); //* To Show What I have been Typing

  const onSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("To Do Item cannot be empty.");
      return;
    }
    setToDos([...todos, { text: input, date: value.toISOString() !== currentTime ? value.toISOString() : currentTime, checked: false }]);
    setInput("");
  };

  //* Change Title Color
  const write = "Write Your To-Do!"
    .split("")
    .map((char, index) => <span key={index}>{char}</span>);

  return (
    <Wrapper>
      <Write>{write}</Write>
      <ToDoInput onSubmit={onSubmit}>
        <InputTodo value={input} onChange={onChange} />
        <Selection>
          <DateTimePicker
            onTimeChange={onTimeChange}
            defaultValue={currentTime}
            value={value}
          />
          <TermSelect>
            <option>Select Term</option>
            {termOptions.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </TermSelect>
        </Selection>
        <SubmitBtn>Submit</SubmitBtn>
      </ToDoInput>
    </Wrapper>
  );
}
