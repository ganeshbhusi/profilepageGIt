import React, { Component } from 'react';
import '../styles/rightpane.css'

class RightPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            repos: [],
            languages: [],
            type: ["All", "Sources", "Forks", "Archived", "Mirrors"],
            search: '',
            searchType: '',
            searchLanguage: '',
            showDiv1: false,
            showDiv2: false
        }
    }

    componentDidMount() {

        fetch('https://api.github.com/users/supreetsingh247/repos')
            .then(response => response.json())
            .then(response => this.setState({ repos: response }))
            .then(res =>
                this.setState({ languages: this.state.repos.map(item => item.language).filter((item, idx, arr) => arr.indexOf(item) == idx && arr.indexOf(item) != "") })
            )
            .catch(err => console.error(err))
    }

    searchRepo(event) {
        /*If type array contains type string*/
        if (this.state.type.includes(event.target.value)) {
            this.setState({ searchType: event.target.value.substr(0) });
        }
        /*If languages array contains language string*/
        else if (this.state.languages.includes(event.target.value)) {
            this.setState({ searchLanguage: event.target.value.substr(0) });
        }
        /*If data contains project name*/
        else {
            this.setState({ search: event.target.value.substr(0) });
        }
    }

    searchRepo1(values) {
        /*If type array contains type string*/
        if (this.state.type.includes(values)) {
            this.setState({ searchType: values.substr(0) });
        }
        /*If languages array contains language string*/
        else if (this.state.languages.includes(values)) {
            this.setState({ searchLanguage: values.substr(0) });
        }
        /*If data contains project name*/
        else {
            this.setState({ search: values.substr(0) });
        }

        this.setState({ showDiv1: false, showDiv2: false })
    }


    clearSearch(event) {
        this.setState({ search: "", searchType: "All", searchLanguage: "All" });
    }

    render() {
        /*Normal Search filtering using project name*/
        let filteredRepos = this.state.repos.filter(
            (item) => {
                return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            });
        /*Search filtering using Type and Language along with project name*/
        let filteredReposType = this.state.repos.filter(
            (item) => {
                /*If Language is selected*/
                if (this.state.searchLanguage.length > 0) {
                    if (this.state.searchType === "All" && item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 && item.language === this.state.searchLanguage) {
                        return filteredRepos;
                    }
                    if (this.state.searchType === "Forks" && item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 && item.language === this.state.searchLanguage) {
                        return item.fork === true;
                    }
                    if (this.state.searchType === "Sources" && item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 && item.language === this.state.searchLanguage) {
                        return item.has_issues === true;
                    }
                    if (this.state.searchType === "Archived" && item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 && item.language === this.state.searchLanguage) {
                        return item.archived === true;
                    }
                    if (this.state.searchType === "Mirrors" && item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 && item.language === this.state.searchLanguage) {
                        return item.mirror_url !== null;
                    }
                    if (item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 && item.language === this.state.searchLanguage) {
                        return filteredRepos;
                    }
                } else { /*Except language remaining selected*/
                    console.log("Type");
                    if (this.state.searchType === "Forks" && item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                        return item.fork === true;
                    }
                    if (this.state.searchType === "All" && item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                        return filteredRepos;
                    }
                    if (this.state.searchType === "Sources" && item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                        return item.has_issues === true;
                    }
                    if (this.state.searchType === "Archived" && item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                        return item.archived === true;
                    }
                    if (this.state.searchType === "Mirrors" && item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                        return item.mirror_url !== null;
                    }
                }
            });
        return (
            <div>
                <div>
                    <div className="searchPanel">
                        <input type="text"
                            value={this.state.search}
                            onChange={this.searchRepo.bind(this)}
                            placeholder="Find a repository..."
                            className="search-input" />
                        <button className="search-type1" onClick={(e) => {
                            this.setState({ showDiv1: !this.state.showDiv1, showDiv2: false })
                            var left = e.clientX + "px";
                            var top = e.clientY + 30 + "px";

                            var div = document.getElementsByClassName("search-type1-div")[0];
                            if (div) {
                                div.style.left = left;
                                div.style.top = top;
                            }
                            return false;

                        }}>Type: <b>{this.state.searchType || 'All'} &#x25bc;</b></button>
                        {
                            this.state.showDiv1 && (
                                <div className="search-type1-div">
                                    <ul id="dropdown1">
                                        <li className="activeButton">Select type</li>
                                        <li onClick={() => this.searchRepo1("All")}>All</li>
                                        <li onClick={() => this.searchRepo1("Sources")}>Sources</li>
                                        <li onClick={() => this.searchRepo1("Forks")}>Forks</li>
                                        <li onClick={() => this.searchRepo1("Archived")}>Archived</li>
                                        <li onClick={() => this.searchRepo1("Mirrors")}>Mirrors</li>
                                    </ul>
                                </div>
                            )
                        }

                        <button className="search-type1" onClick={(e) => {
                            this.setState({ showDiv2: !this.state.showDiv2, showDiv1: false })
                            var left = e.clientX + "px";
                            var top = e.clientY + 30 + "px";

                            var div = document.getElementsByClassName("search-type2-div")[0];
                            if (div) {
                                div.style.left = left;
                                div.style.top = top;
                            }
                            return false;

                        }}>Language: <b>{this.state.searchLanguage || 'All'} &#x25bc;</b></button>
                        {
                            this.state.showDiv2 && (
                                <div className="search-type2-div">
                                    <ul id="dropdown1">
                                        <li className="activeButton">Select Language</li>
                                        <li onClick={() => this.searchRepo1("All")}>All</li>
                                        {
                                            this.state.languages.map(language => (
                                                <li onClick={() => this.searchRepo1(language)}>{language}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }

                        {/*<select className="search-type"
                            value={this.state.searchType}
                            onChange={this.searchRepo.bind(this)}>
                            <option hidden>Type: All</option>
                            {this.state.type.map(item => (
                                <option value={item}>{item}</option>
                            ))}
                            </select> */}

                        {/*<select className="search-language"
                            value={this.state.searchLanguage}
                            onChange={this.searchRepo.bind(this)}>
                            <option hidden>Language: All</option>
                            {this.state.languages.map(item => (
                                <option value={item}>{item}</option>
                            ))}
                            </select>*/}
                    </div>

                    <div className="resultPanel">
                        {/*Only for search input*/}
                        {this.state.search.length > 0 && !this.state.searchType.length > 0 && !this.state.searchLanguage.length > 0 &&
                            <li className="searchResults"><b>{filteredRepos.length}</b> results for repositories matching <b> {this.state.search} </b>
                                <button className="clearFilter" onClick={this.clearSearch.bind(this)}>&#9746; Clear filter</button> </li>
                        }

                        {/*Full Search*/}
                        {this.state.search.length > 0 && this.state.searchType.length > 0 && this.state.searchLanguage.length > 0 &&
                            <li className="searchResults"><b>{filteredReposType.length}</b> results for <b> {this.state.searchType} </b> repositories matching
        <b> {this.state.search} </b> written in
        <b> {this.state.searchLanguage} </b>
                                <button className="clearFilter" onClick={this.clearSearch.bind(this)}>&#9746; Clear filter</button></li>
                        }

                        {/*Search Results with search type and language*/}
                        {this.state.searchType.length > 0 && this.state.searchLanguage.length > 0 && filteredReposType.map(item => (
                            <li className="search-list" key={item.id}>
                                <p><a href={item.html_url} target="_blank">{item.name}</a></p>

                                {
                                    item.description && (
                                        <small style={{ fontSize: 14 }}>
                                            {item.description}
                                            <br />
                                        </small>
                                    )
                                }
                                <p>
                                    {item.language && (<small className="repos-lang"><span className="showBall"></span> {item.language}</small>)}
                                    {item.license && (
                                        <small>{item.license.name}</small>
                                    )}
                                    {
                                        item.stargazers_count > 0 && (
                                            <small>&#x2605; {item.stargazers_count}</small>
                                        )
                                    }

                                    {
                                        item.watchers_count > 0 && (
                                            <small>&#9739; {item.watchers_count}</small>
                                        )
                                    }
                                    <small>Updated on {new Intl.DateTimeFormat('en-GB', {
                                        month: 'short',
                                        day: '2-digit',
                                        year: 'numeric',
                                    }).format(new Date(item.updated_at))}</small>
                                </p>
                            </li>
                        ))}

                        {/*Search Results with only search type*/}
                        {this.state.searchType.length > 0 && !this.state.searchLanguage.length > 0 && filteredReposType.map(item => (
                            <li className="search-list" key={item.id}>
                                <p><a href={item.html_url} target="_blank">{item.name}</a></p>

                                {
                                    item.description && (
                                        <small style={{ fontSize: 14 }}>
                                            {item.description}
                                            <br />
                                        </small>
                                    )
                                }
                                <p>
                                    {item.language && (<small className="repos-lang"><span className="showBall"></span> {item.language}</small>)}
                                    {item.license && (
                                        <small>{item.license.name}</small>
                                    )}
                                    {
                                        item.stargazers_count > 0 && (
                                            <small>&#x2605; {item.stargazers_count}</small>
                                        )
                                    }

                                    {
                                        item.watchers_count > 0 && (
                                            <small>&#9739; {item.watchers_count}</small>
                                        )
                                    }
                                    <small>Updated on {new Intl.DateTimeFormat('en-GB', {
                                        month: 'short',
                                        day: '2-digit',
                                        year: 'numeric',
                                    }).format(new Date(item.updated_at))}</small>
                                </p>
                            </li>
                        ))}

                        {/*Search Results with only search language*/}
                        {!this.state.searchType.length > 0 && this.state.searchLanguage.length > 0 && filteredReposType.map(item => (
                            <li className="search-list" key={item.id}>
                                <p><a href={item.html_url} target="_blank">{item.name}</a></p>

                                {
                                    item.description && (
                                        <small style={{ fontSize: 14 }}>
                                            {item.description}
                                            <br />
                                        </small>
                                    )
                                }
                                <p>
                                    {item.language && (<small className="repos-lang"><span className="showBall"></span> {item.language}</small>)}
                                    {item.license && (
                                        <small>{item.license.name}</small>
                                    )}
                                    {
                                        item.stargazers_count > 0 && (
                                            <small>&#x2605; {item.stargazers_count}</small>
                                        )
                                    }

                                    {
                                        item.watchers_count > 0 && (
                                            <small>&#9739; {item.watchers_count}</small>
                                        )
                                    }
                                    <small>Updated on {new Intl.DateTimeFormat('en-GB', {
                                        month: 'short',
                                        day: '2-digit',
                                        year: 'numeric',
                                    }).format(new Date(item.updated_at))}</small>
                                </p>
                            </li>
                        ))}

                        {/*Search Results with only search input*/}
                        {!this.state.searchType.length > 0 && !this.state.searchLanguage.length > 0 && filteredRepos.map(item => (
                            <li className="search-list" key={item.id}>
                                <p><a href={item.html_url} target="_blank">{item.name}</a></p>

                                {
                                    item.description && (
                                        <small style={{ fontSize: 14 }}>
                                            {item.description}
                                            <br />
                                        </small>
                                    )
                                }
                                <p>
                                    {item.language && (<small className="repos-lang"><span className="showBall"></span> {item.language}</small>)}
                                    {item.license && (
                                        <small>{item.license.name}</small>
                                    )}
                                    {
                                        item.stargazers_count > 0 && (
                                            <small>&#x2605; {item.stargazers_count}</small>
                                        )
                                    }

                                    {
                                        item.watchers_count > 0 && (
                                            <small>&#9739; {item.watchers_count}</small>
                                        )
                                    }
                                    <small>Updated on {new Intl.DateTimeFormat('en-GB', {
                                        month: 'short',
                                        day: '2-digit',
                                        year: 'numeric',
                                    }).format(new Date(item.updated_at))}</small>
                                </p>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default RightPanel;
