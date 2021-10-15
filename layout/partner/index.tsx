import React, { FC } from 'react';

const Partner = () => {
    return (
        <div className="partner">
            <section className="container mt-10">
                <div className="partner__title">
                    Наши партнеры
                </div>
                <div className="partner__list">
                    <div className="partner__image">
                        <img src="/img/part1.png" />
                    </div>
                    <div className="partner__image">
                        <img src="/img/part2.png" />
                    </div>
                    <div className="partner__image">
                        <img src="/img/part3.png" />
                    </div>
                    <div className="partner__image">
                        <img src="/img/part4.png" />
                    </div>
                    <div className="partner__image">
                        <img src="/img/part5.png" />
                    </div>
                    <div className="partner__image">
                        <img src="/img/part6.png" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Partner;