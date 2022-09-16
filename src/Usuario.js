export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.img} />
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