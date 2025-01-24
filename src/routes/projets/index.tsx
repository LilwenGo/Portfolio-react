import { createFileRoute } from '@tanstack/react-router'
import Gallery from '../../components/Projects/Gallery'

export const Route = createFileRoute('/projets/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (<div className="w-full p-9 box-border min-h-screen flex flex-col justify-center items-center text-center">
        <Gallery />
    </div>)
}
