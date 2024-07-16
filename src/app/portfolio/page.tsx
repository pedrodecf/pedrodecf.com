import { PortfolioCard } from '../_components/PorfolioCard'

export default function Portfolio() {
  return (
    <main className="flex flex-col justify-center mt-8 gap-5">
      <h2 className="text-2xl font-bold">Portfolio: </h2>
      <div className="grid grid-cols-2 gap-5">
        <PortfolioCard
          image="/screenshot-1.png"
          title="AnimesOneHD"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium voluptatibus maiores assumenda, ad, reiciendis numquam impedit quibusdam"
          projectLink="https://animesonehd.vercel.app/"
        />
        <PortfolioCard
          image="/screenshot-1.png"
          title="AnimesOneHD"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium voluptatibus maiores assumenda, ad, reiciendis numquam impedit quibusdam"
          projectLink="https://animesonehd.vercel.app/"
          githubLink="asdfasf"
        />
        <PortfolioCard
          image="/screenshot-1.png"
          title="AnimesOneHD"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium voluptatibus maiores assumenda, ad, reiciendis numquam impedit quibusdam"
          projectLink="https://animesonehd.vercel.app/"
        />
      </div>
    </main>
  )
}
