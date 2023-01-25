import React from "react";
import './portfolio.css'

import { Container, Row, Col } from "reactstrap";

import img1 from '../../assests/Portfolio1.png'
import img2 from '../../assests/Portfolio2.png'
import img3 from  '../../assests/Portfolio3.png'

const portfolioData = [
    {
        imgUrl: img1,
        title: 'React Single Page Application',
        url: 'https://bakirovildar.github.io/store/'
    },

    {
        imgUrl: img2,
        title: 'React Single Page Application',
        url: 'https://bakirovildar.github.io/store/'
    },

    {
        imgUrl: img3,
        title: 'Портфолио на GitHub',
        url: 'https://github.com/Bakirovildar?tab=repositories'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <Container>
                <Row>
                    <Col lg='12' className='portfolio__top mb-5'>
                        <h6>Оцените мою работу и оставьте feedback</h6>
                        <h2>Портфолио</h2>
                    </Col>

                    {
                        portfolioData.map((item, index) => {
                            return (
                                <Col key={index} lg='4' md='6' sm='6'>
                                    <div className="portfolio__card">
                                        <div className="portfolio__img">
                                            <img src={item.imgUrl} alt="" className='w-100'/>
                                        </div>
                                        <div className="portfolio__content">
                                            <h5>{item.title}</h5>
                                            <a href={item.url}>Посмотреть работу</a>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}


export default Portfolio