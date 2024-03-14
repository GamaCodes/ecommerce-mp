import { useState } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'
import './Cellphone.css'

const Cellphone = () => {
    const [id, setId] = useState('')

    initMercadoPago('APP_USR-a68157fb-5513-4dc7-adbf-709ba3e46766', {
        locale: 'es-MX'
    });

    const createPreference = async () => {
        try {
        const response = await axios.post('http://localhost:3000/create_preference', {
            title:'Test_title',
            quantity: '3',
            price:100
        })

        const {id} = response.data
        return id
        } catch (error) {
        console.log(error)
        }
    }

    const handleBuy = async () => {
        const id = await createPreference()
        if (id) {
        setId(id)
        }
    }
    return (
        <div>
            
            <div className="card">
                <img className='card-img' src='https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png' alt='Celular de prueba' />
                <ul>
                <li>8 RAM</li>
                <li>64 GB</li>
                </ul>
                <p>
                Precio: $100
                </p>
                <button onClick={() => handleBuy()}>
                Pagar la compra
                </button>
            </div>
            {
                id && <Wallet initialization={{ preferenceId: id }} customization={{ texts:{ valueProp: 'smart_option'}}} />
            }
        </div>
    )
}

export default Cellphone