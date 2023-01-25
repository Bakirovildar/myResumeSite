import React from "react";
import './skills.css'

const frontendSkill = [
    {
        title: 'JavaScript',
        width: '80%',
        percentage: '80%'
    },
    {
        title: 'React.js',
        width: '80%',
        percentage: '80%'
    },
    {
        title: 'TypeScript',
        width: '80%',
        percentage: '80%'
    },
    {
        title: 'NodeJS',
        width: '40%',
        percentage: '40%'
    },
    {
        title: 'Bootstrap',
        width: '75%',
        percentage: '75%'
    },
    {
        title: 'Git',
        width: '70%',
        percentage: '70%'
    }
]

const Skills = () => {
    return <div className='skills__wrapper d-flex gap-5'>
        <div className="frontend__skill w-50">
            {
                frontendSkill.map((item, index) => (
                    <div className='skill__data mb-3' key={index}>
                        <div className="skill__title d-flex align-items-center justify-content-between">
                            <h6>{item.title}</h6>
                            <span>{item.percentage}</span>
                        </div>
                        <div className="skill__bar">
                            <div className="span skill__bar-percentage" style={{width: `${item.percentage}`}}></div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='backend__skill'></div>
    </div>
}

export default Skills
