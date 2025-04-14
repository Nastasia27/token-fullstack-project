import { useState } from 'react';
import { isAddress } from 'ethers';


export default function Modal({ onClose }: { onClose: () => void }) {
    const [addressFromClient, setAddressFromClient] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [txHash, setTxHash] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);


    console.log('Address from client:', addressFromClient);

    const handleClose = () => {
        onClose();
    };

    const handleClaimTokens = async ( address: string ) => {
        console.log('Claiming tokens for address:', address);
        setIsLoading(true);
        setTxHash(null);

        try {
            const response = await fetch('https://api.defender.openzeppelin.com/actions/3f667102-8456-4d04-8607-e55203ffde28/runs/webhook/c042cacd-777b-4d82-9bbf-35045544968e/Swc6qhLLcnBCDnjqmwtdQn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(address), 
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Tokens claimed successfully:', data);

            if (data.result) {
                setTxHash(data.result);
            } else { 
                setTxHash('No hash received');
            }

        } catch (error) {
            console.error('Error claiming tokens:', error);
            setTxHash('Error claiming tokens')
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isAddress(addressFromClient)) {
            handleClaimTokens(addressFromClient);
            setErrorMessage(null);
        } else {
            console.error('Address is required');
            setErrorMessage('Invalid Etherium address')
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                {!txHash && (
                    <div>
                        <strong>Get 50 KOPI Tokens!</strong>
                        <p>
                            You can claim 50 tokens, but please note that 
                            they are available only on the Sepolia test network. 
                            This project was created for fun and is intended 
                            for testing purposes.
                        </p>
                        <form onSubmit={handleSubmit} className='modal-form'>
                            <input 
                                type="text"
                                value={addressFromClient}
                                onChange={(e) => setAddressFromClient(e.target.value)}
                                placeholder="Enter your address"
                                required
                                className="address-input" 
                            />
                            {errorMessage && (
                                <strong>{errorMessage}</strong>
                            )}
                            <button type="submit" className="claim-button">
                                {isLoading ? 'Claiming...' : 'Claim Tokens'}
                            </button>
                        </form>
                    </div>
                )}
                
                {txHash && (
                    <div>
                        <p>Transfer completed!</p>
                        <p>Transaction hash:</p>
                        <p className='account_div'>{txHash}</p>
                    </div>
                )}
            </div>
        </div>
    );
}