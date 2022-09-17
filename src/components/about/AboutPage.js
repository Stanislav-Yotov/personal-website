import styles from './About.module.css';

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
        </div>
    );
}

export default AboutPage;