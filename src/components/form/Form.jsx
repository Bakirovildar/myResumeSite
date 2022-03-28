import React, {useState} from "react";
import './form.css'

const Form = () => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')

    const submitHandler = e => {
        e.preventDefault()

        console.log('subb', enteredName)
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className='form__input'>
                <input type="text" placeholder='Ваше имя' value={enteredName} onChange={event => setEnteredName(event.target.value)}/>
            </div>


            <div className='form__input'>
                <input type="email" placeholder='Ваш Email' value={enteredEmail} onChange={event => setEnteredEmail(event.target.value)}/>
            </div>

            <div className='form__input'>
                <textarea placeholder='Ваше сообщение' value={enteredMessage} onChange={event => setEnteredMessage(event.target.value)}> </textarea>
            </div>

            <button className='submit__btn' type='submit'>
                Отправить
            </button>
        </form>
    )
}

export default Form