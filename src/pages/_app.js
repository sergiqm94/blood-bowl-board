import PropTypes from 'proptyepes'

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object
}
