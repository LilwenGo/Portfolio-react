import { createFileRoute } from '@tanstack/react-router'
import Title from '../components/Title.tsx'
import Gallery from '../components/Projects/Gallery.tsx'
import Paragraph from '../components/Paragraph.tsx'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="w-full p-9 box-border min-h-screen flex flex-col justify-center items-center text-center">
      <div className='w-full p-32 flex flex-col justify-center items-center gap-16'>
        <Title size={1}>LILIAN ORTEGA</Title>
        <Paragraph>Salut ! Moi c’est Lilian. J’ai 18 ans et je suis passionné par le développement. Je suis spécialisé dans les langages du Web: HTML, CSS, JavaScript, PHP, et quelques bases de Java. J’ai aussi eu l’occasion de pratiquer avec plusieurs frameworks et librairies (SCSS, REACT, Tanstack Router, Remix, Laravel), les bases de données MySQL et SQLite, ainsi que la plateforme Node.js. Je suis capable de développer le Front-end et le Back-end d’un site, mais je préfère le Back-end. Pour ce qui est de mes qualités, je suis amical même si je suis un peu timide, mais cette timidité me permet d’être plus à l’écoute des autres. La ponctualité est quelque chose de très important pour moi, ce qui me permet aussi d’être quelqu’un d’organisé. Je suis aussi très sérieux dans les tâches qui me sont confiées.</Paragraph>
      </div>
      <Gallery />
    </div>
  )
}