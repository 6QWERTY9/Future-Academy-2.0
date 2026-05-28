// Импорт независимого блока с видео-презентацией
import { VideoBlock } from "@shared/components/AboutUsLayoutSection/ui/VideoBlock";
// Импорт стилей (CSS-модулей) для корневой секции виджета
import css from './index.module.scss';

// Импорт блока преимуществ
import { AdvantageBlock } from "@shared/components/AboutUsLayoutSection/ui/AdvantageBlock";
// Импорт интерфейса пропсов для валидации входящих данных (className, title, advantages)
import type { IAboutUsProps } from "../model/types";
import clsx from "clsx";


/**
  * Главный компонент секции "О нас" (AboutUs)
  * Собирает воедино блок с видео и блок со списком преимуществ.
*/
export default function AboutUs({className, title, advantages}: IAboutUsProps) {
  return (
    // Корневой семантический тег секции с объединением локального класса и внешнего className
    <section className={clsx(css.about_us_section, className)}>
       {/* Ограничивающий контейнер для центрирования контента на странице */}
      <div className={css.about_us_section__content}>
        {/* Компонент интерактивного плеера или превью видео */}
        <VideoBlock/>
        {/* Компонент списка преимуществ. Передает внутрь заголовок секции и массив с данными карточек (цифры и текст) */}
        <AdvantageBlock
          title={title}
          advantages={advantages}
        />
      </div>
    </section>
  )
}
