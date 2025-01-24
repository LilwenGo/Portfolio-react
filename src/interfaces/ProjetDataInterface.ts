export default interface ProjetDataInterface {
    id: number
    name: string
    description: string
    date: string
    mainImg: number
    technos: string[]
    images: Array<{
        src: string,
        alt: string,
        desc?: string
    }>
    urls: string[]
}