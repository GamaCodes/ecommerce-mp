import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Pending = () => {
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

    /*
    collection_id=1320528073
    collection_status=approved
    payment_id=1320528073
    status=approved
    external_reference=null
    payment_type=credit_card
    merchant_order_id=14748951667
    preference_id=244651428-425ccff1-5310-4834-8c5f-1d3ca21330d3
    site_id=MLM
    processing_mode=aggregator
    merchant_account_id=null
    */

    /*
    collection_id=1316539352
    collection_status=in_process
    payment_id=1316539352
    status=in_process
    external_reference=null
    payment_type=credit_card
    merchant_order_id=14751474393
    preference_id=244651428-5307b50f-42da-4b98-af7c-eb820bc2a142
    site_id=MLM
    processing_mode=aggregator
    merchant_account_id=null
    */

    return (
        <div>
            <h1>Pago Pendiente</h1>
            <h3>ID de pago: {data.payment_id}</h3>
            <h3>ID de orden: {data.order_id}</h3>
            <h3>Metodo de pago: {data.payment_type}</h3>
            <h3>Referencia externa: {data.external_reference}</h3>
        </div>
    )
}

export default Pending