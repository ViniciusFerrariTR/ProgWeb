import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () =>{
    const { t, i18n } = useTranslation();
    return(
        <div className="footer">
            <p>&copy; 2024 LanceTech. {t("rights")}</p>
            <p>{t("contact-footer")}: contato@lancetech.com | {t("phone")}: (44) 99753-1577</p>
            <p>{t("address")}: Av. José Felipe Tequinha, 1400  - Paranavai, PR</p>
        </div>
    );

}
export default Footer;