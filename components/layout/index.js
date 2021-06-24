import React from 'react'
import Head from 'next/head'
import AppHeader from '../elements/app-header'
import UserHeader from '../elements/user-header'
import Content from '../elements/content'

const Layout = ({ withNavigation = true, children }) => {
  const header = withNavigation ? <UserHeader /> : <AppHeader useLogoRedirect={false} />
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel="shortcut icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap' rel='stylesheet' />
        <title>Patron-a-tive</title>
      </Head>
      {header}
      <Content>
        {children}
      </Content>
    </>
  )
}

export default Layout
