import type { IAdvantageBlockProps } from "../model/types"
import { AdvantageCardLayout } from "./AdvantageCardLayout"

import css from './advantages-block.module.scss';

export const AdvantageBlock: React.FC<IAdvantageBlockProps> = ({title, advantages}) => {
    return (
        <div className={css.advantages_block}>
            <h3 className={css.title}>{title}</h3>
            <div className={css.advantages}>
                {advantages.map(advantage => (
                    <AdvantageCardLayout key={advantage.id} {...advantage}/>
                ))}
            </div>
        </div>
    )
}