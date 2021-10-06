import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Header: NextPage = () => {
	return (
        <header className="header">
            <div className="logo">
                <img src="/img/logo.png" />
            </div>
        </header>
	)
}

export default Header
