function Usuario(props) {
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>{props.username}</strong>
                <span>
                    {props.name}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

function Posts(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgProfile} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likedByImg} />
                    <div class="texto">
                        Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Stories(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}

function Sugestoes(props){
    return(
        <div class="sugestao">
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <div class="nome">{props.name}</div>
                <div class="razao">{props.reason}</div>
            </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>
    )
}

export default function Corpo() {
    const stories = [{name:"9gag",img:"assets/img/9gag.svg"}]
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    
                    <Stories name="9gag" img="assets/img/9gag.svg"/>
                    <Stories name="meowed" img="assets/img/meowed.svg"/>
                    <Stories name="barked" img="assets/img/barked.svg"/>
                    <Stories name="nathanwpylestrangeplanet" img="assets/img/nathanwpylestrangeplanet.svg"/>
                    <Stories name="wawawicomics" img="assets/img/wawawicomics.svg"/>
                    <Stories name="respondeai" img="assets/img/respondeai.svg"/>
                    <Stories name="filomoderna" img="assets/img/filomoderna.svg"/>
                    <Stories name="memeriagourmet" img="assets/img/memeriagourmet.svg"/>

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div class="posts">
                    <Posts
                        imgProfile="assets/img/meowed.svg"
                        name="meowed"
                        imgPost="assets/img/gato-telefone.svg"
                        likedByImg="assets/img/respondeai.svg"
                        likedBy="respondeai"
                        curtidas="124.475"
                    />
                    <Posts
                        imgProfile="assets/img/barked.svg"
                        name="barked"
                        imgPost="assets/img/dog.svg"
                        likedByImg="assets/img/adorable_animals.svg"
                        likedBy="adorable_animals"
                        curtidas="124.478"
                    />
                </div>
            </div>

            <div class="sidebar">

                <Usuario username="oscarfgmaia" name="Oscar" />

                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    <Sugestoes name="bad.vibes.memes" img="assets/img/bad.vibes.memes.svg" reason="Segue você"/>
                    <Sugestoes name="chibirdart" img="assets/img/chibirdart.svg" reason="Segue você"/>
                    <Sugestoes name="razoesparaacreditar" img="assets/img/razoesparaacreditar.svg" reason="Novo no Instagram"/>
                    <Sugestoes name="adorable_animals" img="assets/img/adorable_animals.svg" reason="Segue você"/>
                    <Sugestoes name="smallcutecats" img="assets/img/smallcutecats.svg" reason="Segue você"/>
                    
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