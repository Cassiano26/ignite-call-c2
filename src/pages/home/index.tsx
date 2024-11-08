import { Heading, Text } from '@ignite-ui/react'
import { HomeContainer, HeroContainer, PreviewContainer } from './styles'
import previewImage from '../../assets/PreviewImage.png'
import Image from 'next/image'

export default function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </HeroContainer>
      <PreviewContainer>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Imagem de calendário simulando a aplicalçao em funcionamento"
        />
      </PreviewContainer>
    </HomeContainer>
  )
}
