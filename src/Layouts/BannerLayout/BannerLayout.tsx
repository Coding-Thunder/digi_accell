import React, { FC } from 'react'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import { BannerLayoutProps } from '../../services/interfaces'


const BannerLayout:FC<BannerLayoutProps> = ({children}) => {
  return (
    <>
        <HomeBanner/>
        {children}
    </>
  )
}

export default BannerLayout