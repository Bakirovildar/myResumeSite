import React from "react";
import './award.css'

const Award = () => {
    return <div className='award__container d-flex align-items-center gap-5'>
        <div className='award__item'>
            <AwardItem year='2021' title='Лучшему специалисту' text='За стремление улучшить свои знания в сфере IT'/>
        </div>
    </div>

}

const AwardItem = ({year, title, text}) => {
    return <div className="single__award">
        <div className="award__year">{year}</div>
        <h6 className='award__title'>{title} - <span>{text}</span>
        </h6>
    </div>
}

export default Award