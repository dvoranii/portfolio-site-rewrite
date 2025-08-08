import styled from "styled-components";

import ContactWorldBG from "../../assets/images/Contact/Contact-World-BG.svg";

export const ContactOuter = styled.section`
  padding-top: 3rem;
  background-color: #0777da;
  background-image: linear-gradient(#0778daf1, #045ba7ec),
    url(${ContactWorldBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 4.8rem;
  background-attachment: fixed;
`;

export const ContactInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 0 2rem;
  max-width: 1600px;
  margin: 0 auto;
`;

export const ContactTitle = styled.h1`
  text-align: center;
  color: #f1f1f1;
  letter-spacing: 0.25px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.342);
  font-family: "Roboto", sans-serif;
  font-size: 2.4rem;
`;

export const ContactDescription = styled.p`
  color: white;
  font-family: "Montserrat", sans-serif;
`;

export const ContactForm = styled.form`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BaseInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #f8f8f8;
  border-radius: 4px;
  background-color: #00519780;
  color: #fefefe;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;

  &::placeholder {
    color: rgba(255, 255, 255, 0.808);
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px white;
  }
`;

export const NameInput = styled(BaseInput)``;
export const EmailInput = styled(BaseInput)``;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  left: 2px;
  top: 4.5rem;
  font-size: 1.1rem;
  color: white;
  letter-spacing: 0.3px;
  margin-top: 3px;

  @media (max-width: 527px) {
    font-size: 1rem;
  }
`;

export const MessageTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  background-color: #00519780;
  color: #fefefe;
  max-height: 270px;
  min-height: 200px;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;

  &::placeholder {
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    color: rgba(255, 255, 255, 0.767);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px white;
  }

  @media (max-width: 527px) {
    margin-top: 1.2rem;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

export const SendButton = styled.button`
  padding: 1rem 2rem;
  background-color: #f1f1f1;
  color: #0073d8;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #03497b;
    color: white;
  }
`;

export const OutlookText = styled.span`
  font-family: "Montserrat";
  color: white;
`;

export const OutlookLink = styled.a`
  color: #f1f1f1;
  text-decoration: none;
  border-bottom: 2px solid white;
  transition: all 150ms ease;

  &:hover {
    text-decoration: none;
    border-bottom: 2px solid white;
    text-shadow: 0 0 4px rgb(0, 225, 255);
  }
`;

export const LoadingWrapper = styled.div`
  width: 65px;
  height: 65px;
`;

export const CheckWrapper = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageSent = styled.p`
  font-size: 1rem;
  color: #fff;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 0.4rem;
`;
