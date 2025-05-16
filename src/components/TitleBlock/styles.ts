import styled from "styled-components";
import { Row } from "antd";

// this should be automatically flexed
export const TitleSection = styled.section`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleRow = styled(Row)`
  justify-content: center;
`;

export const TitleText = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  color: #1e293b;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #2563eb;
  }
`;

export const TitleInput = styled.input`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  max-width: 800px;
  border: none;
  border-bottom: 2px solid #60a5fa;
  outline: none;
  background: transparent;
  color: #1e293b;
`;