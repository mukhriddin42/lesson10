import { AppstoreOutlined, LaptopOutlined, SettingOutlined } from '@ant-design/icons'
import React from 'react'

const Catolog = () => {
  return (
    <div className='flex gap-8'>
      <div className='flex gap-2 py-2 px-2 bg-pink-500 text-white cursor-pointer'>
        <AppstoreOutlined className='text-2xl' />
        <p>Category</p>
      </div>
      <div className='flex gap-2 py-2 px-2 cursor-pointer'>
        <SettingOutlined className='text-2xl text-pink-500' />
        <p>Settings</p>
      </div>
      <div className='flex gap-2 py-2 px-2 cursor-pointer'>
        <LaptopOutlined className='text-2xl' />
        <p>Buy computer</p>
      </div>
      <div className='py-2 px-2 cursor-pointer'>
        <p>Yangilari</p>
      </div>
      <div className='py-2 px-2 cursor-pointer'>
        <p>HyperX</p>
      </div>
      <div className='py-2 px-2 cursor-pointer'>
        <p>Barch brendlar</p>
      </div>
    </div>
  )
}

export default Catolog