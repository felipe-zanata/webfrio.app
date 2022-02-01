import React, { createContext, useState } from "react"
import axios from 'axios'
import useEvent from '../hooks/useEvent'
import useUser from '../hooks/useUser'

const OfferContext = createContext({})

export const OfferProvider = ({ children }) => {
    
    const [offer, setOffer] = useState([])
    const { startingUpload, finishedUpload, setMessage } = useEvent()
    const { token } = useUser()

    const offerInternalContext = {
        offer,
        fetchOffer: async function() {
            try {
                const res = await axios.get('/offer.json')
                const rawOffer = res.data
                const offerTemp = []
                for(let key in rawOffer) {
                    offerTemp.push({
                        ...rawOffer[key],
                        id: key
                    })
                }
                setOffer(offerTemp)
            } catch(err) {
                setMessage(err.message, 'Erro')
            }
        },
        addOffer: async function(post) {
            try {
                startingUpload()
                const resStorage = await axios({
                    url: 'uploadImage',
                    baseURL: 'https://us-central1-instaclone-b78e8.cloudfunctions.net',
                    method: 'post',
                    data: {
                        image: post.image.base64
                    }
                })
                post.image = resStorage.data.imageUrl
                await axios.post(`/offer.json?auth=${token}`, post)
                finishedUpload()
                offerInternalContext.fetchOffer()
            } catch(err) {
                setMessage(err.message, 'Erro')
                finishedUpload()
            }
        },
        addComment: async function(postId, comment) {
            try {
                const res = await axios.get(`/offer/${postId}.json`)
                const comments = res.data.comments || []
                comments.push(comment)
                await axios.patch(`/offer/${postId}.json?auth=${token}`, {comments})
                offerInternalContext.fetchOffer()
            } catch(err) {
                setMessage(err.message, 'Erro')
            }
        }
    }

    return (
        <OfferContext.Provider value={offerInternalContext}>
            {children}
        </OfferContext.Provider>
    )
}

export default OfferContext