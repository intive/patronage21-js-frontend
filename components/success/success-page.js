import {SuccessPageWrapper, Title} from './style.js'

// import patroCat from './assets/patronage.png'
export default function SuccessPage ({ title, description, buttonLabel }) {
    return (
        <SuccessPageWrapper>
            <Title>{title}</Title>
            <h2>{description}</h2>
            <a href='#'>{buttonLabel}</a>
            <img src='' alt=''/>
        </SuccessPageWrapper>
    )
}