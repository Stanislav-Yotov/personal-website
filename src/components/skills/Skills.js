import styles from './Skills.module.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import github from '../../assets/github.png';

function Skills(props) {
    return (
        <div className={styles.container}>
            <div>
                <p><strong>Skills</strong></p>
                <p>// These are the technologies I am working with //</p>
            </div>
            <div className={styles.icons}>
                <div>
                    <img src={html} alt='html icon' />
                    <p>HTML</p>
                </div>
                <div>
                    <img src={css} alt='css icon' />
                    <p>CSS</p>
                </div>
                <div>
                    <img src={javascript} alt='js icon' />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={react} alt='react icon' />
                    <p>React</p>
                </div>
                <div>
                    <img src={node} alt='node icon' />
                    <p>Node js</p>
                </div>
                <div>
                    <img src={github} alt='github icon' />
                    <p>Github</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;