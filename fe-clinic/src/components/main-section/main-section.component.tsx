import React from 'react';
import css from './main-section.module.css';
import holl from '../../public/img/content/holl.png';
import {MainSectionProps} from './main-section.model';

const MainSection = ({mainSectionData}: MainSectionProps) => {
    return(
        <section className={css.wrap}>
            <div className={css.label}>
                <h1>{mainSectionData.title}</h1>
                <p>{mainSectionData.description}</p>
            </div>
            <div className={css.pictureWrap}>
                <img src={holl} className={css.picture} alt='mainSectionPicture'/>
            </div>

        </section>
    )
}

export default MainSection;