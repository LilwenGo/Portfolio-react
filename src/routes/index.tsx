import { createFileRoute } from '@tanstack/react-router'
import Title from '../components/Titles/Title.tsx'
import Gallery from '../components/Projects/Gallery.tsx'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="w-full box-border min-h-screen flex flex-col justify-center items-center text-center">
      <Title>LILIAN ORTEGA</Title>
      <Gallery />
    </div>
  )
}