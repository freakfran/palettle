export const paletteContractConfig = {
    "address": '0xF39f79dFf95FB5767C3e1F45b7071F62B28A5F09',
    "abi": [
        {
            "type": "constructor",
            "inputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addNftToArtwork",
            "inputs": [{"name": "_artworkId", "type": "uint256", "internalType": "uint256"}, {
                "name": "_amount",
                "type": "uint256",
                "internalType": "uint256"
            }],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "approve",
            "inputs": [{"name": "to", "type": "address", "internalType": "address"}, {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "balanceOf",
            "inputs": [{"name": "owner", "type": "address", "internalType": "address"}],
            "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "buy",
            "inputs": [{"name": "_tokenId", "type": "uint256[]", "internalType": "uint256[]"}],
            "outputs": [],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "getApproved",
            "inputs": [{"name": "tokenId", "type": "uint256", "internalType": "uint256"}],
            "outputs": [{"name": "", "type": "address", "internalType": "address"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getArtworkId",
            "inputs": [{"name": "_tokenId", "type": "uint256", "internalType": "uint256"}],
            "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getArtworkTokenIds",
            "inputs": [{"name": "_artworkId", "type": "uint256", "internalType": "uint256"}],
            "outputs": [{"name": "", "type": "uint256[]", "internalType": "uint256[]"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getArtworkUri",
            "inputs": [{"name": "_artworkId", "type": "uint256", "internalType": "uint256"}],
            "outputs": [{"name": "", "type": "string", "internalType": "string"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getTokenHistory",
            "inputs": [{"name": "_tokenId", "type": "uint256", "internalType": "uint256"}],
            "outputs": [{
                "name": "",
                "type": "tuple[]",
                "internalType": "struct Palette.Bid[]",
                "components": [{"name": "bidder", "type": "address", "internalType": "address"}, {
                    "name": "bid",
                    "type": "uint256",
                    "internalType": "uint256"
                }, {"name": "amount", "type": "uint256", "internalType": "uint256"}, {
                    "name": "timestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                }]
            }],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getTokenPrice",
            "inputs": [{"name": "_tokenId", "type": "uint256", "internalType": "uint256"}],
            "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getUserTokenIds",
            "inputs": [{"name": "_user", "type": "address", "internalType": "address"}],
            "outputs": [{"name": "", "type": "uint256[]", "internalType": "uint256[]"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isApprovedForAll",
            "inputs": [{"name": "owner", "type": "address", "internalType": "address"}, {
                "name": "operator",
                "type": "address",
                "internalType": "address"
            }],
            "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "mintNewArtworks",
            "inputs": [{"name": "_amount", "type": "uint256", "internalType": "uint256"}, {
                "name": "_uri",
                "type": "string",
                "internalType": "string"
            }],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "modifyPrice",
            "inputs": [{"name": "_tokenId", "type": "uint256[]", "internalType": "uint256[]"}, {
                "name": "_price",
                "type": "uint256",
                "internalType": "uint256"
            }],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [{"name": "", "type": "string", "internalType": "string"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "ownerOf",
            "inputs": [{"name": "tokenId", "type": "uint256", "internalType": "uint256"}],
            "outputs": [{"name": "", "type": "address", "internalType": "address"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
            "inputs": [{"name": "from", "type": "address", "internalType": "address"}, {
                "name": "to",
                "type": "address",
                "internalType": "address"
            }, {"name": "tokenId", "type": "uint256", "internalType": "uint256"}],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
            "inputs": [{"name": "from", "type": "address", "internalType": "address"}, {
                "name": "to",
                "type": "address",
                "internalType": "address"
            }, {"name": "tokenId", "type": "uint256", "internalType": "uint256"}, {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
            }],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setApprovalForAll",
            "inputs": [{"name": "operator", "type": "address", "internalType": "address"}, {
                "name": "approved",
                "type": "bool",
                "internalType": "bool"
            }],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setForSell",
            "inputs": [{"name": "_tokenId", "type": "uint256[]", "internalType": "uint256[]"}, {
                "name": "_isForSell",
                "type": "bool",
                "internalType": "bool"
            }],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setPriceForSell",
            "inputs": [{"name": "_tokenId", "type": "uint256[]", "internalType": "uint256[]"}, {
                "name": "_price",
                "type": "uint256",
                "internalType": "uint256"
            }],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "getArtworksTokenIdLength",
            "inputs": [{"name": "_artworkId", "type": "uint256[]", "internalType": "uint256[]"}],
            "outputs": [{"name": "", "type": "uint256[]", "internalType": "uint256[]"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "inputs": [{"name": "interfaceId", "type": "bytes4", "internalType": "bytes4"}],
            "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "symbol",
            "inputs": [],
            "outputs": [{"name": "", "type": "string", "internalType": "string"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "tokenURI",
            "inputs": [{"name": "tokenId", "type": "uint256", "internalType": "uint256"}],
            "outputs": [{"name": "", "type": "string", "internalType": "string"}],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [{"name": "from", "type": "address", "internalType": "address"}, {
                "name": "to",
                "type": "address",
                "internalType": "address"
            }, {"name": "tokenId", "type": "uint256", "internalType": "uint256"}],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [{
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }, {"name": "approved", "type": "address", "indexed": true, "internalType": "address"}, {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ApprovalForAll",
            "inputs": [{
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }, {"name": "operator", "type": "address", "indexed": true, "internalType": "address"}, {
                "name": "approved",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Transfer",
            "inputs": [{"name": "from", "type": "address", "indexed": true, "internalType": "address"}, {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }, {"name": "tokenId", "type": "uint256", "indexed": true, "internalType": "uint256"}],
            "anonymous": false
        },
        {
            "type": "error", "name": "AlreadyTheOwner",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ArtworkNotFound",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ERC721IncorrectOwner",
            "inputs": [{"name": "sender", "type": "address", "internalType": "address"}, {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }, {"name": "owner", "type": "address", "internalType": "address"}]
        },
        {
            "type": "error",
            "name": "ERC721InsufficientApproval",
            "inputs": [{"name": "operator", "type": "address", "internalType": "address"}, {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }]
        },
        {
            "type": "error",
            "name": "ERC721InvalidApprover",
            "inputs": [{"name": "approver", "type": "address", "internalType": "address"}]
        },
        {
            "type": "error",
            "name": "ERC721InvalidOperator",
            "inputs": [{"name": "operator", "type": "address", "internalType": "address"}]
        },
        {
            "type": "error",
            "name": "ERC721InvalidOwner",
            "inputs": [{"name": "owner", "type": "address", "internalType": "address"}]
        },
        {
            "type": "error",
            "name": "ERC721InvalidReceiver",
            "inputs": [{"name": "receiver", "type": "address", "internalType": "address"}]
        },
        {
            "type": "error",
            "name": "ERC721InvalidSender",
            "inputs": [{"name": "sender", "type": "address", "internalType": "address"}]
        },
        {
            "type": "error",
            "name": "ERC721NonexistentToken",
            "inputs": [{"name": "tokenId", "type": "uint256", "internalType": "uint256"}]
        },
        {
            "type": "error",
            "name": "InsufficientFunds",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotForSell",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotMoreThanZero",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotTheOwner",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotTheSameArtwork",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotTheSameOwner",
            "inputs": []
        },
        {
            "type": "error",
            "name": "SendFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "TokenNotExist",
            "inputs": []
        }
    ]
} as const