import React from "react";
import './contact.css'
import {Col, Container, Row} from "reactstrap";
import Form from "../form/Form";

const Contact = () => {
    return (
        <section id='contact'>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2>Контакты</h2>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="contact__info-container d-flex align-items-center gap-5">
                            <div className="single__info-box w-50">
                                <h6>Адрес</h6>
                                <p>Russia, Ufa</p>
                            </div>

                            <div className="single__info-box w-50">
                                <h6>Телефон</h6>
                                <p>+7-967-739-47-77</p>
                            </div>
                        </div>

                        <div className="contact__info-container  d-flex align-items-center gap-5">
                            <div className="single__info-box w-50">
                                <h6>Email</h6>
                                <p>bakirovildar2011@mail.ru</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <Form />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact