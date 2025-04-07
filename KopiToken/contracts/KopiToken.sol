// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Pausable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract KopiToken is ERC20, ERC20Pausable, Ownable {
    uint256 public claimAmount = 50 * 10 ** decimals();
    mapping(address => bool) private hasClaimed;


    constructor(address initialOwner, address recipient)
        ERC20("KopiToken", "KOPI")
        Ownable(initialOwner)
    {
        _mint(recipient, 1000000 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // The following functions are overrides required by Solidity.

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Pausable)
    {
        super._update(from, to, value);
    }

    function claimTokens() external {
        require(!hasClaimed[msg.sender], "Already claimed");
        require(
            balanceOf(owner()) >= claimAmount,
            "Insufficient amount of tokens to claim"
        );
        hasClaimed[msg.sender] = true;
        _transfer(owner(), msg.sender, claimAmount);
    }
}