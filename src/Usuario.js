export default function Usuario(props) {
    function editarUsuario(){
        alert('Editar name/username')
    }
    function editarFoto(){
        alert('Editar foto')
    }
    return (
        <div class="usuario">
            <img src={props.img} onClick = {editarFoto} alt={props.name}/>
            <div class="texto">
                <strong>{props.username}</strong>
                <span>
                    {props.name}
                    <ion-icon name="pencil" onClick={editarUsuario}></ion-icon>
                </span>
            </div>
        </div>
    )
}