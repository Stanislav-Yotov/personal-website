import styles from './Projects.module.css';
import amaro from '../../assets/amaro.jpg';
import { useState } from 'react';

function Projects(props) {
    const [clicked, setClicked] = useState('Show description');
    const [show, setShow] = useState(true);

    function clickHandler(e) {
        let btn = e.target.value;
        if (btn === 'Show description') {
            setClicked('Hide description');
            setShow(false);
        } else {
            setClicked('Show description');
            setShow(true);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles['work-cotnainer']}>
                <div className={styles.projects}>
                    <p>Check out my recent projects</p>
                </div>

                <div className={styles.card}  >

                    <div className={styles.cardItem} style={{ backgroundImage: `url(${amaro})` }}>
                        <div className={show ? `${styles.frame}` : `${styles.frameShow}`}>
                            <div className={styles.span}>
                            <span>This is my first React JS Application.</span>
                            </div>
                            <div className={styles.underSpan}>
                                <a href='https://github.com/Stanislav-Yotov/amaro-digital' target='_blank' rel='noreferrer'>
                                    <button>View on Github</button>
                                </a>
                                <button value={clicked} onClick={clickHandler}>{clicked}</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.card}  >

                    <div className={styles.cardItem} style={{ backgroundImage: `url(${amaro})` }}>
                        <div className={show ? `${styles.frame}` : `${styles.frameShow}`}>
                            <div className={styles.span}>
                            <span>This is my first React JS Application.</span>
                            </div>
                            <div className={styles.underSpan}>
                                <a href='https://github.com/Stanislav-Yotov/amaro-digital' target='_blank' rel='noreferrer'>
                                    <button>View on Github</button>
                                </a>
                                <button value={clicked} onClick={clickHandler}>{clicked}</button>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default Projects;