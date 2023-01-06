import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeadContainer = styled.div`
  width: 100vw;
  height: 5vh;
  background-color: slategray;

  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  margin: 20px;

  > button {
    cursor: pointer;
  }
`;
const RightSection = styled.div`
  display: flex;

  > button {
    cursor: pointer;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <HeadContainer>
      <LeftSection>
        <button onClick={() => handleNavigate("/")}>로고</button>
        <button onClick={() => handleNavigate("/blog")}>Travel Logs</button>
      </LeftSection>
      <RightSection>
        <button
          className="login_button"
          onClick={() => handleNavigate("/login")}
        >
          Log In
        </button>
        <button
          className="signup_button"
          onClick={() => handleNavigate("/signup")}
        >
          Sign Up
        </button>
      </RightSection>
    </HeadContainer>
  );
};

export default Header;
