// components/NoticeBoard/index.tsx
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { BoardSection, BoardRow, BoardTitle, BoardContent } from "./styles";
import { useLogin } from "../../contexts/LoginContext";

const defaultNotice = `
- # A类选手在E区就坐，B类选手坐在其余区域，找空闲机器使用即可。
- ## 登陆操作系统的账号和密码均为friend。
- ### 系统中预置了NOIP 2024题面以及数据，可以使用selfEval（见快捷工具界面）进行自测。
`;

const NoticeBlock = () => {
  const { loggedIn } = useLogin();
  const [notice, setNotice] = useState(() => {
    return localStorage.getItem("notice") || defaultNotice;
  });

  useEffect(() => {
    localStorage.setItem("notice", notice);
  }, [notice]);

  return (
    <BoardSection>
      <BoardRow>
        <BoardTitle>选手公告</BoardTitle>
        {loggedIn ? (
          <textarea
            value={notice}
            onChange={(e) => setNotice(e.target.value)}
            style={{
              width: "100%",
              height: "200px",
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
              fontFamily: "monospace",
            }}
          />
        ) : (
          <BoardContent>
            <ReactMarkdown>{notice}</ReactMarkdown>
          </BoardContent>
        )}
      </BoardRow>
    </BoardSection>
  );
};

export default NoticeBlock;