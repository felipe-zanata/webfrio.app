import React, { createContext, useState } from "react"
import axios from 'axios'

import useEvent from '../hooks/useEvent'

//const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://192.168.15.15:3000'

const server = 'http://webfrio.com.br/webfrio/api/v1/motoristas/'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [name, setName] = useState('')
    const [placa, setPlaca] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')

    const { setMessage } = useEvent()

    const userInternalContext = {
        name,
        placa,
        cellphone,
        token,
        validPlacaAPI: async placa => {
            const resAuth = await axios.post(`${server}/signin`, {
                placa,
                password,
                return_secure_token: true
            })
            if (resAuth.data.id) {
                const res = await axios.get(`${resAuth.data.id}.json`)
                setName(res.data.name)
                setPlaca(placa)
                setToken(resAuth.data.id_token)
            }
        },
        createUser: async function (userData, props) {
            try {
                const resNewUser = await axios.post(server, {
                    ...userData,
                    placa: "AAA1234",
                    tipo_veiculo: "1",
                    carroceria: "1",
                    rastreador: true,
                    marca: "1",
                    modelo: "1",
                    ano: "2015",
                    seguro: true,
                    capacidade_maxima: "500.0",
                    permissionado: true,
                    cnh: "222333444555",
                    senha: "abcdf123"
                })
                /* if (resNewUser.id) {
                    await axios.put(`${resNewUser.id}.json`, {
                        name: userData.name
                    })
                } */
                console.log('res = ', resNewUser)
                props.navigation.navigate('Complete')
                //userInternalContext.login(resNewUser.placa, resNewUser.senha)

            } catch (err) {
                //setMessage(err.message, 'Erro')
                console.log('Erro =', err)
                props.navigation.navigate('CreateError')
            }
        },
        login: async function (placa, password, props) {
            try {
                setName('Felipe')
                setPlaca(placa)
                setToken(456789)
                /* const resAuth = await axios.post(`${server}/signin`, {
                    placa,
                    password,
                    returnSecureToken: true
                })
                if(resAuth.data.localId) {
                    const res = await axios.get(`/users/${resAuth.data.localId}.json`)
                    setName(res.data.name)
                    setPlaca(placa)
                    setToken(resAuth.data.idToken)
                } */
            } catch (err) {
                setMessage(err.message, 'Erro')
            }
        },
        logout: function () {
            setName('')
            setPlaca('')
            setToken('')
        }
    }

    return (
        <UserContext.Provider value={userInternalContext}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext