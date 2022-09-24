import styles from './Contact.module.css';

function Contact(props) {
    return (
        <div className={styles.container}>
            <div className={styles.contactForm}>
                <form>
                    <label htmlFor='fullName'>Full name</label>
                    <input type='text' id='fname' name='fullname' placeholder='Your full name' />

                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' name='email' placeholder='Your email adress' />

                    <label htmlFor='message'>Send me a message</label>
                    <textarea id="subject" name="subject" placeholder="Type your message here" />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Contact;