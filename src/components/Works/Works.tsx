import React, {useEffect, useState} from 'react';
import './works.scss';
import {Item} from "./Item/Item";
import {useDispatch, useSelector} from "react-redux";
import {selectDesigns, selectIsAllWorks, selectPhotos, selectPrints} from "../../redux/worksSelectors";
import {getMoreWorks, getWorks} from "../../redux/worksReducer";

enum Switcher { Photography, Design, Print }

export const Works: React.FC = () => {

    const [switcher, setSwitcher] = useState<Switcher>(Switcher.Photography)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorks());
    }, [])

    const photos = useSelector(selectPhotos);
    const designs = useSelector(selectDesigns);
    const prints = useSelector(selectPrints);

    const isAll = useSelector(selectIsAllWorks);

    const setCategory = (category: Switcher) => {
        setSwitcher(category);
    }

    const photosList = photos.map(photo => {
        return <Item key={photo.id} imageUrl={photo.imageUrl} imageAlt={photo.imageAlt}/>
    })

    const designsList = designs.map(design => {
        return <Item key={design.id} imageUrl={design.imageUrl} imageAlt={design.imageAlt}/>
    })

    const printsList = prints.map(print => {
        return <Item key={print.id} imageUrl={print.imageUrl} imageAlt={print.imageAlt}/>
    })

    return (
        <section className='works'>
            <div className="works__title title">
                <h2>OUR LATEST WORK</h2>
            </div>
            <div className="works__subtitle subtitle">
                <h3>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.</h3>
            </div>
            <div className="works__body">
                <div className="works__selector">
                    <div className={
                        switcher === Switcher.Photography
                            ? "works__selector-item works__selector-active-item"
                            : "works__selector-item"}
                         onClick={() => setCategory(Switcher.Photography)}>Photography
                    </div>

                    <div className={
                        switcher === Switcher.Design
                            ? "works__selector-item works__selector-active-item"
                            : "works__selector-item"}
                         onClick={() => setCategory(Switcher.Design)}>Design
                    </div>

                    <div className={
                        switcher === Switcher.Print
                            ? "works__selector-item works__selector-active-item"
                            : "works__selector-item"}
                         onClick={() => setCategory(Switcher.Print)}>Print
                    </div>
                </div>
                <div className="works__gallery">
                    {switcher === Switcher.Photography && photosList}
                    {switcher === Switcher.Design && designsList}
                    {switcher === Switcher.Print && printsList}
                </div>
            </div>
            {
                (switcher === Switcher.Photography && !isAll.photos) &&
                <div onClick={() => dispatch(getMoreWorks())} className="works__button">
                    View more work
                </div>
            }
            {
                (switcher === Switcher.Design && !isAll.designs) &&
                <div onClick={() => dispatch(getMoreWorks())} className="works__button">
                    View more work
                </div>
            }
            {
                (switcher === Switcher.Print && !isAll.prints) &&
                <div onClick={() => dispatch(getMoreWorks())} className="works__button">
                    View more work
                </div>
            }
        </section>
    );
}