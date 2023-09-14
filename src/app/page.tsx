
import { getData } from '@/libs/getData';
import Hero from '@/components/Hero';

export default async function Home() {
    const youBikeData: Promise<YouBike[]> = await getData();
    const data = await youBikeData;

    return (
        <main className="h-screen pt-[60px] md:pt-[80px] font-noto">
            <Hero data={data}/>
        </main>
    )
}

