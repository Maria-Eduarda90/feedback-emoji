import styles from './styles.module.scss';

export function Emojis(){
    return(
        <main className={styles.emojis}>
            <div>
                <button>👍🏻</button>
            </div>
            <div>
                <button>😝</button>
            </div>
            <div>
                <button>😍</button>
            </div>
            <div>
                <button>😮</button>
            </div>
            <div>
                <button>😤</button>
            </div>
            <div>
                <button>😥</button>
            </div>
        </main>
    );
}