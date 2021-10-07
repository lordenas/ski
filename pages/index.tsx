import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../layout/header'
import Footer from '../layout/footer'
import { Button, Card } from '../components/ui-components'

const Home: NextPage = () => {
	return (
		<div>
			<div className="block-background">
				<Header />
				<div className="container">
					<div className="row">
						<div className="main-title mt-5">Научим кататься<br />
							на горных лыжах <br />
							и сноубордах
						</div>
						<div className="mt-3">
							<Button>Начать обучение</Button>
						</div>
					</div>
				</div>
			</div>
			<section className="container">
				<div className="mt-5 main-block-info">
					<div style={{width: 542}}>
						<img src="/img/illustr-1.png" />
						<div className="mt-2 main-block-info__title">О проекте</div>
						<div className="mt-3 main-block-info__text">
						В пик горнолыжного сезона найти хорошего специалиста не просто. Клуб <span style={{fontWeight: 500}}>alpine skiing</span> – это сервис для заказа услуг инструктора на любом горнолыжном курорте. Здесь можно в два клика подобрать
						и забронировать профессионала.
						</div>
					</div>
				</div>
			</section>
			<section className="container">
				<div className="block-cards" style={{width: 552}}>
					<Card className="block-cards__item">
						<img src="/img/map.svg" width="60px" />
						<div className="block-cards__title">Любой курорт</div>
						<div className="block-cards__description">Красная поляна, Домбай, Шерегеш, Горы зовут и д.р.</div>
					</Card>
					<Card className="block-cards__item">
						<img src="/img/ski.svg" width="60px" />
						<div className="block-cards__title">Прокат оборудования</div>
						<div className="block-cards__description">Аренда профессионального снаряжения и инвентаря</div>
					</Card>
					<Card className="block-cards__item">
						<img src="/img/check.svg" width="60px" />
						<div className="block-cards__title">Онлайн бронирование</div>
						<div className="block-cards__description">Забронируй инструктора в пару кликов</div>
					</Card>
					<Card className="block-cards__item">
						<img src="/img/children.svg" width="60px" />
						<div className="block-cards__title">Обучаем детей</div>
						<div className="block-cards__description">Группы для детей от 3 до 12 лет</div>
					</Card>
				</div>
			</section>

			<section className="block-preview container mt-10">
				<div className="row">
					<div className="col-xs-6">
						<div className="block-preview__title">Инструкторы</div>
						<div className="block-preview__description mb-5">
							Наши инструкторы не только красиво катаются, но и могут объяснить, какие упражнения вам делать, и скорректируют ошибки, научат если вы уже умеете кататься.
						</div>
						<Button>Начать обучение</Button>
					</div>
					<div className="col-xs-6">
						<img src="/img/instructor.png" />
					</div>
				</div>
			</section>

			<section className="block-preview container mt-10">
				<div className="row">
					<div className="col-xs-6">
						<img src="/img/ekiperov.png" />
					</div>
					<div className="col-xs-6">
						<div className="block-preview__title">Экипировка</div>
						<div className="block-preview__description mb-5">
							В джинсах, обычном пуховике, да ещё и с меховой отделкой, в горы не пойдёшь. Это знает даже начинающий лыжник. текст нужно придумать.
						</div>
						<Button>Забронировать</Button>
					</div>
				</div>
			</section>
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
			<Footer />
		</div>
	)
}

export default Home
