import CrossIcon from '@assets/cross.svg?react';
import CircleIcon from '@assets/circle.svg?react';
import TriangleIcon from '@assets/triangle.svg?react';
import LineOneIcon from '@assets/line-1.svg?react';
import LineTwoIcon from '@assets/line-2.svg?react';
import LineThreeIcon from '@assets/line-3.svg?react';
import LinefourIcon from '@assets/line-4.svg?react';

import css from './hero.module.scss';
import clsx from 'clsx';

export const HeroSection = () => {
    return (
        <section className={css.hero_section}>
            <div className={css.content}>
                <h1 className={css.title}>
                    Образовательная платформа ХОД Future Academy
                </h1>
                <p className={css.paragraph}>
                    Актуальные знания для новичков и профессионалов
                </p>
            </div>

            <CircleIcon className={clsx(css.decor, css.circle)}/>
            <CrossIcon className={clsx(css.decor, css.cross)}/>
            <CrossIcon className={clsx(css.decor, css.cross_two)}/>
            <TriangleIcon className={clsx(css.decor, css.triangle)}/>
            <LineOneIcon className={clsx(css.decor, css.line_one)}/>
            <LineTwoIcon className={clsx(css.decor, css.line_two)}/>
            <LineThreeIcon className={clsx(css.decor, css.line_three)}/>
            <LinefourIcon className={clsx(css.decor, css.line_four)}/>
        </section>
    )
}