import './styles/PostMain.css';
import './styles/Header.css'
import { Header } from "./Hader";
import { NavBar } from "./NavBar";
import { PostsMain } from "./PostsMain";
import { useEffect, useState } from "react";
import { getAxios } from "./Api/get_api";


function HomePage () {

    const [postData, setPostData] = useState ([]);

    const urlApi = '/posts';

    const getPost = ()=> {
        getAxios(urlApi)
        .then((result) => setPostData(result.data))
    }
    useEffect(() => {
        getPost();
    }, [])

    return(
        <div className="general_grid">
            <Header/>
            <NavBar/>
            <PostsMain post = {postData}/>
        </div>
    )
}
export {HomePage};