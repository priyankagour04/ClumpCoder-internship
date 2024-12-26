import React from 'react'
import SearchBar from '../searchbar/SearchBar'
import Table from '../leadTable/Table'

const Leads = () => {
  return (
<>
 <div className=''>
 <div className='flex justify-between items-center'>
   <h1 className='text-2xl font-semibold'> Active Enquiry Leads</h1>
   <button className='text-white bg-primary p-3 rounded-md'>Create new lead</button>
  </div>
  <SearchBar/>
  <Table/>
 </div>
</>  )
}

export default Leads