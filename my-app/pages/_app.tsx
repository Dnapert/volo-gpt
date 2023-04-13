import '@/styles/globals.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'

import { Button } from 'react-daisyui'
import DrawerSideBar from '@/components/Drawer/Drawer'

export default function App({ Component, pageProps }: AppProps) {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }
  return (<>
    <Button className='w-screen sticky h-16' onClick={toggleVisible}>Toggle Drawer</Button>
    {visible && <DrawerSideBar />}
    <Component {...pageProps} />

  </>)
}
