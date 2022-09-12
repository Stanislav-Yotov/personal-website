import styles from './HomePage.module.css';
import CV from '../../assets/Stanislav Yotov CV.pdf';

function HomePage(props) {
    return (
        <div className={styles.container}>
            <p className={styles.top}>Hi, my name is</p>
            <p className={styles.mid}>Stanislav Yotov</p>
            <p className={styles.bot}>I am a front-end web developer.</p>
            <p className={styles.desc}>I specialize in front-end web development, but I am also passionate about
                everything technology related.</p>
            <div className={styles.button}>
                <a href={CV} download>Download Resume</a>
            </div>
        </div>
    );
}

export default HomePage;