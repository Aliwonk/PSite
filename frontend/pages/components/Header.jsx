import styles from './styles/Header.module.css';
import '../modules/language'

export default function Header() {
    
    return(
        <header className={styles.header}>
            <div className="logotype">Logotype</div>
            <div className="menu">Menu</div>
            <div className="lang">Lang</div>
        </header>
    )
}