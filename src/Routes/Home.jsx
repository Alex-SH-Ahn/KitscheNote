import styled from "styled-components";
import Main from "../Components/Main";
import Nav from "../Components/Nav";
import SideBar from "../Components/SideBar";
import Footer from '../Components/Footer';
import SubmitSection from '../Components/SubmitSection';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid #2bd566;
  box-sizing: border-box;
`;

const Section = styled.section`
  display: flex;
`;

export default function Home() {
  return (
    <Wrapper>
      <Nav />
      <Section>
        <SideBar />
        {/* <Main /> */}
        <SubmitSection />
      </Section>
      <Footer />
    </Wrapper>
  );
}

