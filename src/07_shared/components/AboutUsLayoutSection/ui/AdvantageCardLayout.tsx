// Импорт типа пропсов для компонента из общей папки типов секции "О нас"
import type { IAdvantageProps } from "@shared/types/about-us-section";

// Импорт стилей (CSS-модулей) для стилизации карточки преимуществ
import css from './advantage-card-layout.module.scss';

/**
    * Компонент AdvantageCardLayout
    * Принимает иконку и описание, возвращает JSX-разметку карточки преимущества.
    * Использует типизацию React.FC с переданным интерфейсом AdvantageProps.
*/
export const AdvantageCardLayout: React.FC<IAdvantageProps> = ({icon, desc}) => {
    return (
        // Главный контейнер карточки с базовым классом из CSS-модуля
        <div className={css.advantage_card}>
             {/* Обёртка для иконки, обеспечивающая её позиционирование и размеры */}
            <div className={css.icon_wrapper}>
                {icon}
            </div>
            {/* Контейнер для текстового содержимого карточки */}
            <p className={css.description}>{desc}</p>
        </div>
    )
}