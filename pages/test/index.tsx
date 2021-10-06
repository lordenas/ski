import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootStore } from '../../store/configureStore'


const Home: NextPage = () => {
  const store = useSelector((store: RootStore) => store.users)
  return (
    <div>
      qwe test
      { JSON.stringify(store)}
    </div>
  )
}

export default Home;