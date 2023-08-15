import About from '@/components/about'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Teams from '@/components/teams'

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Hero />
      <About />
      <Teams />
      <Footer />
    </main>
  )
}
