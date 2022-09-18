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
                <p>Skills</p>
                <p>// These are the technologies I am working with</p>
            </div>
        </div>
    );
}

export default Skills;