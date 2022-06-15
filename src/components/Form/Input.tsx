import { FormControl, FormErrorMessage, FormLabel, Input as ChackraInput,  InputProps as ChackraInputProps } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChackraInputProps {
    name:string;
    label?:string;
    error?: FieldError

}
 const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label,error=null, ...rest}: InputProps , ref) => {
//    !!error trasforma o valor em booleano
   return (<FormControl isInvalid={!!error}>
       {!!label && <FormLabel htmlFor={name} id={`label-${name}`}>{label}</FormLabel>}
          <ChackraInput name={name} 
          id={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
          bgColor: "gray.900"
           }}
          size="lg"
          ref={ref}
          {...rest}
              />
        {!!error && (
            <FormErrorMessage>
            {error.message}
        </FormErrorMessage>
        )}
        
    </FormControl>)
}

export const Input = forwardRef(InputBase)