import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Failure = () => {
    const [id, setId] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();

    const data = {
        'collection_id': searchParams.get("collection_id"),
        'collection_status': searchParams.get("collection_status"),
        'payment_id': searchParams.get("payment_id"),
        'payment_type': searchParams.get("payment_type"),
        'status': searchParams.get("status"),
        'order_id': searchParams.get("merchant_order_id"),
        'external_reference': searchParams.get("external_reference")
    }

    console.log(data, 'params')

    return (
        <div>
            <h1>Pago Rechazado</h1>
            <h3>El pago es “rechazado” o no ha finalizado</h3>
            <h3>Metodo de pago: {data.payment_type}</h3>
            <h3>Referencia externa: {data.external_reference}</h3>
        </div>
    )
}

export default Failure