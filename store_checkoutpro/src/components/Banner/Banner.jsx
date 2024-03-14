import { useState, useEffect } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'
import { Card, CardBody, CardFooter, Stack, Heading, Image, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import { Payment } from '@mercadopago/sdk-react';

export default function Banner() {
    const [id, setId] = useState('')

    const initialization = {
        amount: 100,
        preferenceId: "<PREFERENCE_ID>",
       };
       const customization = {
        paymentMethods: {
          atm: "all",
          ticket: "all",
          creditCard: "all",
          debitCard: "all",
          mercadoPago: "all",
        },
        visual: {
            style: {
            theme: "dark",
            },
        },
       };
       const onSubmit = async (
        { selectedPaymentMethod, formData }
       ) => {
        // callback llamado al hacer clic en el botón enviar datos
        return new Promise((resolve, reject) => {
          fetch("/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((response) => {
              // recibir el resultado del pago
              resolve();
            })
            .catch((error) => {
              // manejar la respuesta de error al intentar crear el pago
              reject();
            });
        });
       };
       const onError = async (error) => {
        // callback llamado para todos los casos de error de Brick
        console.log(error);
       };
       const onReady = async () => {
        /*
          Callback llamado cuando el Brick está listo.
          Aquí puede ocultar cargamentos de su sitio, por ejemplo.
        */
       };

    
  return (
    <>  
    <Card maxW='sm'>
       <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
        />
    </Card>
    </>
  )
}
