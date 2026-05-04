import clsx from "clsx";
import type { IMascotProps } from "../model/types";
import { OwlIcon } from "./OwlIcon";
import { SpeechBubble } from "./SpeechBubble";

import css from './mascot.module.scss';

/**
  * Компонент Mascot объединяет иконку совы и текстовое облачко (бабл).
  * Управляет их взаимным расположением и визуальными эффектами через CSS-переменные.
*/
export default function Mascot({bubbleProps, owlProps, className, position, isMirrored=false, offsetX, offsetY}: IMascotProps) {

  /** 
    * Карта соответствия позиции маскота и направления хвостика облачка.
    * Если маскот справа — хвост облачка должен смотреть влево, и так далее.
  */
  const tailMap = {
    right: 'right', // хвост справа
    left: 'left', // хвост слево 
    bottom: 'bottom' // хвост снизу
  } as const;

  // Формируем имя класса для специфических стилей позиционирования из SCSS
  const mascotPositionClassName = `position_${position}`;

  /** 
    * Определение вертикального смещения совы. 
    * Если offsetY не передан явно, используем дефолтные значения для каждой позиции.
  */
  const defaultOffsetY = offsetY || (position === 'right' ? '15px' : position === 'left' ? '50px' : '0px');

  /** 
    * Объект динамических стилей (CSS-переменные).
    * Позволяет передавать параметры позиционирования напрямую в стили контейнера.
  */
  const dynamicStyles = {
    '--owl-offset-y': defaultOffsetY,
    '--owl-offset-x': offsetX || (position === 'bottom' ? '40px' : '0px'),
    '--owl-scale': isMirrored ? -1 : 1,
  };
  return (
    <div className={clsx(css.mascot, className, css[mascotPositionClassName])}>
      {/* Контейнер совы с применением динамических трансформаций */}
      <div className={css.owl_container} style={dynamicStyles}>
        <OwlIcon {...owlProps}/>
      </div>
      {/* Компонент облачка, получает рассчитанную позицию хвоста и остальные пропсы */}
      <SpeechBubble tailPosition={tailMap[position]} {...bubbleProps} />
    </div>
  )
}
