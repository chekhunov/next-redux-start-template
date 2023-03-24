import { ReactElement } from 'react'

import MainLayout from '~/components/layouts/MainLayout'
import HomePageView from '~/views/Home/Home.view'

import { NextPageExtended } from '~/types/interfaces/nextjs'

const HomePage: NextPageExtended = () => {
  return <HomePageView />
}

HomePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

HomePage.getMeta = () => ({
  title: 'Custom Cart',
  description: 'Test questions Custom Cart'
})

export default HomePage
