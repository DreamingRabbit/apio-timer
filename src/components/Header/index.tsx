import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";

import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { useLogin } from "../../contexts/LoginContext";

import {
  HeaderSection,
  LogoContainer,
  Burger,
  Menu,
  Label,
  Outline,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const { loggedIn, login, logout } = useLogin();
  const adminPassword = "admin123";

  const toggleButton = () => setVisibility(!visible);

  const handleLogoClick = () => {
    if (loggedIn) {
      logout();
    } else {
      const pwd = prompt("Enter admin password:");
      if (pwd === adminPassword) login();
      else alert("Incorrect password!");
    }
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" align="middle">
          <LogoContainer to="#" aria-label="login/logout" onClick={handleLogoClick}>
            {/* <SvgIcon src="logo2.png" width="101px" height="64px" /> */}
            <img src={`${process.env.PUBLIC_URL}/img/svg/logo2.png`} alt="Logo" />
          </LogoContainer>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>

        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}><Menu>Menu</Menu></Col>
              <Col span={12}><Outline /></Col>
            </Label>
          </Col>
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);