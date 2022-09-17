import { useState } from "react"


function Post(props) {
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
    let [curtidas, setCurtidas] = useState(props.curtidas.toLocaleString('pt-BR'))
    let [likeClass, setLikeClass] = useState('')
    function curtirPost() {
        curtidas = curtidas.toString().replace(".","")
        curtidas = parseInt(curtidas)
        if (likeIcon === 'heart-outline') {
            setLike('heart')
            curtidas++
            setCurtidas(curtidas.toLocaleString('pt-BR'))
            setLikeClass('vermelho')
            console.log('if: '+curtidas)
        }
        else {
            setLike('heart-outline')
            curtidas--
            setCurtidas(curtidas.toLocaleString('pt-BR'))
            setLikeClass('')
            console.log('else: '+curtidas)
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

export default function Posts() {
    const posts = [
        {
            imgProfile: "assets/img/meowed.svg",
            name: "meowed",
            imgPost: "assets/img/gato-telefone.svg",
            likedByImg: "assets/img/respondeai.svg",
            likedBy: "respondeai",
            curtidas: 15774
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
    const postsList = posts.map((item) => <Post imgProfile={item.imgProfile} name={item.name} imgPost={item.imgPost} likedByImg={item.likedByImg} likedBy={item.likedBy} curtidas={item.curtidas} />)

    return postsList
}