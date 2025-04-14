// import { VercelRequest, VercelResponse } from '@vercel/node'
// import { DefenderRelayProvider, DefenderRelaySigner } from '@openzeppelin/defender-relay-client/lib/ethers'
// import { ethers } from 'ethers'

// // Ці ключі краще винести в змінні оточення на Vercel
// const credentials = {
//   apiKey: process.env.DEFENDER_API_KEY!,
//   apiSecret: process.env.DEFENDER_API_SECRET!,
// }

// const handler = async (req: VercelRequest, res: VercelResponse) => {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' })
//   }

//   const { recipient } = req.body

//   if (!recipient || !ethers.utils.isAddress(recipient)) {
//     return res.status(400).json({ error: 'Invalid recipient address' })
//   }

//   const provider = new DefenderRelayProvider(credentials)
//   const signer = new DefenderRelaySigner(credentials, provider, { speed: 'fast' })

//   // Твій контракт і ABI
//   const contractAddress = '0x...' // заміни на свій адрес
//   const abi = [ 
//     'function transfer(address to, uint256 amount) public returns (bool)'
//   ]
//   const contract = new ethers.Contract(contractAddress, abi, signer)

//   try {
//     const tx = await contract.transfer(recipient, ethers.utils.parseUnits('10', 18)) // наприклад, 10 токенів
//     await tx.wait()
//     return res.status(200).json({ hash: tx.hash })
//   } catch (err: any) {
//     console.error(err)
//     return res.status(500).json({ error: 'Transfer failed' })
//   }
// }

// export default handler