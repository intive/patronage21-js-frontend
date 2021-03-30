import styled from 'styled-components'
import Layout from '../components/layouts/home'
import Content from '../components/elements/content'
import Head from "next/head"


export default function({
  title = 'Patron-a-tive'
}) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Head>
      <Layout>
        <Content>
          tu kontent
        </Content>
      </Layout>
    </div>
  )
}
