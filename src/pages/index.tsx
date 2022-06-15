import { Button, Flex, Stack } from '@chakra-ui/react'
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SignInFormData ={
  email: string,
  password:string,
}
const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail é obrigatorio').email('E-mail inválido'),
  password:yup.string().required('Senha é obrigatorio')
})
export default function SignIn() {
  const {register,handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const {errors} = formState
  
  const handleSignIn:SubmitHandler<SignInFormData> = (values)=>{
    console.log(values)
    console.log(errors)
  }
  return (
      
      <Flex
      w='100vw'
      h='100vh'
      align="center"
      justify="center"
      >
        <Flex as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input  
            name='email' 
            type='email' 
            label="Email" 
            error={errors.email}
            {...register('email')}
           
           />
            <Input  
              name='password' 
              type='password' 
              label="Senha" 
              error={errors.password}
              {...register('password')}
              
              />
            
          </Stack>

          <Button type='submit' mt="6" colorScheme="pink" size="lg">Entrar</Button>
        </Flex>
        
      </Flex>

      
  )
}


