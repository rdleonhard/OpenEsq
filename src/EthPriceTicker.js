import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EthPriceTicker = () => {
    const [ethPrice, setEthPrice] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
            setEthPrice(response.data.ethereum.usd);
        };

        fetchPrice();
        const intervalId = setInterval(fetchPrice, 60000); // fetch price every minute

        // cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h2>Ethereum Price Ticker</h2>
            <p>Current ETH/USD Price: ${ethPrice}</p>
        </div>
    );
};

export default EthPriceTicker;
