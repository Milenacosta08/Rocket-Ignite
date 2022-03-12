import { SigInButton } from '../SignInButton';

import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Logotipo do ig.news" />
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="">Posts</a>
                </nav>

                <SigInButton />
            </div>
        </header>
    )
}