import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"
import Posts from "./Posts"
import Stories from "./Stories"

export default function Corpo() {
    const stories = [
        { name: "9gag", img: "assets/img/9gag.svg" },
        { name: "meowed", img: "assets/img/meowed.svg" },
        { name: "barked", img: "assets/img/barked.svg" },
        { name: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg" },
        { name: "wawawicomics", img: "assets/img/wawawicomics.svg" },
        { name: "respondeai", img: "assets/img/respondeai.svg" },
        { name: "filomoderna", img: "assets/img/filomoderna.svg" },
        { name: "memeriagourmet", img: "assets/img/memeriagourmet.svg" }
    ]

    const sugestions = [
        { name: "bad.vibes.memes", img: "assets/img/bad.vibes.memes.svg", reason: "Segue você" },
        { name: "chibirdart", img: "assets/img/chibirdart.svg", reason: "Segue você" },
        { name: "razoesparaacreditar", img: "assets/img/razoesparaacreditar.svg", reason: "Novo no Instagram" },
        { name: "adorable_animals", img: "assets/img/adorable_animals.svg", reason: "Segue você" },
        { name: "smallcutecats", img: "assets/img/smallcutecats.svg", reason: "Segue você" }
    ]

    const posts = [
        {
            imgProfile: "assets/img/meowed.svg",
            name: "meowed",
            imgPost: "assets/img/gato-telefone.svg",
            likedByImg: "assets/img/respondeai.svg",
            likedBy: "respondeai",
            curtidas: 124475
        },
        {
            imgProfile: "assets/img/barked.svg",
            name: "barked",
            imgPost: "assets/img/dog.svg",
            likedByImg: "assets/img/adorable_animals.svg",
            likedBy: "adorable_animals",
            curtidas: 124478
        }

    ]
    
    const storiesList = stories.map((item) => <Stories name={item.name} img={item.img} />)
    const sugestionsList = sugestions.map((item) => <Sugestoes name={item.name} img = {item.img} reason={item.reason}/>)
    const postsList = posts.map((item) => <Posts imgProfile={item.imgProfile} name={item.name} imgPost={item.imgPost} likedByImg={item.likedByImg} likedBy={item.likedBy} curtidas={item.curtidas} />)

    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    {storiesList}
                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div class="posts">
                    {postsList}
                </div>
            </div>

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
        </div>
    )
}