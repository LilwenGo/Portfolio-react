import { createFileRoute } from '@tanstack/react-router'
import Gallery from '../../components/Projects/Gallery'

export const Route = createFileRoute('/projets/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <Gallery />
    )
}
