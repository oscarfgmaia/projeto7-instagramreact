import React from "react"

export default function Usuario(props) {
    let [username,setUsername] = React.useState(props.username)
    let [name,setName] = React.useState(props.name)
    let [img,setImg] = React.useState(props.img)
    function editarUsuario(){
        username = prompt("Username: ")
        name = prompt("Name: ")
        if(username === "" || username === null || name === "" || name === null){

        }else{
            setUsername(username)
            setName(name)
        }
    }
    function editarFoto(){
        img = prompt("Profile Picture URL: ")

        if(img === null || img === ""){
            console.log("URL Inválida")
        }
        else{
            setImg(img)
        }
    }
    return (
        <div class="usuario">
            <img src={img} onClick = {editarFoto} alt={name}/>
            <div class="texto">
                <strong>{username}</strong>
                <span>
                    {name}
                    <ion-icon name="pencil" onClick={editarUsuario}></ion-icon>
                </span>
            </div>
        </div>
    )
}
