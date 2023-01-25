import React, {useEffect, useRef} from "react";
import './hero-section.css'

import {Container, Row, Col} from "reactstrap";
import heroImg from '../../assests/hero-img.png'
import {init} from  "ityped"

const HeroSection = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings: [
                'Бакиров Ильдар',
                'Frontend разработчик!',
            ]
        })
    }, [])



    return <section className='hero__section' id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <p className='mb-3'>Добро пожаловать в мой мир!</p>
                        <h2 className='hero__title mb-4' style={{height: '100px'}}>Я <span ref={textRef}></span></h2>
                        <p>- умею работать в команде <br/>
                            - быстро обучаюсь <br/>
                            - осваиваю новые технологии <br/>
                            - ответственно выполняю поставленные задачи <br/>
                            <br/>
                            На этом сайте Вы сможете узнать подробнее о моих навыках, опыте и связаться со мной для дальнейшего сотрудничества.
                        </p>
                        <div className="mt-4 hero__btns d-flex align-items-center gap-4">
                            <a href="#contact" className='text-decoration-none'><button className="btn">Контакты</button></a>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="hero__img">
                        <img src={heroImg} alt="" className='w-95'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default HeroSection
