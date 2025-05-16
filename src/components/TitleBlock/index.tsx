// components/TitleBlock/index.tsx
import React, { useEffect, useState } from "react";
import { TitleSection, TitleRow, TitleText, TitleInput } from "./styles";
import { useLogin } from "../../contexts/LoginContext";

const TitleBlock = () => {
  const { loggedIn } = useLogin();
  const [title, setTitle] = useState(() => localStorage.getItem("title") || "APIO 2025 试机");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("title", title);
  }, [title]);

  const handleBlur = () => {
    setEditing(false);
    localStorage.setItem("title", title);
  };

  return (
    <TitleSection>
      <TitleRow>
        {loggedIn && editing ? (
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <TitleText
            onClick={() => loggedIn && setEditing(true)}
            title={loggedIn ? "Click to edit" : ""}
          >
            {title}
          </TitleText>
        )}
      </TitleRow>
    </TitleSection>
  );
};

export default TitleBlock;