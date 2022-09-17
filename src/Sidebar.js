import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function Sidebar() {
    const sugestions = [
        { name: "bad.vibes.memes", img: "assets/img/bad.vibes.memes.svg", reason: "Segue você" },
        { name: "chibirdart", img: "assets/img/chibirdart.svg", reason: "Segue você" },
        { name: "razoesparaacreditar", img: "assets/img/razoesparaacreditar.svg", reason: "Novo no Instagram" },
        { name: "adorable_animals", img: "assets/img/adorable_animals.svg", reason: "Segue você" },
        { name: "smallcutecats", img: "assets/img/smallcutecats.svg", reason: "Segue você" }
    ]
    const sugestionsList = sugestions.map((item) => <Sugestoes name={item.name} img={item.img} reason={item.reason} />)
    return (
        <div class="sidebar">

            <Usuario username='oscarfgmaia' name='Oscar' img="https://media-exp1.licdn.com/dms/image/C4D03AQEXmCDl_Frokg/profile-displayphoto-shrink_800_800/0/1569876313709?e=1668643200&v=beta&t=ej2SPNbetYe_C8awSTa1zhk7vf0n3CgHRk_9luMEnW4" />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestionsList}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}