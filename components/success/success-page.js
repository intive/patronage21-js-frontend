import {SuccessPageWrapper, Title, Description, SuccessButton, SuccessImage} from './style.js';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function SuccessPage ({ title, description, buttonLabel, buttonRedirect}) {
    return (
        <SuccessPageWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
            
            <Link href={buttonRedirect} passHref>
                <SuccessButton variant='contained' color='primary'>{buttonLabel}</SuccessButton>
            </Link>
            
            <SuccessImage>
                <Image
                    src="/patrocat.png"
                    alt="Patrocat"
                    width='300'
                    height='300'
            />
            </SuccessImage>
        </SuccessPageWrapper>
    )
}

SuccessPage.propTypes = {
    title: PropTypes.string.isRequired
}
SuccessPage.defaultProps = {
    buttonLabel: 'Zamknij',
    buttonRedirect: '/'
}