import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from 'store/instance';
import Header from 'components/atoms/Header';
import Container from 'components/atoms/Container';
import Spacer from 'components/atoms/Spacer';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Header />
        <Spacer size={100} />
        <Container>
          <Component {...pageProps} />
        </Container>
      </QueryClientProvider>
    </Provider>
  );
}
export default MyApp;
