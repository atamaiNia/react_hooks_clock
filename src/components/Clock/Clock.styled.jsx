import styled from 'styled-components';

export const ClockContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 78px;
  font-weight: 700;
  color: #a900f0;
`;

export const Text = styled.p`
  width: 600px;
  margin-bottom: 30px;
  color: black;
  font-weight: 900;
  font-style: italic;

  span {
    color: #a900f0;
    font-weight: 600;
    font-style: normal;
  }
`;

export const Btn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(to right, #7f00ff, #e100ff);
  color: white;
  font-size: 18px;
  font-weight: 700;
  width: 150px;
  height: 50px;
  padding: 5px;
  border: none;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
`;
