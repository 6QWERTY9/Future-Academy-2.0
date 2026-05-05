import type { ICategoryTab, IFillterTag } from "./types";

import KidsIcon from '@assets/kid-icon.svg?react'
import TeensIcon from '@assets/teens-icon.svg?react'
import AdultsIcon from '@assets/adults-icon.svg?react'


export const categoryTabsData: ICategoryTab[] = [
    {
        title: 'Дети',
        age: '8 — 14 лет',

        id: 'kids',
        Icon: KidsIcon
    },
    {
        title: 'Подростки',
        age: '14 — 18 лет',

        id: 'teens',
        Icon: TeensIcon
    },
    {
        title: 'Взрослые',
        age: '18 — ∞ ',

        id: 'adults',
        Icon: AdultsIcon
    },
]

/**
 * Объект-карта, где ключи совпадают с ID возрастных категорий из URL.
 * Это позволит отрисовывать нужный список через filterTagsData[ageId]
 */
export const filterTagsData: Record<string, IFillterTag[]> = {
    // Данные для пути /catalog/kids
    kids: [
        { id: "robotics", text: "Робототехника" },
        { id: "game-dev", text: "Создание игр" },
        { id: "web-dev", text: "Web-разработка" },
        { id: "multimedia", text: "Мультимедиа" },
        { id: "chess", text: "Шахматы" },
        { id: "3d-modeling", text: "3D-моделирование и дизайн" },
        { id: "english", text: "Английский язык" },
        { id: "blogging", text: "Блогинг" },
        { id: "soft-skills", text: "Soft skills" },
    ],

    // Данные для пути /catalog/teens
    teens: [
        { id: "python", text: "Программирование Python" },
        { id: "cyber-security", text: "Кибербезопасность" },
        { id: "digital-art", text: "Цифровой рисунок" },
        { id: "video-editing", text: "Видеомонтаж" },
        { id: "mobile-apps", text: "Мобильная разработка" },
        { id: "data-science", text: "Data Science" },
        { id: "design-thinking", text: "Дизайн-мышление" },
    ],

    // Данные для пути /catalog/adults
    adults: [
        { id: "fullstack", text: "Fullstack-разработчик" },
        { id: "ui-ux", text: "UI/UX Дизайн" },
        { id: "data-analytics", text: "Аналитика данных" },
        { id: "marketing", text: "Маркетинг и SEO" },
        { id: "management", text: "Управление проектами" },
        { id: "qa", text: "Тестирование ПО" },
    ],
};