import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';
import '../sass/main.sass'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  	<Provider store={store}>
  		<Component {...pageProps} />
	</Provider>
  )
}
export default MyApp
