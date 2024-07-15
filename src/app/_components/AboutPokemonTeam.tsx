import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export function AboutPokemonTeam() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold">Meu time Pokémon:</h2>
      <p className="mb-8 text-sm opacity-60">
        Não dá pra levar muito a sério, pois estou sempre mudando (com excessão
        do Dragonite).
      </p>
      <div className="flex items-end gap-2 justify-between">
        <Badge
          variant="outline"
          className="rounded-full py-2 relative hover:bg-secondary"
        >
          <Image
            src="/Type-Flying.png"
            alt="Type Flying"
            width={35}
            height={35}
            className="absolute -top-3 -right-2"
          />
          <Image
            src="/Type-Dragon.png"
            alt="Type Dragon"
            width={35}
            height={35}
            className="absolute -top-3 right-3"
          />
          <div className="w-24 h-24 flex items-center justify-center">
            <Image
              src="/dragonite.gif"
              alt="Dragonite"
              width={85}
              height={98}
              unoptimized
            />
          </div>
        </Badge>

        <Badge
          variant="outline"
          className="rounded-full py-2 relative hover:bg-secondary"
        >
          <Image
            src="/Type-Fighting.png"
            alt="Type Fighting"
            width={35}
            height={35}
            className="absolute -top-3 -right-2"
          />
          <Image
            src="/Type-Fire.png"
            alt="Type Fire"
            width={35}
            height={35}
            className="absolute -top-3 right-3"
          />
          <div className="w-24 h-24 flex items-center justify-center">
            <Image
              src="/blaziken-mega.gif"
              alt="Blazike Mega"
              width={118}
              height={107}
              unoptimized
            />
          </div>
        </Badge>

        <Badge
          variant="outline"
          className="rounded-full py-2 relative hover:bg-secondary"
        >
          <Image
            src="/Type-Ground.png"
            alt="Type Ground"
            width={35}
            height={35}
            className="absolute -top-3 -right-2"
          />
          <Image
            src="/Type-Dragon.png"
            alt="Type Dragon"
            width={35}
            height={35}
            className="absolute -top-3 right-3"
          />
          <div className="w-24 h-24 flex items-center justify-center">
            <Image
              src="/garchomp.gif"
              alt="Garchomp"
              width={115}
              height={108}
              unoptimized
            />
          </div>
        </Badge>

        <Badge
          variant="outline"
          className="rounded-full py-2 relative hover:bg-secondary"
        >
          <Image
            src="/Type-Fairy.png"
            alt="Type Fairy"
            width={35}
            height={35}
            className="absolute -top-3 -right-2"
          />
          <Image
            src="/Type-Ice.png"
            alt="Type Ice"
            width={35}
            height={35}
            className="absolute -top-3 right-3"
          />
          <div className="w-24 h-24 flex items-center justify-center">
            <Image
              src="/ninetales-alola.gif"
              alt="Ninetales Alola"
              width={89}
              height={70}
              unoptimized
            />
          </div>
        </Badge>

        <Badge
          variant="outline"
          className="rounded-full py-2 relative hover:bg-secondary"
        >
          <Image
            src="/Type-Psychic.png"
            alt="Type Psychic"
            width={35}
            height={35}
            className="absolute -top-3 -right-2"
          />
          <Image
            src="/Type-Steel.png"
            alt="Type Steel"
            width={35}
            height={35}
            className="absolute -top-3 right-3"
          />
          <div className="w-24 h-24 flex items-center justify-center">
            <Image
              src="/metagross.gif"
              alt="Metagross"
              width={142}
              height={73}
              unoptimized
            />
          </div>
        </Badge>

        <Badge
          variant="outline"
          className="rounded-full py-2 relative hover:bg-secondary"
        >
          <Image
            src="/Type-Water.png"
            alt="Type Water"
            width={35}
            height={35}
            className="absolute -top-3 -right-2"
          />
          <Image
            src="/Type-Poison.png"
            alt="Type Poison"
            width={35}
            height={35}
            className="absolute -top-3 right-3"
          />
          <div className="w-24 h-24 flex items-center justify-center">
            <Image
              src="/toxapex.gif"
              alt="Toxapex"
              width={113}
              height={82}
              unoptimized
            />
          </div>
        </Badge>
      </div>
    </section>
  )
}
