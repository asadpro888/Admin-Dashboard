import React from 'react'
import Dacal from './Dacal'
import LineChart from './LineChart'
import BarChart from './BarChart'
import Ara from './Ara'
const page = () => {
  return (
    <div className='flex flex-wrap justify-evanly'>
      <Dacal/>
      <LineChart/>
      <BarChart/>
      <Ara/>
    </div>
  )
}

export default page