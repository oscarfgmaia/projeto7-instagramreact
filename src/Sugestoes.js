function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt={props.name} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {

    const sugestions = [
        { name: "bad.vibes.memes", img: "assets/img/bad.vibes.memes.svg", reason: "Segue você" },
        { name: "chibirdart", img: "assets/img/chibirdart.svg", reason: "Segue você" },
        { name: "razoesparaacreditar", img: "assets/img/razoesparaacreditar.svg", reason: "Novo no Instagram" },
        { name: "adorable_animals", img: "assets/img/adorable_animals.svg", reason: "Segue você" },
        { name: "smallcutecats", img: "assets/img/smallcutecats.svg", reason: "Segue você" }
    ]
    const sugestionsList = sugestions.map((item) => <Sugestao name={item.name} img={item.img} reason={item.reason} />)
    return sugestionsList

}