import { Outlet } from "react-router-dom";
import { categoryTabsData } from "../model/data";
import { CategoryTabs } from "./CategoryTabs";

import css from './course-filter.module.scss';

/**
  * Основной компонент секции фильтрации курсов.
  * Выполняет роль макета (Layout) для блока фильтров: 
  * содержит статичные табы и динамическую область для тегов.
*/
export default function CourseFilters() {
  return (
    <div className={css.course_filter_wrapper}>
      {/* 
        Верхняя часть: панель переключения возрастных категорий.
        Компонент отрисовывает табы на основе данных из модели.
      */}
        <CategoryTabs tabs={categoryTabsData}/>
      {/* 
        Outlet — это компонент-заполнитель из react-router-dom.
        Сюда будут автоматически подставляться дочерние компоненты 
        (например, FilterTags), соответствующие текущему маршруту.
      */}
        <Outlet/>
      
    </div>
  )
}
