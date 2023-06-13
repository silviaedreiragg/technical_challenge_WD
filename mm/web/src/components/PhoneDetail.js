import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import phonesService from '../services/phones'

function PhoneDetail() {
  const { id } = useParams()
  const [phone, setPhone] = useState()

  useEffect(() => {
    phonesService.detail(id)
      .then((phone) => setPhone(phone))
      .catch(error => console.error(error))
  }, [id])
  console.log(phone)

  return (

    <div>
      <h2>{phone?.name}</h2>
      <h4>{phone?.manufacturer}</h4>
      <p>{phone?.description}</p>

      <div className="mvlDescription">
        <img src={`/images/${phone?.imageFileName}`} alt='photomvl' className="mvlImage" />
        <div>
          <p>Screen: {phone?.screen}</p>
          <p>Color: {phone?.color}</p>
          <p>Processor: {phone?.processor}</p>
          <p>Ram: {phone?.ram}</p>
          <p>Price: {phone?.price}€</p>

        </div>
      </div>

    </div>
  )
}

export default PhoneDetail