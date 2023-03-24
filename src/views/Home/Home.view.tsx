// import dynamic from 'next/dynamic'
import React, { FC } from 'react'

import { Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'
// import LazyHydrate from 'react-lazy-hydration'

// const StepsSection = dynamic(() => import('./components/StepsSection'))


const HomePageView: FC = () => {
  return (
    <>
      <Typography component="h1" sx={{ display: 'none' }}>
        <FormattedMessage defaultMessage="Custom Cart" />
      </Typography>

      <div>dgsghhhjdjdj</div>

      {/* <LazyHydrate whenVisible>
        <StepsSection />
      </LazyHydrate> */}

    </>
  )
}

export default HomePageView
