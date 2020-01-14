import React, { Component } from 'react';
import '../styles/leftpane.css'
import RightPanel from './rightPanel';

class LeftPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: null,
            fullname: null,
            profile_name: null,
            profile_image: null,
            bio: null,
            company: null,
            location: null,
            email: 'Not Listed',
            public_repos: 0,
            public_gists: 0,
            followers: 0,
            following: 0,
            loadingPage: false,
            dotsInLoading: ""
        }
    }

    componentDidMount() {
        this.setState({ loadingPage: true })
        document.onscroll = function () {
            if (window.innerHeight + window.scrollY > 1000) {
                document.getElementsByClassName('leftNav')[0].style.display = 'none';
                document.getElementsByClassName('leftNav1')[0].style.display = 'block';
            } else {
                document.getElementsByClassName('leftNav')[0].style.display = 'block';
                document.getElementsByClassName('leftNav1')[0].style.display = 'none';
            }
        }

        fetch('https://api.github.com/users/supreetsingh247')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    profile: response.avatar_url,
                    fullname: response.name,
                    profile_name: response.login,
                    bio: response.bio,
                    company: response.company,
                    location: response.location,
                    public_repos: response.public_repos,
                    public_gists: response.public_gists,
                    followers: response.followers,
                    following: response.following,
                    loadingPage: false
                })
                document.title=this.state.profile_name +" ("+this.state.fullname+")"
            })
            .catch(err => { console.error(err); this.setState({ loadingPage: false }) })
    }

    render() {
        if (this.state.loadingPage) {
            return (
                <div className="loadingController">
                    Loading.....
                </div>
            )
        }
        return (
            <div className="maindiv">
                <div className="leftNav1">
                    <img className="profile_image1" src={this.state.profile} alt="supreet singh" />&nbsp;&nbsp;
                    <span className="spanclass1">supreetsingh247&nbsp;&nbsp; <button className="buttonfollow1">Follow</button></span>
                </div>
                <div className="leftNav">
                    <div className="imagediv">
                        <img className="profile_image" src={this.state.profile} alt="supreet singh" />
                    </div>
                    <div style={{ textAlign: "left" }}>
                        <div className="nameSection">
                            <br />
                            <span className="main_name">{this.state.fullname}</span>
                            <br />
                            <span className="main_id">{this.state.profile_name}</span>
                            <br />
                            <button className="buttonFollow">Follow</button>
                        </div>

                        <div className="bioData">
                            <p>{this.state.bio}</p>
                            <p>
                                <svg className="octicon octicon-organization" viewBox="0 0 16 10" version="1.1" width="16" height="16" aria-hidden="true">
                                    <path style={{ fill: "gray" }} fillRule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"></path>
                                </svg>
                                &nbsp;&nbsp;{this.state.company}
                            </p>
                            <p>
                                <svg className="octicon octicon-location" viewBox="0 0 12 10" version="1.1" width="12" height="16" aria-hidden="true">
                                    <path style={{ fill: "gray" }} fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
                                </svg>
                                &nbsp;&nbsp;{this.state.location}
                            </p>
                            <p><svg className="octicon octicon-mail" viewBox="0 0 14 10" version="1.1" width="14" height="16" aria-hidden="true">
                                <path style={{ fill: "gray" }} fillRule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
                                &nbsp;&nbsp;{this.state.email}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rightNav">
                    <div className="rightTopMenu">

                        <ul id="menu">
                            <li>
                                Overview
                            </li>
                            <li className="active" style={{ borderBottomColor: "#e36209", fontWeight: "bolder", color: "black" }}>
                                Repositories<span>{this.state.public_repos}</span>
                            </li>
                            <li>
                                Projects<span>{this.state.public_gists}</span>
                            </li>
                            <li>
                                Stars<span>7</span>
                            </li>
                            <li>
                                Followers<span>{this.state.followers}</span>
                            </li>
                            <li>
                                Following<span>{this.state.following}</span>
                            </li>
                        </ul>
                        <hr />
                    </div>

                    {/* <div> */}
                    <RightPanel />
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default LeftPanel;
