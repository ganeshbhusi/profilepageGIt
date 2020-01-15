import React, { useState } from 'react'
import '../styles/headerstyles.css'

const Header = () => {
    const [showRespMenu, setShowRespMenu] = useState(false)

    return (
        <div className="mainheader">
            <div className="responsiveDiv">
                <span className="menuToggle" onClick={() => {
                setShowRespMenu(!showRespMenu)
            }}>
                    &#9776;
                </span>
                {
                    showRespMenu && (
                        <div className="menuDivision">
                            <input type="text" className="inputOne2" placeholder="Search or jump to..." />
                            <hr />
                            <a href="https://github.com" className="linksHeader">Pull requests</a>
                            <hr />
                            <a href="https://github.com" className="linksHeader">Issues</a>
                            <hr />
                            <a href="https://github.com" className="linksHeader">Marketplace</a>
                            <hr />
                            <a href="https://github.com" className="linksHeader">Explore</a>
                            <hr />
                            <i></i>
                        </div>
                    )
                }
            </div>
            <div className="iconDiv">
                <a href="https://github.com">
                    <svg style={{ marginLeft: "20px" }} className="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
            </div>
            <span className="notificationIconResp">
                <a href="https://github.com/notifications">
                    <svg className="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fillRule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
                </a>
            </span>
            <input type="text" className="inputOne" placeholder="Search or jump to..." />
            <div className="navigationNames">
                <a href="https://github.com" className="linksHeader">Pull requests</a>
                <a href="https://github.com" className="linksHeader">Issues</a>
                <a href="https://github.com" className="linksHeader">Marketplace</a>
                <a href="https://github.com" className="linksHeader">Explore</a>
            </div>

            <div className="rightNavigation">
                <a href="https://github.com/notifications">
                    <svg className="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fillRule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
                </a>
                <div className="tooltip">
                    <svg style={{ paddingLeft: 10 }} className="octicon octicon-plus" version="1.1" width="12" height="16" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path>
                    </svg>
                    <div className="bottom">
                        <a href="https://github.com" className="href_two">New Repository</a><br />
                        <a href="https://github.com" className="href_two">Import Repository</a><br />
                        <a href="https://github.com" className="href_two">New Gist</a><br />
                        <a href="https://github.com" className="href_two">New organization</a><br />
                        <a href="https://github.com" className="href_two">New project</a><br />
                        <i></i>
                    </div>
                    <span> &#x25bc;</span>
                </div>
                <img className="image_and_caret" src="https://avatars3.githubusercontent.com/u/33048355?s=40&v=4" alt="img" /> <span>&#x25bc;</span>
            </div>
        </div>
    )
}

export default Header
