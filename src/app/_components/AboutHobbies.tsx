import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export function AboutHobbies() {
  return (
    <>
      <div className="flex flex-col gap-5 mb-5">
        <h2 className="text-2xl font-bold">Like && !Like:</h2>
        <div>
          <table className="w-full border-collapse table-auto shadow-custom-light">
            <thead>
              <tr>
                <th className="w-1/2 p-2 border border-border">
                  <Badge
                    variant="outline"
                    className="ml-2 rounded-full p-1 shadow-custom-light hover:bg-primary transition duration-300"
                  >
                    <Image
                      src="/emojis/memoji-like.png"
                      alt="like"
                      width="50"
                      height="50"
                    />
                  </Badge>
                </th>
                <th className="w-1/2 p-2 border border-border">
                  <Badge
                    variant="outline"
                    className="ml-2 rounded-full p-1 shadow-custom-light hover:bg-primary transition duration-300"
                  >
                    <Image
                      src="/emojis/memoji-dislike.png"
                      alt="dislike"
                      width="50"
                      height="50"
                    />
                  </Badge>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Gatos <span className="text-xs opacity-60">(Tenho 3)</span>
                </td>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Filmes com animais{' '}
                  <span className="text-xs opacity-60">
                    (Tipo &ldquo;Marley e Eu&rdquo;)
                  </span>
                </td>
              </tr>
              <tr>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Coca-Cola Zero
                </td>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Café <span className="text-xs opacity-60">(Mimimimimi)</span>
                </td>
              </tr>
              <tr>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Culinária oriental
                </td>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Doces
                </td>
              </tr>
              <tr>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Carros{' '}
                  <span className="text-xs opacity-60">
                    (Tenho um Lancer envenenado)
                  </span>
                </td>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Lavar o carro
                </td>
              </tr>
              <tr>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Crystal Castles{' '}
                  <span className="text-xs opacity-60">(Escute de fone)</span>
                </td>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Filmes dublados
                </td>
              </tr>
              <tr>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Video-games{' '}
                  <span className="text-xs opacity-60">
                    (Jogos de combate em turnos e rpg)
                  </span>
                </td>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Animes{' '}
                  <span className="text-xs opacity-60">
                    (Contraditório, não?)
                  </span>
                </td>
              </tr>
              <tr>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Fazer churrasco
                </td>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Queimar o pão de alho
                </td>
              </tr>
              <tr>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300">
                  Futebol{' '}
                  <span className="text-xs opacity-60">
                    (VAMO SÃO PAULO!!!)
                  </span>
                </td>
                <td className="w-1/2 p-2 border border-border hover:bg-secondary transition duration-300 line-through">
                  Corinthians e Palmeiras
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
