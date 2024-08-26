import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img alt="logo" src={require("../../components/imagens/logo-lancetech.png")} style={{ height: '150px' }} />
            </div>
        </div>
    );
}

export default Header;
