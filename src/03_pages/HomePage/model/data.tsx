import type { IAboutUsProps } from "@widgets/AboutUs/model/types";

import AdvantageIconOne from '@assets/600.svg?react';
import AdvantageIconTwo from '@assets/82.svg?react';
import AdvantageIconThree from '@assets/14 795.svg?react';

export const aboutUsData: Omit<IAboutUsProps, 'className'> = {
    title: 'Актуальные знания от признанных экспертов рынка для новичков и практикующих специалистов.',
    advantages: [
        {
            id: 'home-page-advantages-1',
            icon: <AdvantageIconOne/>,
            desc: 'Курсов',
        },
        {
            id: 'home-page-advantages-2',
            icon: <AdvantageIconTwo/>,
            desc: 'Ведущих преподавателей',
        },
        {
            id: 'home-page-advantages-3',
            icon: <AdvantageIconThree/>,
            desc: 'Выпускников',
        },
    ]
}