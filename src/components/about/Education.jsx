import React from "react";
import './education.css'

const Education = () => {
    return (
        <table className="table">
            <thead className='thead'>
            <tr>
                <th>Технология</th>
                <th>Учебное заведение</th>
                <th>Курсы</th>
                <th>Годы</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>JavaScript</th>
                <th>Авторский курс Владилена Минина</th>
                <th>JavaScript 2021 - Полное Руководство с Нуля до Профи</th>
                <th>2020-2021</th>
            </tr>

            <tr>
                <th>React</th>
                <th>Авторский курс Владилена Минина</th>
                <th>React JS с Нуля до Профи. Полное руководство</th>
                <th>2020-2021</th>
            </tr>
            </tbody>
        </table>
    )
}

export default Education