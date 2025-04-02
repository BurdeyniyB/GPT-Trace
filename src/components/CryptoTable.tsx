"use client";

import { useState, useEffect } from "react";
import style from "@/styles/CryptoTable.module.css";

type CoinData = {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
};

const CryptoTable = () => {
    const [coins, setCoins] = useState<CoinData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCoinData = async () => {
            const apiUrl = process.env.NEXT_PUBLIC_API_CRYPTO;
            
            if (!apiUrl) {
                console.error("API URL is not defined in environment variables");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setCoins(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };

        fetchCoinData();
    }, []);

    return (
        <div className={style.container}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className={style.cryptoTable}>
                    <thead>
                        <tr>
                            <th>Assets</th>
                            <th>Amount</th>
                            <th>Profit</th>
                            <th>Status</th>
                            <th>Buy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((coin) => (
                            <tr key={coin.id}>
                                <td>
                                    <div className={style.coinData}>
                                        <img src={coin.image} alt={coin.name} className={style.coinImage} />
                                        <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
                                    </div>
                                </td>
                                <td>${coin.current_price.toFixed(2)}</td>
                                <td>{coin.price_change_percentage_24h > 0 ? (
                                    <span className={style.profit}>+ {coin.price_change_percentage_24h.toFixed(2)}%</span>
                                ) : (
                                    <span className={style.profit}>{coin.price_change_percentage_24h.toFixed(2)}%</span>
                                )}
                                </td>
                                <td>
                                    {coin.price_change_percentage_24h > 0 ? (
                                        <span>Profit</span>
                                    ) : (
                                        <span>Loss</span>
                                    )}
                                </td>
                                <td>
                                    <button className={style.buyButton}>Buy <span>({coin.symbol.toUpperCase()})</span></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CryptoTable;
