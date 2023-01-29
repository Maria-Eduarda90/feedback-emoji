import styles from './styles.module.scss';
import { EmojiTypes } from '../../@types/EmojiTypes';
import { EnumEmoji } from '../../enum/enum-emoji';

export function Emojis({ value, setValue }: EmojiTypes){
    
    return(
        <main className={styles.emojis}>
            <div>
                <button value={value} onClick={() => setValue(EnumEmoji.COOL)}>👍🏻</button>
            </div>
            <div>
                <button value={value} onClick={() => setValue(EnumEmoji.NOTBAD)}>😝</button>
            </div>
            <div>
                <button value={value} onClick={() => setValue(EnumEmoji.LOVEDIT)}>😍</button>
            </div>
            <div>
                <button value={value} onClick={() => setValue(EnumEmoji.WOW)}>😮</button>
            </div>
            <div>
                <button value={value} onClick={() => setValue(EnumEmoji.BAD)}>😤</button>
            </div>
            <div>
                <button value={value} onClick={() => setValue(EnumEmoji.TERRIBLE)}>😥</button>
            </div>
        </main>
    );
}