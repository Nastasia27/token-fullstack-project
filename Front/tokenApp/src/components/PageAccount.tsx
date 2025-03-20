import { Account } from "./account"
import {WalletOptions} from "../../wallet-options"
import { useAccount } from 'wagmi';

function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return <Account />
    return <WalletOptions />
  }

export default function PageAccount() {
    return(
        <div className='grid'>
            <div style={{paddingTop: '10rem'}}></div>
            <div className="account_wrapper ">
                <ConnectWallet />
            </div>
        </div>
    )
}