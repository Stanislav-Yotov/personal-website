import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

function Contact(props) {

    const [field, setField] = useState();
    const form = useRef();

    function clear(){
        setField('');
    }

    function formSubmissionHandler(e) {
        e.preventDefault();

        emailjs.sendForm()
            .then((result) => {
                alert("Message Sent Successfully");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            clear();
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>If you want to contact me, don't hesitate to send me an email.</h2>
            <div className={styles.contactForm}>
                <form onSubmit={formSubmissionHandler} ref={form}>
                    <label htmlFor='fullName'>Full name</label>
                    <input 
                    type='text' 
                    id='fname' 
                    name='fullName' 
                    placeholder='Your full name' 
                    value={field}
                    required />

                    <label htmlFor='email'>Email</label>
                    <input 
                    type='text' 
                    id='email' 
                    name='email' 
                    placeholder='Your email adress'
                    value={field}
                    required />

                    <label htmlFor='message'>Send me a message</label>
                    <textarea 
                    id="subject" 
                    name="message" 
                    placeholder="Type your message here"
                    value={field}
                    required />

                    <input type="submit"  value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Contact;