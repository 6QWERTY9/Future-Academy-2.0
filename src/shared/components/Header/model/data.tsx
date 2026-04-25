import type { INavProps } from "@shared/components/Navigation/model/types";

export const headerNavData: Omit<INavProps, 'headerTheme'> = {
    linkType: "footer",
    links: [
        {
            text: 'Все курсы',
            to: '/',
        },
        {
            text: 'Мероприятия',
            to: '/',
        },
        {
            text: 'Базы знаний',
            to: '/',
        },
        {
            text: 'Карьера',
            to: '/',
        },
    ]
}