import { NavLink, useParams } from "react-router-dom"
import type { IFillterTag } from "../model/types"

import css from './filter-tags.module.scss';
import { ROUTE_PATH } from "@app/router/routePath";
import { filterTagsData } from "../model/data";




/**
 * Основной компонент-контейнер для списка тегов.
 * Выбирает нужный массив данных на основе параметров URL.
 */
export const FilterTags = () => {
    /**
        * Достаем groupId (kids, teens, adults) из адресной строки.
        * Настройка этого параметра находится в файле router.tsx
    */
    const { groupId } = useParams<{ groupId: string }>();
    
    /**
        * Выбираем список тегов. Если категория в URL не определена,
        * по умолчанию отображаем теги для детей ('kids').
    */
    const currentTags = filterTagsData[groupId || 'kids'] || [];
    
    return (
        <div className={css.filter_tags_wrapper}>
            {currentTags.map(tag => (
                
                <FilterTag key={tag.id} {...tag}/>
            ))}
        </div>
    )
}

/**
    * Вспомогательный компонент отдельного тега (фильтра).
    * Использует NavLink для навигации и автоматической подсветки активного состояния.
*/
export const FilterTag: React.FC<IFillterTag> = ({text, id}) => {
    /** 
        * Повторно получаем groupId, чтобы сформировать корректную ссылку
        * вида /courses/kids/robotics
    */
    const { groupId = 'kids' } = useParams<{ groupId: string }>();
    return (
        <NavLink
            /** Формируем динамический путь на основе текущей категории и ID курса */
            to={`${ROUTE_PATH.COURSES}/${groupId}/${id}`}

            className={css.tag}
        >
            <span>{text}</span>
        </NavLink>
    )
}