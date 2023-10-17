"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[7285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?s.createElement(h,i(i({ref:t},p),{},{components:n})):s.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Node Service",a={unversionedId:"api/node_service",id:"api/node_service",title:"Node Service",description:"RPC Messages",source:"@site/docs/api/node_service.md",sourceDirName:"api",slug:"/api/node_service",permalink:"/docs/api/node_service",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/api/node_service.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apiSidebar",previous:{title:"Blockchain Service",permalink:"/docs/api/blockchain_service"},next:{title:"Wallet Service",permalink:"/docs/api/wallet_service"}},l={},c=[{value:"RPC Messages",id:"rpc-messages",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-service"},"Node Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"service NodeService {\n    // GetHostInfo returns info about the libp2p host\n    rpc GetHostInfo(GetHostInfoRequest) returns (GetHostInfoResponse) {}\n\n    // GetNetworkKey returns the node's network private key\n    rpc GetNetworkKey(GetNetworkKeyRequest) returns (GetNetworkKeyResponse) {}\n\n    // GetPeers returns a list of peers that this node is connected to\n    rpc GetPeers(GetPeersRequest) returns (GetPeersResponse) {}\n\n    // AddPeer attempts to connect to the provided peer\n    rpc AddPeer(AddPeerRequest) returns (AddPeerResponse) {}\n\n    // BlockPeer blocks the given peer for the provided time period\n    rpc BlockPeer(BlockPeerRequest) returns (BlockPeerResponse) {}\n\n    // UnblockPeer removes a peer from the block list\n    rpc UnblockPeer(UnblockPeerRequest) returns (UnblockPeerResponse) {}\n\n    // SetLogLevel changes the logging level of the node\n    rpc SetLogLevel(SetLogLevelRequest) returns (SetLogLevelResponse) {}\n\n    // GetMinFeePerKilobyte returns the node's current minimum transaction fee needed to relay\n    // transactions and admit them into the mempool. Validators will also set their initial preference\n    // for blocks containing transactions with fees below this threshold to not-preferred.\n    rpc GetMinFeePerKilobyte(GetMinFeePerKilobyteRequest) returns (GetMinFeePerKilobyteResponse) {}\n\n    // SetMinFeePerKilobyte sets the node's fee policy\n    rpc SetMinFeePerKilobyte(SetMinFeePerKilobyteRequest) returns (SetMinFeePerKilobyteResponse) {}\n\n    // GetMinStake returns the node's current minimum stake policy. Stake transactions staking less than\n    // this amount will not be admitted into the mempool and will not be relayed. Validators will also\n    // set their initial preference for blocks containing stake transactions below this threshold to\n    // not-preferred.\n    rpc GetMinStake(GetMinStakeRequest) returns (GetMinStakeResponse) {}\n\n    // SetMinStake sets the node's minimum stake policy\n    rpc SetMinStake(SetMinStakeRequest) returns (SetMinStakeResponse) {}\n\n    // GetBlockSizeSoftLimit returns the node's current blocksize soft limit. Validators will also\n    // set their initial preference for blocks over this size to not-preferred.\n    rpc GetBlockSizeSoftLimit(GetBlockSizeSoftLimitRequest) returns (GetBlockSizeSoftLimitResponse) {}\n\n    // SetBlockSizeSoftLimit sets the node's blocksize soft limit policy.\n    rpc SetBlockSizeSoftLimit(SetBlockSizeSoftLimitRequest) returns (SetBlockSizeSoftLimitResponse) {}\n\n    // GetTreasuryWhitelist returns the current treasury whitelist for the node. Blocks containing\n    // TreasuryTransactions not found in this list will have their initial preference set to not-preferred.\n    rpc GetTreasuryWhitelist(GetTreasuryWhitelistRequest) returns (GetTreasuryWhitelistResponse) {}\n\n    // UpdateTreasuryWhitelist adds or removes a transaction to from the treasury whitelist\n    rpc UpdateTreasuryWhitelist(UpdateTreasuryWhitelistRequest) returns (UpdateTreasuryWhitelistResponse) {}\n\n    // ReconsiderBlock tries to reprocess the given block\n    rpc ReconsiderBlock(ReconsiderBlockRequest) returns (ReconsiderBlockResponse) {}\n\n    // RecomputeChainState deletes the accumulator, validator set, and nullifier set and rebuilds them by\n    // loading and re-processing all blocks from genesis.\n    rpc RecomputeChainState(RecomputeChainStateRequest) returns (RecomputeChainStateResponse) {}\n}\n")),(0,r.kt)("h3",{id:"rpc-messages"},"RPC Messages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"message GetHostInfoRequest {}\nmessage GetHostInfoResponse {\n    // The host peer ID\n    string peer_ID        = 1;\n    // A list of multiaddrs that this node is listening on\n    repeated string addrs = 2;\n    // The number of peers this node is connected to\n    uint32 peers    = 3;\n    // Is tx index enabled\n    bool tx_index         = 4;\n    // Is the wallet server enabled\n    bool wallet_server    = 5;\n}\n\nmessage GetNetworkKeyRequest{}\nmessage GetNetworkKeyResponse{\n    // The nodes' serialized network key\n    bytes networkPrivateKey = 1;\n}\n\nmessage GetPeersRequest {}\nmessage GetPeersResponse {\n    // List of peers\n    repeated Peer peers = 1;\n}\n\nmessage AddPeerRequest {\n    // The peer addr to add. The IP addresses for the peer\n    // will be looked up in the DHT if necessary.\n    string peer_ID = 1;\n}\nmessage AddPeerResponse {}\n\nmessage BlockPeerRequest {\n    // Peer ID to block\n    string peer_ID = 1;\n}\nmessage BlockPeerResponse {}\n\nmessage UnblockPeerRequest {\n    // Peer ID to unblock\n    string peer_ID = 1;\n}\nmessage UnblockPeerResponse {}\n\nmessage SetLogLevelRequest {\n    // The debug level to set the logging to\n    Level level = 1;\n\n    enum Level {\n       DEBUG     = 0;\n       INFO      = 1;\n       WARNING   = 2;\n       ERROR     = 3;\n       CRITICAL  = 4;\n       ALERT     = 5;\n       EMERGENCY = 6;\n    }\n}\nmessage SetLogLevelResponse {}\n\nmessage GetMinFeePerKilobyteRequest {}\nmessage GetMinFeePerKilobyteResponse {\n    // Fee per kilobyte response\n    uint64 fee_per_kilobyte = 1;\n}\n\nmessage SetMinFeePerKilobyteRequest {\n    // Fee per byte to set\n    uint64 fee_per_kilobyte = 1;\n}\nmessage SetMinFeePerKilobyteResponse {}\n\nmessage GetMinStakeRequest {}\nmessage GetMinStakeResponse {\n    // Minimum stake response\n    uint64 min_stake_amount = 1;\n}\n\nmessage SetMinStakeRequest {\n    // Minimum stake amount to set\n    uint64 min_stake_amount = 1;\n}\nmessage SetMinStakeResponse {}\n\nmessage GetBlockSizeSoftLimitRequest {}\nmessage GetBlockSizeSoftLimitResponse {\n    // Block size response\n    uint32 block_size = 1;\n}\n\nmessage SetBlockSizeSoftLimitRequest {\n    // Blocksize to set\n    uint32 block_size = 1;\n}\nmessage SetBlockSizeSoftLimitResponse {}\n\nmessage GetTreasuryWhitelistRequest {}\nmessage GetTreasuryWhitelistResponse {\n    // Whitelisted txids\n    repeated bytes txids = 1;\n}\n\nmessage UpdateTreasuryWhitelistRequest {\n    // Txids to add to the whitelist\n    repeated bytes add    = 1;\n    // Txids to remove from the whitelist\n    repeated bytes remove = 2;\n}\nmessage UpdateTreasuryWhitelistResponse {}\n\nmessage ReconsiderBlockRequest {\n    // Block ID to reconsider.\n    bytes block_ID = 1;\n\n    // We likely don't have the block and will have to download it from\n    // another peer. You can set the peer here. If empty we will try to find\n    // it form a few random peers.\n    string download_peer = 2;\n}\nmessage ReconsiderBlockResponse {}\n\nmessage RecomputeChainStateRequest {}\nmessage RecomputeChainStateResponse {}\n")))}d.isMDXComponent=!0}}]);