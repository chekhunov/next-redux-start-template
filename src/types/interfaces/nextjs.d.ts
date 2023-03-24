import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

import { NextSeoProps } from 'next-seo'

import { AuthGuardProps } from '~/services/Auth/AuthGuard'

type NextPageExtended = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
  auth?: AuthGuardProps
  getMeta?: () => NextSeoProps
}
