import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbarr extends Component {
    state = {
        clicked: false,
        logoText: "HostelHub" // Initial text for the logo
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    handleLogoClick = () => {
        if (this.state.logoText === "HostelHub") {
            this.setState({ logoText: "Welcome Buddy" });
        } else {
            this.setState({ logoText: "HostelHub" });
        }
    };

    render() {
        return (
            <>
                <nav className="NavbarItems">
                    {/* Change the text dynamically based on state */}
                    <h1 className="navbar-logo" onClick={this.handleLogoClick}><b>{this.state.logoText}</b></h1>
                    <div className="menu-icons" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cname} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navbarr;
