import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import wrapper from "~/store";
import { useRouter } from 'next/router'
import CssBaseline from '@mui/material/CssBaseline'
import LocalizedProvider from '~/containers/LocalizedProvider'
import OfflineNotification from '~/containers/OfflineNotification'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { Theme, ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import { createEmotionCache } from '~/utils/helpers/emotion.helpers'
import { NextPageExtended } from '~/types/interfaces/nextjs'
import { IS_BROWSER } from '~/utils/constants/env.constants'
import theme from '~/theme'
import useNetwork from '~/hooks/useNetwork'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: NextPageExtended
  dehydratedState: any
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
  ...rest
}: MyAppProps) => {
  const router = useRouter()

  const { isOffline, onClose } = useNetwork()
  const { store, props } = wrapper.useWrappedStore(rest)

  useEffect(() => {
    if (IS_BROWSER) {
      sessionStorage.setItem('mountLink', router?.asPath)
    }
    return () => {
      if (IS_BROWSER) {
        sessionStorage.setItem('link', router?.asPath)
      }
    }
  }, [router?.asPath])
  return (
    <LocalizedProvider>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=0"
        />
      </Head>

      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider<Theme> theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />

            <Component {...pageProps} />

            {isOffline && (
              <OfflineNotification isOffline={isOffline} onClose={onClose} />
            )}
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </LocalizedProvider>
  )
}

export default MyApp
