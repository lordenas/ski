import React, { FC } from 'react';
import { Button, Card } from '../../../../components/ui-components';

type CardBlockProps = {
    onClick: () => void;
    info: {
        image: string;
        name: string;
        location: string;
        sport: string;
        age: string;
        experience: string;
    }
}

const CardBlock: FC<CardBlockProps> = (props) => {
    return (
        <div className="card-block">
            <div className="card-block__image">
                <img src={props.info.image} />
            </div>
            <div className="card-block__hover">
                <div className="card-block__description">
                    <div className="card-block__name">
                        {props.info.name}
                    </div>
                    <div className="card-block__location">
                        {props.info.location}
                    </div>
                    <div className="card-block__other">
                        Вид спорта: {props.info.sport}
                    </div>
                    <div className="card-block__other">
                        Возраст: {props.info.age}
                    </div>
                    <div className="card-block__other">
                        Стаж: {props.info.experience}
                    </div>
                </div>
                <div className="card-block__button">
                    <Button>Связаться с тренером</Button>
                </div>
            </div>
        </div>
    )
}

export default CardBlock;