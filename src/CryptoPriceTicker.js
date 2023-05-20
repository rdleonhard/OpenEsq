import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const CryptoPriceTicker = () => {
    const [ethPrice, setEthPrice] = useState(null);
    const [btcPrice, setBtcPrice] = useState(null);

    useEffect(() => {
        const fetchPrices = async () => {
            const ethResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
            setEthPrice(ethResponse.data.ethereum.usd);

            const btcResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
            setBtcPrice(btcResponse.data.bitcoin.usd);
        };

        fetchPrices();
        const intervalId = setInterval(fetchPrices, 60000); // fetch prices every minute

        // cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="ticker-text">
            <h5>Crypto Price Ticker</h5>
            <p>Current ETH/USD Price: ${ethPrice}</p>
            <p>Current BTC/USD Price: ${btcPrice}</p>
            <p>Data provided by <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">CoinGecko</a></p>
        </div>
    );
};

export default CryptoPriceTicker;
