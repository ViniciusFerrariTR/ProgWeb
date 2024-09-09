import React from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { useTranslation } from 'react-i18next';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Estilo PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilo PrimeReact
import 'primeicons/primeicons.css'; // Ícones PrimeReact
import './Idioma.css';

const Idioma = () => {
    const { i18n } = useTranslation();
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Itens do menu cascata
    const items = [
        {
            label: 'English',
            icon: 'pi pi-globe',
            command: () => changeLanguage('en')
        },
        {
            label: 'Português',
            icon: 'pi pi-globe',
            command: () => changeLanguage('pt')
        }
    ];

    return (
        <div>
            {/* Botão pequeno e outlined */}
            <SplitButton 
                label=""
                icon="pi pi-globe"
                model={items}
                severity="primary"
                className="p-button-outlined color-t"
            />
        </div>
    );
}

export default Idioma;
