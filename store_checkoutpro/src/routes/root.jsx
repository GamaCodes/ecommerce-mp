import { useState } from 'react'
import { Heading } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const Pending = () => {
    const [id, setId] = useState('')

    return (
        <div>
            <Heading textAlign='center'>Tienda Azul</Heading>
            <Outlet />
        </div>
    )
}

export default Pending