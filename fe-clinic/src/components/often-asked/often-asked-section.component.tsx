import React from 'react';
import css from './often-asked-section.module.css';
import { OftenAskedDataProps } from './often-asked-section.model';

const OftenAskedSection = (oftenAskedData:OftenAskedDataProps) => {
    const data = oftenAskedData.oftenAskedData
    return(
        <section className={css.wrap}>
            <h1>
                {data.sectionTitle}
            </h1>

            <div className={css.elements}>
                {data.elements.map((element, id) => {
                    return(
                        <div className={css.element} key = {`${id}`}>
                            <h2>{element.title}</h2>
                            <div className={css.questions}>
                                {element.questions.map((question, id) => {
                                    return(
                                        <p key= {`${id}`}>{question}</p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
                    
                }
                <div className={css.element}>

                </div>
            </div>
        </section>
    )
}

export default OftenAskedSection;