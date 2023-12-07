// Importa o componente Container do arquivo "Container" e a componente Image do pacote "next/image"
import { Container } from "./Container";
import Image from "next/image";

// Importa os ícones de diferentes arquivos SVG
import PhoneIcon from "@/assets/icon-phone.svg"
import SolutionsIcon from "@/assets/icon-solutions.svg"
import OptionsIcon from "@/assets/icon-options.svg"
import CardIcon from "@/assets/icon-card.svg"

// Importa a imagem do celular
import ImagePhone from "@/assets/celphone.png"

// Define um componente funcional chamado SectionServices
export function SectionServices() {
  return (
    <div>
      {/* Seção principal */}
      <section className="relative w-full h-[965px]">
        {/* Componente Container utilizado para centralizar e limitar a largura do conteúdo */}
        <Container>
          {/* Conteúdo da seção */}
          <div className="flex-1 max-w-[549px] pt-32">
            {/* Título e subtítulo */}
            <span className="block text-primary-orange text-sm font-bold uppercase mb-9">serviços exclusivos</span>
            <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>

            {/* Descrição da seção */}
            <p className="text-lg max-w-[554px] mb-16 text-second-gray">
              Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto de sua casa.
            </p>

            {/* Lista de benefícios com ícones */}
            <ul className="flex flex-col items-start gap-9">
              <li className="flex items-center gap-10 pb-9 border-b-[1px] border-opacity-gray">
                <div className="w-7 h-7 flex items-center justify-center">
                  <Image src={PhoneIcon} alt="PhoneIcon"/>
                </div>
                <p className="flex-1 text-txt-gray pr-3">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
              </li>
              {/* ... (repete o mesmo padrão para os outros itens da lista) */}
            </ul>
          </div>
        </Container>

        {/* Imagem do celular à direita da seção */}
        <div className="absolute top-0 right-0 flex items-center w-[32%] h-full bg-gray-phone">
          <Image src={ImagePhone} alt="ImagePhone" className="translate-x-[-50%]"/>
        </div>
      </section>
    </div>
  )
}
