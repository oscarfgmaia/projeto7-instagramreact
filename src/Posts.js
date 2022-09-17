import { useState } from "react"


export default function Posts(props) {

    let [nomeIcon, setIcon] = useState('bookmark-outline')
    function salvarPost() {
        if (nomeIcon === 'bookmark-outline') {
            setIcon('bookmark')
        }
        else {
            setIcon('bookmark-outline')
        }
    }


    let [likeIcon, setLike] = useState('heart-outline')
    let [curtidas, setCurtidas] = useState(props.curtidas)
    let [likeClass, setLikeClass] = useState('')
    function curtirPost() {
        if (likeIcon === 'heart-outline') {
            setLike('heart')
            setCurtidas(curtidas + 1)
            setLikeClass('vermelho')
        }
        else {
            setLike('heart-outline')
            setCurtidas(curtidas - 1)
            setLikeClass('')
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgProfile} alt={props.name} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgPost} onClick={curtirPost} alt={props.name} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={likeIcon} onClick={curtirPost} class={likeClass}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={nomeIcon} onClick={salvarPost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likedByImg} alt={props.name} />
                    <div class="texto">
                        Curtido por <strong>{props.likedBy}</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}