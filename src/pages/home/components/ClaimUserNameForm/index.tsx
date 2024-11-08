import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUserNameFormSchema = z.object({
  username: z.string(),
})

type ClaimUserNameFormData = z.infer<typeof claimUserNameFormSchema>

export function ClaimuUserNameForm() {
  const { register, handleSubmit } = useForm<ClaimUserNameFormData>()

  async function handleClaimUserName(data: ClaimUserNameFormData) {
    console.log(data.username)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUserName)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuário"
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
