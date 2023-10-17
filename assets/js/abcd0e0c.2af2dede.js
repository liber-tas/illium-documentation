"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[8183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:4},a="Chain Service Protocol",c={unversionedId:"protocol_spec/chain_service",id:"protocol_spec/chain_service",title:"Chain Service Protocol",description:"The chain service protocol allows nodes to query each other for blocks and transactions.",source:"@site/docs/protocol_spec/chain_service.md",sourceDirName:"protocol_spec",slug:"/protocol_spec/chain_service",permalink:"/docs/protocol_spec/chain_service",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/protocol_spec/chain_service.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"specSidebar",previous:{title:"Consensus Protocol",permalink:"/docs/protocol_spec/consensus"},next:{title:"Transaction Format",permalink:"/docs/protocol_spec/transactions"}},i={},l=[{value:"Protocol ID",id:"protocol-id",level:3},{value:"Network Messages",id:"network-messages",level:3},{value:"Streaming Requests",id:"streaming-requests",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chain-service-protocol"},"Chain Service Protocol"),(0,o.kt)("p",null,"The chain service protocol allows nodes to query each other for blocks and transactions."),(0,o.kt)("h3",{id:"protocol-id"},"Protocol ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"/ilx/<network>/chainservice/1.0.0\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"<network>")," is either ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"regtest")," depending on which\nnetwork is being used."),(0,o.kt)("h3",{id:"network-messages"},"Network Messages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"enum ErrorResponse {\n    None       = 0;\n    NotFound   = 1;\n    BadRequest = 2;\n    NotCurrent = 3;\n}\n\nmessage MsgChainServiceRequest {\n    oneof msg {\n        GetBlockTxsReq       get_block_txs        = 1;\n        GetBlockTxidsReq     get_block_txids      = 2;\n        GetBlockReq          get_block            = 3;\n        GetBlockIDReq        get_block_id         = 4;\n        GetHeadersStreamReq  get_headers_stream   = 5;\n        GetBlockTxsStreamReq get_block_txs_stream = 6;\n        GetBestReq           get_best             = 7;\n    }\n}\n\n// Request to download tranasctions at specific\n// indexes within a block.\nmessage GetBlockTxsReq {\n    bytes block_ID              = 1;\n    repeated uint32 tx_indexes  = 2;\n}\n\nmessage MsgBlockTxsResp {\n    repeated Transaction transactions = 1;\n    ErrorResponse error               = 2;\n}\n\n// Request to download the full list of txids\n// in the block.\nmessage GetBlockTxidsReq {\n    bytes block_ID = 1;\n}\n\nmessage MsgBlockTxidsResp {\n    repeated bytes txids = 1;\n    ErrorResponse error  = 2;\n}\n\n// Request to download a full block\nmessage GetBlockReq {\n    bytes block_ID = 1;\n}\n\nmessage MsgBlockResp {\n    Block block         = 1;\n    ErrorResponse error = 2;\n}\n\n// Request to get the block ID at a given height\nmessage GetBlockIDReq {\n    uint32 height = 1;\n}\n\nmessage MsgGetBlockIDResp {\n    bytes block_ID       = 1;\n    ErrorResponse error  = 2;\n}\n\n// Request to stream a batch of block headers\nmessage GetHeadersStreamReq {\n    uint32 start_height = 1;\n}\n\n// Request to stream a batch of block transactions (the full\n// transaction list for each block)\nmessage GetBlockTxsStreamReq {\n    uint32 start_height = 1;\n}\n\n// Request to get the peer's block ID and height at the tip of the chain.\nmessage GetBestReq {}\n\nmessage MsgGetBestResp {\n    bytes block_ID      = 1;\n    uint32 height       = 2;\n    ErrorResponse error = 3;\n}\n")),(0,o.kt)("h3",{id:"streaming-requests"},"Streaming Requests"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GetHeadersStreamReq")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GetBlockTxsStreamReq")," open a new stream to the remote peer over which the response is expected\nto be returned. The remote peer should close the stream once the batch has been fully written."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"batchSize = 2000\n")),(0,o.kt)("p",null,"All other requests may reuse an open stream."))}d.isMDXComponent=!0}}]);