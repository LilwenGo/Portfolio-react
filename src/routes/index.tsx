import { createFileRoute } from '@tanstack/react-router'
import Title from '../components/Title/Title'
import Card from '../components/Project/Card'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="w-full box-border min-h-screen flex flex-col justify-center items-center text-center">
      <Title>LILIAN ORTEGA</Title>
      <div className='w-full flex flex-col gap-9'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Card reverse="false" />
        <Card reverse="true" />
      </div>
    </div>
  )
}