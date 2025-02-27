import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("KopiToken", (m) => {
    
    
    const recipient = m.getAccount(0);
    const initialOwner = m.getAccount(1);
    const token = m.contract("KopiToken", [initialOwner, recipient]);

  return { token };
});
