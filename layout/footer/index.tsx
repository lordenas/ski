import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Footer: NextPage = () => {
	return (
        <footer className="footer">
            <div className="footer__logo">
                <img src="/img/logo-orange.png" />
            </div>
            <div className="footer__description">
            Клуб alpine skiing – это сервис для заказа услуг инструктора на любом горнолыжном курорте.
            </div>
        </footer>
	)
}

export default Footer
