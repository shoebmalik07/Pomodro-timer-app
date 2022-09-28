import {Flex} from "@chakra-ui/react"

import React from 'react'

const FormContainer = ({children, width= 'xl'}) => {
  return (
    <Flex
    direction='column'  
    boxShadow='lg'
    rounded='md'
    bgColor='purple.50'
    p = '10'
    width ={width}
    >
      {children}
    </Flex>
    
  )
}

export default FormContainer;