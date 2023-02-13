import styled from "styled-components";
import qr from "./assets/image-qr-code.png";

const Container = styled.div`
  margin: 0px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const QrContainer = styled.div`
  height: 450px;
  width: 280px;
  border-radius: 10px;
  border: 1px solid white;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Image = styled.img`
  margin: 10px;
  height: 250px;
  width: 250px;
  border-radius: 10px;
`;

const MainTextContainer = styled.div`
  width: 200px;
`;

const TextContainer1 = styled.p`
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
`;

const TextContainer2 = styled.p`
  font-size: 14px;
  font-weight: 100;
  color: gray;
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <QrContainer>
          <Image src={qr} />
          <MainTextContainer>
            <TextContainer1>
              Improve your front-end skills by building projects
            </TextContainer1>
            <TextContainer2>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </TextContainer2>
          </MainTextContainer>
        </QrContainer>
      </Wrapper>
    </Container>
  );
}

export default App;
