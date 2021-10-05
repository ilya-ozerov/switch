import React, {useEffect, useState} from 'react';
import './clients.scss';
import {Client} from "./Client/Client";
import {useDispatch, useSelector} from "react-redux";
import {selectClients, selectIsFetchingClients} from "../../redux/clientsSelectors";
import {getAllClients, getClients} from "../../redux/clientsReducer";

export const Clients: React.FC = () => {

    const [isAll, setIsAll] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClients());
    }, []);

    const clients = useSelector(selectClients);
    const isFetchingClients = useSelector(selectIsFetchingClients);

    const clientsList = clients.map((client, index) => {
        return <Client key={client.id} imageUrl={client.imageUrl} imageAlt={client.imageAlt}/>
    })

    const onClick = () => {
        setIsAll(true);
        dispatch(getAllClients());
    }

    return (
        <section className="clients">
            <div className="clients__title title">
                <h2>OUR HAPPY CLIENT</h2>
            </div>
            <div className="clients__subtitle subtitle">
                <h3>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.</h3>
            </div>

            <div className="clients__items">
                {
                    isFetchingClients && <div>Fetching....</div>
                }
                {
                    !isFetchingClients && clientsList
                }
            </div>

            {
                !isAll && <div onClick={onClick} className="clients__button">
                    See all clients
                </div>
            }
        </section>
    );
}