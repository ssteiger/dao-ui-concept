// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/draft-ERC721Votes.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MembershipNFT is
    ERC721,
    ERC721Enumerable,
    Ownable,
    EIP712,
    ERC721Votes
{
    uint256 public mintPrice = 0.05 ether;

    address payable public treasury;

    event Mint(address indexed _to, uint256 indexed _tokenId);

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // TODO: adjust this before deploying
    constructor() ERC721("MembershipNFT", "MNFT") EIP712("MembershipNFT", "1") {}

    // TODO: anyone can mint
    function safeMint(address to) public payable {
        require(msg.value == mintPrice, "Amount needs to be equal to mintPrice");

        uint256 tokenId = _tokenIdCounter.current();

        _tokenIdCounter.increment();
        _safeMint(to, tokenId);

        treasury.transfer(msg.value);
        emit Mint(to, tokenId);
    }

    function setTreasury(address payable newTreasury) public onlyOwner {
        treasury = newTreasury;
    }

    function _baseURI() internal pure override returns (string memory) {
        // TODO: set correct base uri
        return "ipfs://xxx";
    }

    // The following functions are overrides required

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        require(balanceOf(to) == 0, "Only one NFT per address allowed");
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _afterTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Votes)
    {
        super._afterTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

}
