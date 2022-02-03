import style from './contact.css';
import {send} from 'emailjs-com';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

export default function Contact(){
    const history = useHistory();
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'tanner',
        message: '',
        reply_to: ''
    });
    const [sent, setSent] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            'service_6r3sker',
            'template_9p96r0h',
            toSend,
            `${process.env.REACT_APP_USER_ID}`
        )
        .then((response) => {
            console.log('SUCCESS', response.status, response.text)
            setSent(true);
            setToSend({
                from_name: '',
                to_name: 'tanner',
                message: '',
                reply_to: ''
            });
        })
        .catch((err) => {
            console.log('FAILED...', err);
        })
    }
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }

    return (
        <div className={style.contactContainer}>
            <div className={style.titleContainer}>
                <h1 className={style.title}>{`{ CONNECT }`}</h1>
            </div>
            {!sent &&
            <form className={style.emailForm} onSubmit={handleSubmit}>
                <fieldset className={style.body}>
                    <legend>Email Me Here:</legend>
                    <label>To:</label>
                    <input className={style.inputField} value='tannermeck.coding@gmail.com' readOnly/>
                    <label>Your Email:</label>
                    <input className={style.inputField} type='email' name='reply_to' value={toSend.reply_to} onChange={handleChange}/>
                    <label>Your Name:</label>
                    <input className={style.inputField} type='text' name='from_name' value={toSend.from_name} onChange={handleChange} />
                    <label>Message:</label>
                    <textarea className={style.textarea} name='message' value={toSend.message} onChange={handleChange}/>
                    <button className={style.button} type='submit'>Send Email</button>
                </fieldset>
            </form>
            }
            {sent && 
                <img className={style.checkmark} src='https://media2.giphy.com/media/ibolLe3mOqHE3PQTtk/giphy.gif?cid=ecf05e4753metn66wo8beo20o1iegpny87gtyqkdb11gcij7&rid=giphy.gif&ct=g' alt='checkmark' />
            }
        </div>
    )
}