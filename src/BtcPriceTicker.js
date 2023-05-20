import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BtcPriceTicker = () => {
    const [btcPrice, setBtcPrice] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
            setBtcPrice(response.data.bitcoin.usd);
        };

        fetchPrice();
        const intervalId = setInterval(fetchPrice, 60000); // fetch price every minute

        // cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h2>Bitcoin Price Ticker</h2>
            <p>Current BTC/USD Price: ${btcPrice}</p>
        </div>
    );
};

export default BtcPriceTicker;
