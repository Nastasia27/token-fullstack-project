

const kopiTokenTexts = [
    "KopiToken is an experimental token created for testing and exploring blockchain technologies.",
    "It operates exclusively on the Sepolia test network and has no real monetary value.",
    "This token allows interaction with smart contracts, testing transfers, wallet integration, and other Ethereum blockchain features without the risk of losing funds.",
    "Warning: KopiToken cannot be used on the Ethereum mainnet, exchanged for real assets, or utilized for commercial purposes. It is strictly a test asset.",
    "If you need the token for testing, you can obtain it for free using the corresponding smart contract on the Sepolia network."
  ];

export default function AboutBlock () {
    return (
        <div className="block" id="about">
            <h3 className="mini_title">/ about</h3>
            <div className="block block__content">
                {kopiTokenTexts.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        </div>
    )
}