import clsx from 'clsx';
import type { ISpeechBubbleBgProps, ISpeechBubbleProps } from '../model/types';
import css from './speech-bubble.module.scss';


/**
 * Компонент текстового облачка (бабла).
 * Автоматически подстраивается под размер контента и поддерживает два вида хвоста.
 */
export const SpeechBubble: React.FC<ISpeechBubbleProps> = ({
    title,
    footer,
    children,
    maxWidth='260px',
    className,
    tailPosition='bottom'
}) => {
    return (
        <div 
            className={clsx(css.speech_bubble, className)}
            style={{
                // Передаем ограничение ширины в CSS через переменную для гибкости
                '--speech-bubble-max-width': maxWidth ? `${maxWidth}`: 'var(--speech-bubble-max-width)'
            }}
        >
            {/* Слой с SVG-фоном. Абсолютно позиционирован относительно обертки */}
            <div className={css.svg_content}>
                <SpeechBubbleBg position={tailPosition}/>
            </div>

            {/* Слой с контентом. Именно его паддинги и размер растягивают SVG-фон */}
            <div className={clsx(css.content, {[css.left_tail]: tailPosition === 'left'})}>
                {/* Заголовок отрисуется только если передан проп title */}
                {title && <h4 className={css.title}>{title}</h4>}

                {/* Обертка для основного текста */}
                <div className={css.children}>
                    {children}
                </div>
                {/* Футер отрисуется только если передан проп footer */}
                {footer && <div className={css.footer}>{footer}</div>}
            </div>
        </div>
    )
}

/**
 * Вспомогательный компонент для отрисовки фоновой графики.
 * Выбирает нужный SVG-путь в зависимости от позиции хвоста.
 */
export const SpeechBubbleBg: React.FC<ISpeechBubbleBgProps> = ({ position }) => {
    if (position === 'left') {
        return (
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 420 192"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49.6814 1C38.6357 1 29.6814 9.95431 29.6814 21V101H3.00558C1.32857 101 0.396228 102.94 1.44385 104.249L29.6814 139.546V171C29.6814 182.046 38.6357 191 49.6814 191H398.787C409.832 191 418.787 182.046 418.787 171V21C418.787 9.95431 409.832 1 398.787 1H49.6814Z"
                fill="white"
                />
                <path
                vectorEffect="non-scaling-stroke"
                d="M29.6814 101V102H30.6814V101H29.6814ZM1.44385 104.249L0.662978 104.874H0.662978L1.44385 104.249ZM29.6814 139.546H30.6814V139.196L30.4623 138.922L29.6814 139.546ZM30.6814 21C30.6814 10.5066 39.188 2 49.6814 2V0C38.0835 0 28.6814 9.40202 28.6814 21H30.6814ZM30.6814 101V21H28.6814V101H30.6814ZM29.6814 100H3.00558V102H29.6814V100ZM3.00558 100C0.490062 100 -0.908449 102.91 0.662978 104.874L2.22472 103.625C1.70091 102.97 2.16708 102 3.00558 102V100ZM0.662978 104.874L28.9006 140.171L30.4623 138.922L2.22472 103.625L0.662978 104.874ZM30.6814 171V139.546H28.6814V171H30.6814ZM49.6814 190C39.188 190 30.6814 181.493 30.6814 171H28.6814C28.6814 182.598 38.0835 192 49.6814 192V190ZM398.787 190H49.6814V192H398.787V190ZM417.787 171C417.787 181.493 409.28 190 398.787 190V192C410.385 192 419.787 182.598 419.787 171H417.787ZM417.787 21V171H419.787V21H417.787ZM398.787 2C409.28 2 417.787 10.5066 417.787 21H419.787C419.787 9.40202 410.385 0 398.787 0V2ZM49.6814 2H398.787V0H49.6814V2Z"
                fill="url(#paint0_linear_left)"
                />
                <defs>
                <linearGradient id="paint0_linear_left" x1="1.00183" y1="96" x2="418.787" y2="96" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F7941D" />
                    <stop offset="1" stopColor="#27AAE1" />
                </linearGradient>
                </defs>
            </svg>
            );
    }

    return (
        <svg
        width="100%"
        height="100%"
        viewBox="0 0 262 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 1C9.95431 1 1 9.95431 1 21V171C1 182.046 9.9543 191 21 191H141V216.839C141 218.516 142.94 219.448 144.249 218.4L178.5 191H241C252.046 191 261 182.046 261 171V21C261 9.95431 252.046 1 241 1H21Z"
            fill="white"
        />
        <path
            vectorEffect="non-scaling-stroke"
            d="M141 191H142V190H141V191ZM144.249 218.4L143.625 217.62V217.62L144.249 218.4ZM178.5 191V190H178.149L177.875 190.219L178.5 191ZM2 21C2 10.5066 10.5066 2 21 2V0C9.40202 0 0 9.40202 0 21H2ZM2 171V21H0V171H2ZM21 190C10.5066 190 2 181.493 2 171H0C0 182.598 9.40202 192 21 192V190ZM141 190H21V192H141V190ZM140 191V216.839H142V191H140ZM140 216.839C140 219.354 142.91 220.753 144.874 219.181L143.625 217.62C142.97 218.143 142 217.677 142 216.839H140ZM144.874 219.181L179.125 191.781L177.875 190.219L143.625 217.62L144.874 219.181ZM241 190H178.5V192H241V190ZM260 171C260 181.493 251.493 190 241 190V192C252.598 192 262 182.598 262 171H260ZM260 21V171H262V21H260ZM241 2C251.493 2 260 10.5066 260 21H262C262 9.40202 252.598 0 241 0V2ZM21 2H241V0H21V2Z"
            fill="url(#paint0_linear_bottom)"
        />
        <defs>
            <linearGradient id="paint0_linear_bottom" x1="1" y1="109.921" x2="261" y2="109.921" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7941D" />
            <stop offset="1" stopColor="#27AAE1" />
            </linearGradient>
        </defs>
        </svg>
    );
};