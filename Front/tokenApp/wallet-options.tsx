import * as React from 'react'
import { Connector, useConnect } from 'wagmi'
import Button from './src/components/button'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
  ))
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector
  onClick: () => void
}) {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return (
    // <button disabled={!ready} onClick={onClick}>
    //   {connector.name}
    // </button>
    <Button text={connector.name} type='dark' onClick={onClick}/>
  )
}