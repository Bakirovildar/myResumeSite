import React from "react";
import './services.css'

import {Container, Row, Col} from "reactstrap";

const serviceData = [
    {
        icon: 'ri-code-line',
        title: 'Frontend-разработка',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat labore maiores molestia'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Frontend-разработка',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat labore maiores molestia'
    },
    {
        icon: 'ri-search-line',
        title: 'Frontend-разработка',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat labore maiores molestia'
    }
]

const Services = () => {
    return <section id='services'>
        <Container>
            <Row>
                <Col lg='12' className='services__top mb-5'>
                    <h6>Мои услуги</h6>
                    <h2>Какие услуги я оказываю</h2>
                </Col>
                {
                    serviceData.map((service, index) => <Col key={index} lg='4' md='6' sm='6' className='mb-5'>
                            <div className="single__service" key={index}>
                                <span className="service__icon">
                                    <i className={service.icon}></i>
                                </span>

                                <h2>{service.title}</h2>
                                <p>{service.desc}</p>
                            </div>
                        </Col>
                    )
                }

            </Row>
        </Container>
    </section>
}

export default Services