import clsx from "clsx";


/** Импорт декоративных элементов как React-компонентов (благодаря svgr) */
import Cross from '@assets/cross.svg?react';
import Triangle from '@assets/triangle.svg?react';
import LineOne from '@assets/line-5.svg?react';
import LineTwo from '@assets/line-6.svg?react';

import css from './video-block.module.scss';


/**
    * Компонент VideoBlock отвечает за отображение превью видео 
    * и окружающих его декоративных графических элементов.
*/
export const VideoBlock = () => {
    return (
        <div className={css.about_us__video_content}>
            {/* Основной контейнер для видео-плеера или его превью */}
            <div className={css.video_wrapper}>
                <img style={{borderRadius: "20px"}}src="https://dummyimage.com/780x436/99cccc.gif&text=%D0%97%D0%B4%D0%B5%D1%81%D1%8C+%D0%B4%D0%BE%D0%BB%D0%B6%D0%BD%D0%BE+%D0%B1%D1%8B%D0%BB%D0%BE+%D0%B1%D1%8B%D1%82%D1%8C+%D0%B2%D0%B0%D1%88%D0%B5+%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE"/>
            </div>

            {/* 
                Декоративные элементы (абстрактные линии и фигуры).
                Используется clsx для объединения базовых стилей декора (позиционирование) 
                и специфичных стилей для каждой фигуры.
            */}
            <Cross className={clsx(css.decor, css.cross)} width={230} height={229}/>
            <Triangle className={clsx(css.decor, css.triangle)} width={164} height={136}/>
            <LineOne className={clsx(css.decor, css.line_one)} width={280} height={130}/>
            <LineTwo className={clsx(css.decor, css.line_two)} width={352} height={350}/>
        </div>
    )
}