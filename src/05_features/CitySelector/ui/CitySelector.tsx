import { useState } from "react";
import { cities } from "../model/data";

import LocationIcon from '@assets/location-icon.svg?react';
import ModalOpenIcon from '@assets/city-selector-indecator.svg?react';

import { CitiesModal } from "./CitiesModal";

import css from './citySelector.module.scss';
import clsx from "clsx";

/**
 * Основной компонент фичи выбора города.
 * Отвечает за хранение стейта выбранного города и управление модальным окном.
 * 
 * @param {string} headerTheme - Тема шапки (light/dark) для адаптации стилей
 */
export default function CitySelector({headerTheme='light'}: {headerTheme: 'dark' | 'light'}) {
   /** ID текущего выбранного города (инициализируется первым элементом из списка) */
  const [selectCityId,setSelectCityId] = useState(cities[0].id);
  /** Состояние открытия/закрытия модального окна со списком городов */
  const [isCitiesModal, setIsCitiesModal] = useState(false);
  /** Обработчик открытия модалки (переключает текущее состояние) */
  const handleOpenModal = () => {
    setIsCitiesModal(prev => !prev);
  }
  /** 
   * Обработчик выбора нового города.
   * Если выбран новый город, обновляем стейт и закрываем окно.
   */
  const handleChangeSelectCity = (id: number) => {
    if (id !== selectCityId) {
      setSelectCityId(id);
      setIsCitiesModal(false)
    }
  }
  /** Находим объект выбранного города для получения его названия и других данных */
  const currentCity = cities.find((item) => item.id === selectCityId);

  
  return (
    <div onClick={handleOpenModal} className={css.city_selector}>
      <div className={css.city_selector__content}>
        {/* Иконка локации с динамическими классами темы */}
        <LocationIcon  className={clsx(css.icon, css[headerTheme])}/>
        {/* Название текущего города */}
        <span className={clsx(css.current_city, css[headerTheme])}>
          {currentCity?.name}
        </span>
        {/* Иконка-индикатор (стрелочка), которая поворачивается при открытии (через класс css.open) */}
        <ModalOpenIcon width={13} height={13} className={clsx(css.icon, css.modal_icon, css[headerTheme], {[css.open]: isCitiesModal})}/>
      </div>
       {/* Модальное окно, в которое прокидываем список городов и обработчик выбора */}
      <CitiesModal isOpen={isCitiesModal} items={cities} onChangeCity={handleChangeSelectCity}/>
    </div>
  )
}
