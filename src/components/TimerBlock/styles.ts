import styled from "styled-components"; // ✅ Don't forget this!
import { Row } from "antd";

// this should be automatically flexed
export const TimerSection = styled.section`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimerRow = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClockDisplay = styled("div")`
  font-size: 8vw;
  font-weight: bold;
  text-align: center;
  color: #111827; // Elegant deep black-blue
  text-shadow: none; 
`;

export const RemainingTime = styled("div")`
  font-size: 2vw;
  font-weight: bold;
  text-align: center;
  color: #6b7280; // Soft gray
  text-shadow: none; 
`;