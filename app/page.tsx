import Image from 'next/image'
import { Login } from '@/components'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="">
      <Hero/>
      {/* <Login username={''} password={''}/> */}
    </main>
  )
}
