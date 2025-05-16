import { withTranslation, TFunction } from "react-i18next";
import { FooterSection, Extra } from "./styles";
import Container from "../../common/Container";
import { Row, Col } from "antd";

const Footer = ({ t }: { t: TFunction }) => {
  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="center">
            <Col>
              <p style={{ textAlign: "center", color: "#ccc", fontSize: "1rem", margin: 0 }}>
                Developed by <strong>DreamingRabbit</strong> with ❤️
              </p>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra />
    </>
  );
};

export default withTranslation()(Footer);