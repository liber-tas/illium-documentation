"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[5736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},o="Command Line Interface",s={unversionedId:"node/cli",id:"node/cli",title:"Command Line Interface",description:"ilxcli is a command line interface for controlling a running ilxd instance. It communicates with ilxd via the gRPC API.",source:"@site/docs/node/cli.md",sourceDirName:"node",slug:"/node/cli",permalink:"/docs/node/cli",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/node/cli.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"nodeSidebar",previous:{title:"Config File",permalink:"/docs/node/config_file"},next:{title:"Become a validator",permalink:"/docs/node/validator"}},l={},c=[{value:"Connection Options",id:"connection-options",level:3},{value:"Config file",id:"config-file",level:3},{value:"Commands",id:"commands",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line-interface"},"Command Line Interface"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ilxcli")," is a command line interface for controlling a running ilxd instance. It communicates with ilxd via the gRPC API.\nAs noted in the ",(0,r.kt)("a",{parentName:"p",href:"https://illium.org/docs/api/overview"},"API docs")," the gRPC API requires use of TLS for connections."),(0,r.kt)("p",null,"By default, ilxd generates a self-signed certificate for use with the gRPC interface and ilxcli will look for the self-signed\ncert in the default home directory. Thus, if you are running ilxd on localhost with the default configuration ilxcli should\nbe able to connect to ilxd with no further configuration. "),(0,r.kt)("h3",{id:"connection-options"},"Connection Options"),(0,r.kt)("p",null,"If you want to connect ilxcli to a remote instance of ilxd, or if you need to change the default configuration, there are\noptions for that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Connection options:\n  -C, --configfile= Path to configuration file\n  -t, --authtoken=  The ilxd node gRPC authentican token if needed\n  -a, --serveraddr= The address of the ilxd gRPC server (in multiaddr format)\n                    (default: /ip4/127.0.0.1/tcp/5001)\n      --rpccert=    A path to the SSL certificate to use with gRPC (this is\n                    only need if using a self-signed cert) (default:\n                    ~/.ilxd/rpc.cert)\n")),(0,r.kt)("p",null,"For example, if you want to connect ilxcli to a remote server that uses client authentication and a TLS certificate issued\nby a valid certificate authority you could use options that look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"$ ilxcli --authtoken=e9aae15bad0532527f8222573bc4b77222d867c2 --serveraddr=/ip4/1.2.3.4/tpc/5001\n")),(0,r.kt)("h3",{id:"config-file"},"Config file"),(0,r.kt)("p",null,"To avoid having to enter your configuration options for each command you can optionally put them into a config file.\nBy default, ilxcli will look for a config file named ",(0,r.kt)("inlineCode",{parentName:"p"},"ilxcli.conf")," in the default application directory."),(0,r.kt)("p",null,"You can tell ilxcli to use a different config file directory by using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ilxcli --configfile=/path/to/ilxcli.conf\n")),(0,r.kt)("p",null,"Sample ilxcli.conf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"authtoken=e9aae15bad0532527f8222573bc4b77222d867c2\nserveraddr=/ip4/1.2.3.4/tpc/5001\n")),(0,r.kt)("h3",{id:"commands"},"Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Available commands:\n  addpeer                     Attempts to connect to the provided peer\n  blockpeer                   Blocks the given peer for the provided time period\n  changewalletpassphrase      Changes the passphrase used to encrypt the wallet private keys\n  createmultisigaddress       Generates a new multisig address using the provided public keys\n  createmultisignature        Generates and returns a signature for use when proving a multisig transaction\n  createmultisigspendkeypair  Generates a spend keypair for use in a multisig address\n  createmultisigviewkeypair   Generates a view keypair for use in a multisig address\n  createrawtransaction        Creates a new, unsigned (unproven) transaction using the given parameters\n  createrawstaketransaction   Creates a new, unsigned (unproven) stake transaction using the given parameters\n  deleteprivatekeys           Deletes the wallet's private keys and seed from disk\n  getaccumulatorcheckpoint    Returns the accumulator at the requested height\n  getaddress                  Returns the most recent address of the wallet\n  getaddresses                Returns all the addresses created by this wallet\n  getaddrinfo                 Returns info about the given address\n  getbalance                  Returns the combined balance of all addresses in the wallet\n  getblock                    Returns the detailed data for a block\n  getblockchaininfo           Returns data about the blockchain\n  getblockinfo                Returns a block header plus some extra metadata\n  getblocksizesoftlimit       Returns the node's current blocksize soft limit\n  getcompressedblock          Returns a block in compressed format\n  gethostinfo                 Returns info about the libp2p host\n  getmempool                  Returns all the transactions in the mempool\n  getmempoolinfo              Returns the state of the current mempool\n  getmerkleproof              Returns a Merkle (SPV) proof for a specific transaction in the provided block\n  getminfeeperkilobyte        Returns the node's current minimum transaction fee\n  getminstake                 Returns the node's current minimum stake policy\n  getnetworkkey               Returns node's network private key\n  getnewaddress               Generates a new address and returns it\n  getpeers                    Returns a list of peers that this node is connected to\n  getprivatekey               Returns the serialized spend and view keys for the given address\n  gettimelockedaddress        Returns an address which locks coins until the provided timestamp\n  gettransaction              Returns the transaction for the given transaction ID\n  gettransactions             Returns the list of transactions for the wallet\n  gettreasurywhitelist        Returns the current treasury whitelist for the node\n  getutxos                    Returns a list of the wallet's current unspent transaction outputs (UTXOs)\n  getvalidator                Returns all the information about the given validator\n  getvalidatorset             Returns all the validators in the current validator set\n  getvalidatorsetinfo         Returns information about the validator set\n  getwalletseed               Returns the mnemonic seed for the wallet\n  importaddress               Imports a watch address into the wallet\n  provemultisig               Creates a proof for a transaction with a multisig input\n  proverawtransaction         Creates the zk-proof for the transaction\n  recomputechainstate         Rebuilds the entire chain state from genesis\n  reconsiderblock             Tries to reprocess the given block\n  setautostakerewards         Automatically stakes validator rewards\n  setblocksizesoftlimit       Sets the node's blocksize soft limit policy\n  setloglevel                 Changes the logging level of the node\n  setminfeeperkilobyte        Sets the node's fee policy\n  setminstake                 Sets the node's minimum stake policy\n  setwalletpassphrase         Encrypts the wallet for the first time\n  signmessage                 Sign a message with the network key\n  spend                       Sends coins from the wallet\n  stake                       Stakes the selected wallet UTXOs and turns the node into a validator\n  submittransaction           Validates a transaction and submits it to the network\n  timelockcoins               Lock coins in a timelocked address\n  unblockpeer                 Removes a peer from the block list\n  updatetreasurywhitelist     Adds or removes a transaction from the treasury whitelist\n  verifymessage               Verify a signed message\n  walletlock                  Encrypts the wallet's private keys\n  walletunlock                Decrypts the wallet seed and holds it in memory for the specified period of time\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ ilxcli getblockchaininfo\n\n{\n    "network":  "REGTEST",\n    "bestHeight":  7,\n    "bestBlockID":  "0007aafc24fd2d78e3a1529116c30b562edde76516bf3c87d83e1cea10437bf2",\n    "blockTime":  "1686969557",\n    "txIndex":  true,\n    "ciculatingSupply":  "230584300921369395",\n    "totalStaked":  "115292150460684697",\n    "treasuryBalance":  "0"\n}\n\n')))}p.isMDXComponent=!0}}]);