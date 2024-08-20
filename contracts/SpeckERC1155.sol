// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SpeckERC1155 is Ownable, ERC1155Pausable, ERC1155Burnable {
    uint256 public immutable expiresAt;
    string public name;

    constructor(
        address _initialOwner,
        string memory _name,
        string memory _uri,
        uint256 _expiresAt
    ) Ownable(_initialOwner) ERC1155(_uri) {
        expiresAt = _expiresAt;
        name = _name;
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        require(block.timestamp < expiresAt, "Lock: expired");
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        require(block.timestamp < expiresAt, "Lock: expired");
        _mintBatch(to, ids, amounts, data);
    }

    /**
     * @dev See {ERC1155-_update}.
     *
     * Requirements:
     *
     * - the contract must not be paused.
     */
    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal override(ERC1155Pausable, ERC1155) whenNotPaused {
        ERC1155Pausable._update(from, to, ids, values);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
}
