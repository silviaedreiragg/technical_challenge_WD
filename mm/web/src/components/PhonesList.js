import React, { useEffect, useState } from 'react'
import phonesService from '../services/phones'

function PhonesList() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    phonesService.list()
      .then((phones) => setPhones(phones))
      .catch(error => console.error(error))
  }, [])

  return (
    <main>
      <h1>Cave Phones</h1>
      {phones.map((phone) => <div key={phone.id}>
        <div className="phonesList">
          <a href={`/phones/${phone.id}`}>{phone.name}</a>
          <img src={`/images/${phone?.imageFileName}`} className="mvlImage-mini" alt="miniatura-mvl"/>
        </div>
      </div>)}
    </main>
  )
}

export default PhonesList