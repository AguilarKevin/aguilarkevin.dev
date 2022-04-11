import dynamic from 'next/dynamic'

// import Home from '../sections/Home/Home'

const SiteUnderConstruction = dynamic(
  () => import('sections/SiteUnderConstruction'),
  {ssr: false}
)

export default function HomePage() {
  // return <Home />
  return <SiteUnderConstruction />
}
