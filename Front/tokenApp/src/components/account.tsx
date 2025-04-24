import { useAccount, useDisconnect, useEnsName, useBalance } from 'wagmi'
import Button from './MainButton'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })

  const { data: balanceNative } = useBalance({
    address,
  })

  const {data: balanceKopiToken} = useBalance({ 
    address,
    token: '0x30783ACe8d5746956c6C3D3E50d7A095726f852E',

  })

  return (
    <div className=''>
      <div className='account_wrapper'>
        <div >
          <h3>Address:</h3>
          <div className='account_div'>
            {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
          </div>
        </div>
        <div>
          <h3>Balance:</h3>
          {balanceNative && <div> {balanceNative.formatted} {balanceNative.symbol}</div>}
          {balanceKopiToken && <div> {balanceKopiToken.formatted} {balanceKopiToken.symbol}</div>}
        </div>
        <Button text='Disconnect' onClick={() => disconnect()} type='dark'/>
      </div>
    </div>
  )
}