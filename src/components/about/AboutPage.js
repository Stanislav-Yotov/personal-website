import styles from './About.module.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

function AboutPage(props) {
    return (
        <div className={styles.container}>
            <div className={styles.greet}>
                Hi. I am Stanislav Yotov. Nice to meet you!
            </div>
            <div className={styles.introduce}>
                I am passionate about building software which makes people's life easier.
                I am curious in terms of technology and every day is a challenge to learn something new,
                and become a better version of myself.
            </div>
            <div className={styles.social}>
                <p>You can find me on:</p>
                <ul>
                        <li className={styles.fb}><a href='https://www.facebook.com/stanislav.iotov/' target='_blank' rel="noopener noreferrer"><FaFacebook /></a></li>
                        <li className={styles.git}><a href='https://github.com/Stanislav-Yotov' target='_blank' rel="noopener noreferrer"><FaGithub /></a></li>
                        <li className={styles.linkedin}><a href='https://www.linkedin.com/in/stanislav-yotov-72a602244/' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a></li>
                </ul>
            </div>
        </div>
    );
}

export default AboutPage;