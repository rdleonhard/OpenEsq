// FAQ.js
import React from 'react';

const FAQ = () => (
  <div className="faq">
    <h2>Frequently Asked Questions</h2>
    <p>Q: Do you advise projects outside of the Ethereum ecosystem?</p>
    <p>A: No.</p>
    <p>Why not? Are you an ETH maxi?</p>
    <p>Crypto projects tend to involve high amounts of regulatory risk, especially in the are of securities law. We believe this risk is higher in cases where the underlying smart contract platform token is declared a security. Ethereum is in a unique position where there is some insight into the belief that its underlying token is "sufficiently decentralized" so that it isn't considered a security by relevant regulatory agencies. This is why we only advise projects that are Ethereum-based.</p>
    <p>Do you advise non-crypto clients?</p>
    <p>No.</p>
    <p>Q: Can you represent our DAO?</p>
    <p>A: Lawyers have to be very specific about who it is they're representing. So if it's an actual DAO, with anonymous members, then the answer is likely "no". However, we do represent developers and legal entities building on DAOs. We can also help people form legal entity to conduct their business.</p>
  
    <footer className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} OpenEsquire. All rights reserved.</p>
        <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
      </footer>
  </div>
);

export default FAQ;
