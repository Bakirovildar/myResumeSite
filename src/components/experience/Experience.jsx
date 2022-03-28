import React from "react";
import './experience.css'

import {Container, Row, Col} from "reactstrap";

const developmentExperienceData = [
    {
        year: '2021',
        title: 'Авторский курс JavaScript',
        desc: 'JavaScript 2021 - Полное Руководство с Нуля до Профи'
    },

    {
        year: '2021',
        title: 'Авторский курс React',
        desc: 'React JS с Нуля до Профи. Полное руководство'
    },

    {
        year: '2021-2022',
        title: 'Фриланс',
        desc: 'Разработка интернет магазина на React'
    },
]

const Experience = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2>Опыт разработки</h2>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="single__experience-container">

                            {
                                developmentExperienceData.map((item,index) => {
                                    return (
                                        <div className="single__experience" key={index}>
                                            <span className='experience__icon'>
                                                <i className='ri-briefcase-line'></i></span>
                                            <h6>{item.year}</h6>
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Experience