import { NavLink, useLocation } from "react-router-dom"

import type { ICategoryTab } from "../model/types"

import css from './category-tabs.module.scss';
import clsx from "clsx";

import { useLayoutEffect, useRef, useState } from "react";


export const CategoryTabs = ({tabs}: {tabs: ICategoryTab[]}) => {
    const location = useLocation();
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Храним стили для линии в стейте
    const [lineCoords, setLineCoords] = useState({ left: 0, width: 0 });

    /**
   * Функция расчета координат активного таба
   */
    const updateLine = () => {
        // Если реф еще не привязан — выходим, чтобы не было ошибок
        if (!containerRef.current) return;

        // Ищем активный NavLink по атрибуту aria-current
        const activeTab = containerRef.current.querySelector('[aria-current="page"]') as HTMLElement 
        

        if (activeTab) {
        setLineCoords({
            left: activeTab.offsetLeft,
            width: activeTab.offsetWidth,
        });
        }
    };

    // Используем useLayoutEffect для мгновенного замера после рендера
    useLayoutEffect(() => {
        // Небольшая пауза, чтобы NavLink успел обновить свои атрибуты
        const handle = requestAnimationFrame(() => {
        updateLine();
        });

        window.addEventListener('resize', updateLine);
        return () => {
        cancelAnimationFrame(handle);
        window.removeEventListener('resize', updateLine);
        };
    }, [location.pathname, tabs]); // Следим за сменой URL
    return (
        <div className={css.category_tabs} ref={containerRef}>
            {/* 1. Сначала выводим ВСЕ табы одним списком */}
            {tabs.map((tab) => (
            <CategoryTab key={tab.id} {...tab} />
            ))}

            {/* 2. И только ПОСЛЕ цикла, один раз, выводим линию */}
            <div
                className={css.moving_line}
                style={{
                    '--line-left': `${lineCoords.left}px`,
                    '--line-width': `${lineCoords.width}px`,
                } as React.CSSProperties}
            />
        </div>
    );
}


export const CategoryTab: React.FC<ICategoryTab> = ({
    title,
    age,
    Icon,
    id,

    className=''
}) => {
    return (
        <NavLink
            
            to={id === 'kids' ? '/' : `/courses/${id}`}
            // Добавь end, чтобы ссылка на '/' не была активной всегда
            end={id === 'kids'} 

            className={clsx(css.tab_wrapper, className)} 
        >
            {Icon && <Icon className={css.icon} />}
            <div className={css.tab_text}>
                <h4 className={css.title}>
                    {title}
                </h4>
                <span className={css.age}>{age}</span>
            </div>
        </NavLink>
    )
}