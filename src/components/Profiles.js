import React from 'react'


const Profiles = ({helper}) => {
  return (
    <section className='profile' key={helper.id}>
      <div className='imgbx'>
         <img  className='img' src='https://images.pexels.com/photos/14398103/pexels-photo-14398103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
         alt='profile '/> 
        <div className='nickname'>{helper.nick_name}</div>
        <div className='gender'>{helper.gender}</div>
        <div className='age'>{helper.age}</div>
        <div className='price'>{helper.price}</div>
        <div className='address'>{helper.address}</div>
        <div className='bio'>{helper.bio}</div>
            


        </div>

    </section>
  )
}

export default Profiles