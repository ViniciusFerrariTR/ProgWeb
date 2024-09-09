import { Button } from "primereact/button";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { useTranslation } from "react-i18next";

const Logout = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");

        i18n.changeLanguage('en');

        navigate("/login");
    }

    return (
        <>
            <Button className="botao-logout" label={t("button.exit")} onClick={logout} />
        </>
    );
}

export default Logout;
