import React from "react";

import './Main.css'

export default function Main() {
    return (
        <main className="main">
            <h2>Main</h2>
            <div className="mainImg">
                <img
                    src="https://3.bp.blogspot.com/-vxsAhZm7sOU/T_7yITJsneI/AAAAAAAAAFE/r1B2waibTsk/s1600/HDR+WALLPAPERS+%E2%84%9687+(22).jpg"
                    alt=""/>
            </div>
            <div className="userInfo">
                <div className="userInfo__row">
                    <div className="userInfo__col">User Avatar</div>
                    <div className="userInfo__col">Descriprion</div>
                </div>
            </div>
            <div className="userPosts">
                <div className="userPostsNew">New post</div>
                <div className="userPostsList">
                    <div className="userPostsItem">Post 1</div>
                    <div className="userPostsItem">Post 2</div>
                </div>
            </div>
        </main>
    )
}
