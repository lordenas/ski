import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../layout/header'
import { Button } from '../components/ui-components'

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
			<div className="container">
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
			</div>
		</div>
	)
}

export default Home
