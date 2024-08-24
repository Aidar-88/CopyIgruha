import styles from './Button.module.css'

export default function Button({ onClick, children, }) {



    return (
        <button className={styles.button38} onClick={onClick}>{children}</button>
    )
}