import Posts from "./Posts"
import Stories from "./Stories"
import Sidebar from "./Sidebar"

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

    const storiesList = stories.map((item) => <Stories name={item.name} img={item.img} />)

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

            <Sidebar />

        </div>
    )
}
