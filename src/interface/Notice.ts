export interface Notice{
    id: number,
    title: string
    image_url: string
    summary: string
    news_site: string
    published_at: string
    url: string
    updated_at: string
    featured: false,
    launches: Launch[],
    events: never[]
}


interface Launch{
    id: string,
    provider: string,
}

