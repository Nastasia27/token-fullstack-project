import { AccountBlock } from "./AccountBlock"
import {WalletOptions} from "../../wallet-options"
import { useAccount } from 'wagmi';

function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return <AccountBlock />
    return <WalletOptions />
  }

export default function PageAccount() {
    return(
        <div className='grid'>
            <div className="block">
                <ConnectWallet />
            </div>
        </div>
    )
}