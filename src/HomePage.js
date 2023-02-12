import { Header } from "./Hader";
import { NavBar } from "./NavBar";
import { PostsMain } from "./PostsMain";
// aqui van las peticiones a axios



function HomePage () {
    return(
        <div className="general_grid">
            <Header/>
            <NavBar/>
            <PostsMain/>
        </div>
    )
}
export {HomePage};