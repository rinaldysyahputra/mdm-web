import React from 'react';
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Container, InputGroup } from '@themesberg/react-bootstrap';


export default () => {
    return (
        <article>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Question</Form.Label>
                    <Form.Control as="textarea" disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Answers</Form.Label>
                    <Form.Control as="textarea" rows="5" />
                </Form.Group>
            </Form>
        </article>
        );
    };
    