function salvarPost(){
    alert('Salvar post - alterar de outline para fill')
}

function curtirPost(){
    //if - post curtido descurtir
    //else - curtir
    //botão de curtida deverá ficar preenchido vermelho para curtido ou sem preenchimento se não estiver curtido
    //se curtir tem que aumentar a quantidade de likes no post
    alert('Curtir o post')
}
export default function Posts(props) {

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
                <img src={props.imgPost} onClick={curtirPost}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline" onClick={curtirPost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline" onClick={salvarPost}></ion-icon>
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