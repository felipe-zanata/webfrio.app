import React, { createContext, useState } from "react"
import axios from 'axios'

import useEvent from '../hooks/useEvent'

const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://192.168.15.15:3000'

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
        createUser: async user => {
            try {
                userInternalContext.login(user.placa, user.password)
                /* const resNewUser = await axios.post(`${server}/signup`, {
                    placa: user.placa,
                    password: user.password,
                    cellphone: user.cellphone,
                    returnSecureToken: true
                })
                if(resNewUser.data.localId) {
                    await axios.put(`/users/${resNewUser.data.localId}.json`, {
                        name: user.name
                    })
                    userInternalContext.login(user.placa, user.password)
                } */
            } catch (err) {
                setMessage(err.message, 'Erro')
            }
        },
        login: async function(placa, password, props) {
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
        logout: function() {
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