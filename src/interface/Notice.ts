interface Notice{
    id: number,
    title: string
    image_url: string
    summary: string
    published_at: Date
    updated_at: Date
    featured: false,
    launches: Launch[],
    events: never[]
}
export default Notice

interface Launch{
    id: string,
    provider: string,
}
