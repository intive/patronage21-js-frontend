import { Subtitle, Text, TilesContainer, TileButton } from './style'
import { People, MenuBook, Code, Today, EventNote } from '@material-ui/icons'
import { useRouter } from 'next/router'

export default function HomePage () {
  const router = useRouter()

  return (
    <>
      <Subtitle>Witaj w Patron-a-tive!</Subtitle>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <TilesContainer>
        <TileButton variant='outlined' disabled>
          <Code fontSize='large' />
          Grupy technologiczne
        </TileButton>
        <TileButton variant='outlined' onClick={() => router.push('http://intive-patronage.pl')}>
          <People fontSize='large' />
          Użytkownicy
        </TileButton>
        <TileButton variant='outlined' disabled>
          <MenuBook fontSize='large' />
          Dzienniczek
        </TileButton>
        <TileButton variant='outlined' onClick={() => router.push('/kalendarz')}>
          <Today fontSize='large' />
          Kalendarz
        </TileButton>
        <TileButton variant='outlined' disabled>
          <EventNote fontSize='large' />
          Audyt zdarzeń
        </TileButton>
      </TilesContainer>
    </>
  )
}
