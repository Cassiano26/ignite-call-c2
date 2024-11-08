import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { FormContainer, HeaderContainer, RegisterContainer } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <RegisterContainer>
      <HeaderContainer>
        <Heading as="strong">Bem vindo ao ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </HeaderContainer>
      <FormContainer as="form">
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput prefix="ignite.com/" placeholder="seu-usuario" />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Seu nome" />
        </label>
        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </FormContainer>
    </RegisterContainer>
  )
}
