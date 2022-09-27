import styles from './Projects.module.css';
import amaro from '../../assets/amaro.jpg';
import weather from '../../assets/weather.jpg';
import hunter from '../../assets/hunters.jpg';

function Projects() {

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={amaro} alt='Amaro digital' />
                <div className={styles.cardContainer} >
                    <h4><b>Amaro Digital</b></h4>
                    <p>Amaro is a digital PR agency I made with React js and bootstrap for my friend's newly opened bussines.</p>
                    <a href='https://github.com/Stanislav-Yotov/amaro-digital' target='_blank' rel='noreferrer'>
                        <button>View Code</button>
                    </a>
                </div>
            </div>
            <div className={styles.card}>
                <img src={weather} alt='weather app'  id='weather'/>
                <div className={styles.cardContainer} >
                    <h4><b>Weather App</b></h4>
                    <p>Simple weather app made with React js and API from  www.openweathermap.org</p>
                    <a href='https://github.com/Stanislav-Yotov/weather-app' target='_blank' rel='noreferrer'>
                        <button>View Code</button>
                    </a>
                </div>
            </div>
            <div className={styles.card}>
                <img src={hunter} alt='Hunters zone' />
                <div className={styles.cardContainer} >
                    <h4><b>Hunters Zone</b></h4>
                    <p>This is existing app, which is made on php and vanilla JS, which I made on React js</p>
                    <a href='https://github.com/Stanislav-Yotov/hunters-zone' target='_blank' rel='noreferrer'>
                        <button>View Code</button>
                    </a>
                </div>
            </div>
            
        </div>
    );
}

export default Projects;