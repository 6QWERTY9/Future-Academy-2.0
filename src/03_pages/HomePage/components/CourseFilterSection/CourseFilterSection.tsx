import { CourseFilters } from "@features/CourseFilters"
import { Mascot } from "@shared/components/Mascot"

import css from './course-filter.module.scss';

export const CourseFilterSection = () => {
    return (
        <section className={css.course_filter_section}>
            <div className={css.content}>
                <Mascot
                    bubbleProps={{
                        title: 'Кем вы хотите стать?',
                        children: <p>Пора найти себя<br />и выбрать подходящий курс :)</p>,
                        footer: <span>Удачи!</span>,

                        tailPosition: 'bottom',
                        maxWidth: '260px',
                        height: '217px'
                    }}
                    owlProps={{
                        width: 168 
                    }}

                    position="bottom"
                    offsetX="-40px"
                    offsetY="-52px"

                    className={css.mascot_course_filter}
                />
                <CourseFilters/>
            </div>
        </section>
    )
}