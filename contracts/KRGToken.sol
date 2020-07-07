pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KRGToken is ERC20 {
    constructor() ERC20("KRGToken", "KRG") public {
        _mint(msg.sender, 10000000 * (10 ** uint256(decimals())));
    }
}