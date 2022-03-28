import React, {useState} from "react";
import './about.css'

import {Container, Row, Col} from "reactstrap";

import aboutImg from '../../assests/hero-img.png'

import Education from "./Education";
import Skills from "./Skills";
import Award from "./Award";

const About = () => {

    const [aboutFilter, setAboutFilter] = useState('ABOUT')

    return <section id='about'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'><h2>Обо мне</h2></Col>
                <Col lg='4' md='3'>
                    <div className="about__btns d-flex flex-column align-items-center">
                        <button className={`about__btn ${aboutFilter === 'ABOUT' ? 'about__btn__active' : ''}`}
                                onClick={() => setAboutFilter('ABOUT')}>Обо мне
                        </button>
                        <button className={`about__btn ${aboutFilter === 'EDUCATION' ? 'about__btn__active' : ''}`}
                                onClick={() => setAboutFilter('EDUCATION')}>Образование
                        </button>
                        <button className={`about__btn ${aboutFilter === 'SKILLS' ? 'about__btn__active' : ''}`}
                                onClick={() => setAboutFilter('SKILLS')}>Навыки
                        </button>
                        <button className={`about__btn ${aboutFilter === 'AWARD' ? 'about__btn__active' : ''}`}
                                onClick={() => setAboutFilter('AWARD')}>Награды
                        </button>
                    </div>
                </Col>
                <Col lg='8' md='9'>

                    {
                        aboutFilter === 'ABOUT' && <div className="about__content__wrapper d-flex gap-5">
                            <div className="about__img w-25">
                                <img src={aboutImg} alt="" className='w-100'/>
                            </div>
                            <div className="about__content w-75">
                                <h2>Меня зовут Ильдар</h2>
                                <p>Я junior frontend developer. Свое обучение к фронтенд разработке я начал с учебника
                                    'Head First JavaScript'. Затем я прошел
                                    авторский курс Владилена Минина по JavaScript и позже React.js. Параллельно выполнял различные Pet-проекты, с которыми можете ознакомиться в моем <a
                                        href="https://github.com/Bakirovildar?tab=repositories">Git репозитории</a></p>
                                <div className="social__links">
                                    <h6>Свяжитесь со мной:</h6>
                                    <span><a href="https://t.me/BakirovIldarJr"><i className="ri-telegram-fill"></i></a></span>
                                    <span><a href="https://www.instagram.com/baki_junior/"><i
                                        className="ri-instagram-line"></i></a></span>
                                    <span><a href="https://github.com/Bakirovildar?tab=repositories"><i
                                        className="ri-github-fill"></i></a></span>
                                </div>

                            </div>
                        </div>
                    }

                    {
                        aboutFilter === 'EDUCATION' && <Education/>
                    }

                    {
                        aboutFilter === 'SKILLS' && <Skills/>
                    }

                    {
                        aboutFilter === 'AWARD' && <Award/>
                    }

                </Col>
            </Row>
        </Container>
    </section>
}

export default About