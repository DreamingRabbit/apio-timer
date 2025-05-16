import styled from "styled-components";
import { Row } from "antd";

// this should be automatically flexed
export const BoardSection = styled.section`
  height: 50vh; 
  overflow-y: auto;
  padding: 2rem;
`;

export const BoardRow = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1600px;
  margin: auto;
`;

export const BoardTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #1e40af;
`;

export const BoardContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  width: 100%;
  background-color: #fafafa;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 2rem;
    color: #000000;
  }

  h2 {
    font-size: 1.5rem;
    color: #000000;
  }

  h3 {
    font-size: 1.25rem;
    color: #000000;
  }

  ul {
    list-style: disc;
    padding-left: 1.5rem;
  }

  code {
    background: #eee;
    padding: 0.2rem 0.4rem;
    border-radius: 0.3rem;
  }
`;