import React from "react";
import { Button } from '@themesberg/react-bootstrap';
import { Row, Col, Card, Container } from '@themesberg/react-bootstrap';
import { Link } from "react-router-dom";
import { Routes } from "../routes";


export default () => (
    <Container className="px-0">
      <Row>
        <Col xs={12} className="p-3">
          <Card>
            <Card.Body>
              <article>
                <h1 className="h2" id="license">Preparation Testing</h1>
                <p className="fs-5 fw-light">1. The first step to doing the test is to press the start button</p>
                <p className="fs-5 fw-light">2. The second step is timer will run according to the specified time</p>
                <p className="fs-5 fw-light">3. The thrid step on the last question click the finish button</p>
                <Link to={Routes.TestPage.path}>
                    <Button variant="success" className="m-1">Start</Button>
                </Link>
                
              </article>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
  