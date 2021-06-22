import Loader from '../../elements/loader'
import Content from '../../elements/content'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function ProgressLoader () {
  return (
    <Content>
      <Wrapper>
        <Loader />
      </Wrapper>
    </Content>
  )
}
