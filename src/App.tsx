// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { ConfigProvider, Tabs } from 'antd'
import Navbar from './components/Navbar'
import LuckinCoffee from './pages/LuckinCoffee'

function App() {
  const items = [
    {
      key: '1',
      label: '瑞幸咖啡',
      // children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: '更多...咕咕咕...',
      disabled: true
      // children: 'Content of Tab Pane 1',
    },
  ];
  
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token，影响范围大
            colorPrimary: '#00b96b',
            borderRadius: 8,
          },
        }}
      >
        <Navbar></Navbar>
        <Tabs defaultActiveKey="1" items={items} tabBarExtraContent={{left: <div className='w-4' />}} />
        <div className='px-4 py-2 max-w-lg mx-auto'>
          <LuckinCoffee></LuckinCoffee>
        </div>
        <div className='text-xs text-center py-3 op-50'>© 2023 YuzeTT</div>
      </ConfigProvider>
    </>
  )
}

export default App
