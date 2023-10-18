// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { ConfigProvider, Tabs, Alert } from 'antd'
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
          <Alert message="本站仅供娱乐，所造成的一切后果与本站无关" className='mb-2' type="warning" showIcon closable/>
          <Alert
            message="公告"
            description={<>
              <div>本站永久免费，如需要其他模板请联系vx: hong_yu1024</div>
              <div className='font-bold'>如果您有github帐号欢迎给我个Star，万分感激！！！ <a href="https://github.com/YuzeTT/picture-kit">转到Github</a></div>
            </>}
            type="success"
          />
          <LuckinCoffee></LuckinCoffee>
        </div>
        <div className='text-xs text-center py-3 op-50'>© 2023 YuzeTT</div>
      </ConfigProvider>
    </>
  )
}

export default App
