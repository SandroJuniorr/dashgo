import { Box, Button, ButtonGroup, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from 'react-hook-form'

type CreatedUserFormData ={
    name: string,
    email: string,
    password:string,
    password_confirmation:string
  }
  const createdUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('E-mail é obrigatorio').email('E-mail inválido'),
    password:yup.string().required('Senha é obrigatorio').min(6,'No mínimo 6 caracteres'),
    password_confirmation:yup.string().oneOf([
        null,yup.ref('password')
    ], 'As senhas precisam ser iguais')
  })


export default function CreateUser(){
    const {register,handleSubmit, formState} = useForm({
        resolver: yupResolver(createdUserFormSchema)
      })
    
      const {errors} = formState
      const handleCreateUser:SubmitHandler<CreatedUserFormData> = (values)=>{
          console.log(values)
      }
    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
            <Sidebar/>
            <Box as="form"  onSubmit={handleSubmit(handleCreateUser)} flex='1' borderRadius={8} bg="gray.800" p={["6","8"]}>
            <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
            <Divider my="6" borderColor="gray.700"/>
            <VStack spacing="8">
                <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                    <Input name="name" label="Nome completo" error={errors.name} {...register('name')}/>
                    <Input name="email" type="email" label="Email" error={errors.email} {...register('email')}/>
                </SimpleGrid>
                <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                    <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')}/>
                    <Input name="password_confirmation" type="password" label="Confirmar senha" error={errors.password_confirmation} {...register("password_confirmation")}/>
                </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
                <HStack spacing="4">
                <Link href="/users" passHref>  
                <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                    <Button type="submit" colorScheme="pink">Salvar</Button>
                </HStack>

            </Flex>

            </Box>
            </Flex>
        </Box>
    )
}