import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from '@/Components/widgets/Hero'
import Content from '@/Components/widgets/Content'
import CoreTracks from '@/Components/widgets/CoreTracks'
import Outcome from '@/Components/widgets/Outcome'
export default function Home() {
  return (
    <>
    <main>
    
      {/* Hero Section */}
  <Hero />
  <CoreTracks />
  <Content />
  <Outcome />
    </main>
    </>
  )
}
