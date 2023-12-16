import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import vonsLogo from "../img/vons.png"
import targetLogo from "../img/Target.png"
import jewelLogo from "../img/1200px-Jewel-Osco_logo.svg.png"
import aldiLogo from "../img/Aldi-logo.png"
import marianosLogo from "../img/Marianos.png"


function GridSample() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Image src={vonsLogo} thumbnail></Image>
                </Col>
                <Col>
                    <Image src={aldiLogo} thumbnail></Image>
                </Col>
                <Col>
                    <Image src={marianosLogo} thumbnail></Image>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <Image src={marianosLogo} thumbnail></Image>
                </Col>
                <Col>
                    <Image src={jewelLogo} thumbnail></Image>
                </Col>
                <Col>
                    <Image src={targetLogo} thumbnail></Image>
                </Col>
            </Row>

        </Container>
    );
}

export default GridSample;