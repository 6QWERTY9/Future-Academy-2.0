import type { ICitySelectorProps } from "../model/types"
import css from './citiesModal.module.scss';


export const CitiesModal = ({items, isOpen, onChangeCity}: {items: ICitySelectorProps[], isOpen: boolean, onChangeCity: (id: number) => void}) => {
    return (
        <dialog open={isOpen} className={css.cities_modal}>
            <div className={css.cities_modal__content}>
                {items.map(item => (
                    <button onClick={() => onChangeCity(item.id)} className={css.cities_modal_btn} key={item.id}>
                        {item.name}
                    </button>
                ))}
            </div>
        </dialog>
    )
}