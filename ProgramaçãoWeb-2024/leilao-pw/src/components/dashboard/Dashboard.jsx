import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
    const { t } = useTranslation();  // Hook para tradução

    
    const [activeAuctions, setActiveAuctions] = useState(0);
    const [lastWonItems, setLastWonItems] = useState([]);
    const [recentUsers, setRecentUsers] = useState([]);
    const [totalSales, setTotalSales] = useState(0);

    useEffect(() => {
        setActiveAuctions(15);
        setLastWonItems([
            { name: "Monitor", price: 200, img: "https://via.placeholder.com/150" },
            { name: "Teclado", price: 300, img: "https://via.placeholder.com/150" },
            { name: "Mouse", price: 150, img: "https://via.placeholder.com/150" }
        ]);
        setRecentUsers(["Vinicius", "Vitor", "Frank"]);
        setTotalSales(850);
    }, []);

    return (
        <div className="dashboard-container" style={{ padding: '20px' }}>
            <h2>{t('results-last')}</h2>

            <div className="image-grid">
                {lastWonItems.map((item, index) => (
                    <div className="card-arrematados" key={index}>
                        <div className="item-card">
                            <img src={item.img} alt={item.name} className="item-image" />
                            <h4>{item.name}</h4>
                            <p>{t('auctioned')} {t('by')}: R$ {item.price.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="info-leilao">
                <div className="dashboard-card" style={{ marginBottom: '20px' }}>
                    <h3>{t('latest-items-purchased')}</h3>
                    <ul>
                        {lastWonItems.map((item, index) => (
                            <li key={index}>"{item.name}" {t('auctioned')} {t('by')}: R${item.price}</li>
                        ))}
                    </ul>
                </div>

                <div className="dashboard-card" style={{ marginBottom: '20px' }}>
                    <h3>{t('last-registered-users')}</h3>
                    <ul>
                        {recentUsers.map((user, index) => (
                            <li key={index}>{user}</li>
                        ))}
                    </ul>
                </div>

                <div className="dashboard-card" style={{ marginBottom: '20px' }}>
                    <h3>{t('total-sales-made')}</h3>
                    <p>R$ {totalSales.toLocaleString()}</p>
                </div>

                <div className="dashboard-card" style={{ marginBottom: '20px' }}>
                    <h3>{t('active-auctions')}</h3>
                    <p>{activeAuctions}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
