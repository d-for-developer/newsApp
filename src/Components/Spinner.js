import React from 'react';
import loading from '../loading.gif';

const Spinner = () => {
    return( 
    <div className='flex justify-center py-4'>
        <img src={loading} alt="Loading News" />
    </div>
    )
  }

export default Spinner
