import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import { Button, Card } from '../../components/ui-components'
import { FaRegStar, FaGraduationCap } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { BsCheck } from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';

const Detail: NextPage = () => {
    return (
        <div>
            <div className="detail-background">
                <Header />
            </div>
            <div className="container">
                <div className="detail-info">
                    <div className="row">
                        <div className="detail-info__images col-xs-4">
                            <div className="detail-info__main-image">
                                <img src="/img/temp/1.png" />
                            </div>
                            <div className="detail-info__second-images">
                                <div><img src="https://checkyeti.imgix.net/images/optimized/ski-connections---freeride-group.jpg" /></div>
                                <div><img src="https://checkyeti.imgix.net/images/optimized/ski-connections---freeride-group.jpg" /></div>
                                <div><img src="https://checkyeti.imgix.net/images/optimized/ski-connections---freeride-group.jpg" /></div>
                                <div><img src="https://checkyeti.imgix.net/images/optimized/ski-connections---freeride-group.jpg" /></div>
                            </div>
                        </div>

                        <div className="col-xs-8">
                            <div className="detail-info__base">
                                <div className="detail-info__header">
                                    <div className="detail-info__title">
                                        <div className="detail-info__name">
                                            Роман Тур
                                        </div>
                                        <div className="detail-info__position">
                                            Тренер
                                        </div>
                                    </div>
                                    <Button>Связаться с тренером</Button>
                                </div>

                                <div className="detail-info__icon">
                                    <div>
                                        <div className="detail-info__icon-item">
                                            <FaRegStar color="#ff6900" size={24} />
                                            <span>4,9</span>
                                        </div>
                                        <div className="detail-info__icon-item">
                                            <HiOutlineLocationMarker color="#ff6900" size={24} />
                                            <span>Красная Поляна</span>
                                        </div>
                                    </div>
                                    <div>

                                        <div className="detail-info__icon-item">
                                            <FaGraduationCap color="#ff6900" size={24} />
                                            <span>Сноуборд</span>
                                        </div>
                                        <div className="detail-info__icon-item">
                                            <FiUsers color="#ff6900" size={24} />
                                            <span>Индивидуальные и групповые</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="detail-info__description">
                                Привет, меня зовут Роман. Я аккредитованный инструктор NLI по сноуборду и горным лыжам в Красной поляне. Горнолыжный спорт - неотъемлемая часть моей жизни. Я катаюсь уже более десяти лет, пять из которых провожу индивидуальные занятия со взрослыми и детьми. Со мной вы увидите горнолыжный спорт по-новому, научитесь технично и безопасно кататься, как по трассам, так и вне трасс, поборите свой страх и хорошо проведете время. Жду всех у себя на занятиях в Сочи, всегда на связи 24/7.
                                <ul className="detail-info__list">
                                    <li><BsCheck size={35} style={{paddingRight: 5}} />Инструктор NLI по сноуборду в Красной поляне</li>
                                    <li><BsCheck size={35} style={{paddingRight: 5}} />Инструктор по горным лыжам в Красной поляне</li>
                                    <li><BsCheck size={35} style={{paddingRight: 5}} />Инструктор NLI по сноуборду в Красной поляне</li>
                                    <li><BsCheck size={35} style={{paddingRight: 5}} />Инструктор по горным лыжам в Красной поляне</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="mt-5">
                        <div className="price">
                            <div className="price__title">
                                Услуги и цены
                            </div>
                            <div className="price__item">
                                <div className="price__item-name">Сноуборд</div>
                                <div className="price__item-price">2000 Р / 60 мин.</div>
                            </div>
                            <div className="price__item">
                                <div className="price__item-name">Групповые занятия</div>
                                <div className="price__item-price">3000 Р / 60 мин.</div>
                            </div>
                        </div>

                        <div className="reviews mt-5">
                            <div className="reviews__title">
                                Отзывы
                            </div>
                            <div className="reviews__item">
                                <div className="reviews__name">
                                    Татьяна И.
                                </div>
                                <div className="reviews__row">
                                    <div className="reviews__star">
                                        <AiTwotoneStar size={20} color="#FFC600" />
                                        <AiTwotoneStar size={20} color="#FFC600" />
                                        <AiTwotoneStar size={20} color="#FFC600" />
                                        <AiTwotoneStar size={20} color="#FFC600" />
                                        <AiTwotoneStar size={20} color="#FFC600" />
                                    </div>
                                    <div className="reviews__date">
                                        20.11.2021
                                    </div>
                                </div>
                                <div className="reviews__comment">
                                    Потрясающий опыт, Роман классный тренер!!!
                                </div>
                            </div>
                            <div className="reviews__item">
                                <div className="reviews__name">
                                    Татьяна И.
                                </div>
                                <div className="reviews__row">
                                    <div className="reviews__star">
                                        <AiTwotoneStar size={20} color="#FFC600" />
                                        <AiTwotoneStar size={20} color="#FFC600" />
                                        <AiTwotoneStar size={20} color="#FFC600" />
                                        <AiTwotoneStar size={20} color="#FFC600" />
                                        <AiTwotoneStar size={20} color="#FFC600" />
                                    </div>
                                    <div className="reviews__date">
                                        20.11.2021
                                    </div>
                                </div>
                                <div className="reviews__comment">
                                    Потрясающий опыт, Роман классный тренер!!!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;