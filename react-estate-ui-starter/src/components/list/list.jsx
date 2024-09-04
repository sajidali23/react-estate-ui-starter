import React from 'react'
import Card from '../card/card';
import { listData } from '../../lib/dummydata';

const list = () => {
  return (
    <div className='list'>{listData.map((item) =>(
    <Card key={item.id} item={item}/>
    ))}
    </div>
  )
}

export default list