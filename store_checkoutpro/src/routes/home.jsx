import { useState, useEffect } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'
import { Card, CardBody, CardFooter, Stack, Heading, Image, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import Banner from '../components/Banner/Banner'

export default function Home() {
    const [id, setId] = useState('')

    useEffect(() => {
        initMercadoPago('TEST-eaca0c10-34f5-4203-ba9b-d1b1a30e6648', {
            locale: 'es-MX'
        });
      }, []);

      const createPreference = async () => {
        try {
        const response = await axios.post('https://testpro-pjro.onrender.com/create_preference', {
            title:'Celular último',
            quantity: 1,
            price:100
        })

        const {id} = response.data
        return id
        } catch (error) {
        console.log(error)
        console.log('Error: Nose')
        }
    }

    const handleBuy = async () => {
        const id = await createPreference()
        if (id) {
        setId(id)
        }
    }

  return (
    <>
        <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png'
                alt='Celular de prueba'
                borderRadius='lg'
                boxSize='28vw'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Celular último modelo</Heading>
                <Text>
                    - 8ram
                    - Memoria 64 GB
                    - Color rojo
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    $100.00
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup>
                    {
                        id ? <Wallet initialization={{ preferenceId: id, redirectMode: 'modal' }}/> : <Button variant='solid' colorScheme='blue' onClick={() => handleBuy()}>Pagar la compra </Button>
                    }
                </ButtonGroup>
            </CardFooter>
        </Card>
    </>
  )
}
