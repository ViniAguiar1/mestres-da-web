import marvelLogo from "../../assets/preview.png"
import styles from './Header.module.css'

export function Header(){
    return (
        <>
            <header>
                <img className={styles.logo} src={ marvelLogo } alt="Logo da Marvel" />

                <div className={styles.links}>
                    <a className={styles.links} href="https://www.linkedin.com/in/viniciusaguiar-araujo/">Personagens</a>
                    <a className={styles.links} href="https://www.linkedin.com/in/viniciusaguiar-araujo/">Filmes</a>
                    <a className={styles.links} href="https://www.linkedin.com/in/viniciusaguiar-araujo/">HQ's</a>
                </div>

                <div className={styles.profile}>
                    <img className={styles.avatar} src="https://github.com/ViniAguiar1.png" alt="" />
                    <strong className={styles.links}>Sair</strong>
                </div>
            </header>
        </>
    )
}