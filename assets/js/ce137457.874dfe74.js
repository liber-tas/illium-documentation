"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[1964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,b=c["".concat(s,".").concat(d)]||c[d]||h[d]||i;return n?o.createElement(b,a(a({ref:t},u),{},{components:n})):o.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},a="Libp2p",l={unversionedId:"protocol_spec/libp2p",id:"protocol_spec/libp2p",title:"Libp2p",description:"Illium uses libp2p for its networking stack. This means that much of the illium protocol is defined by the underlying",source:"@site/docs/protocol_spec/libp2p.md",sourceDirName:"protocol_spec",slug:"/protocol_spec/libp2p",permalink:"/docs/protocol_spec/libp2p",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/protocol_spec/libp2p.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"specSidebar",previous:{title:"Protocol Specification",permalink:"/docs/protocol_spec/overview"},next:{title:"Consensus Protocol",permalink:"/docs/protocol_spec/consensus"}},s={},p=[{value:"Host configuration",id:"host-configuration",level:2},{value:"Protocols",id:"protocols",level:2},{value:"DHT Configuration",id:"dht-configuration",level:2},{value:"AutoRelay Configuration",id:"autorelay-configuration",level:2},{value:"Pubsub Configuration",id:"pubsub-configuration",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"libp2p"},"Libp2p"),(0,r.kt)("p",null,"Illium uses libp2p for its networking stack. This means that much of the illium protocol is defined by the underlying\nlibp2p protocol. "),(0,r.kt)("p",null,"You can find the technical specification for libp2p ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs"},"here"),". Below we will document the\nconfiguration settings illium uses for the libp2p networking stack."),(0,r.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// This is a wire encryption option. Illium uses the default security options\n// which includes the Noise protocol as well as TLS.\nlibp2p.DefaultSecurity,\n\n// Transports. Both TCP and QUIC are supported.\nlibp2p.Transport(tcp.NewTCPTransport),\nlibp2p.Transport(quic.NewTransport),\n\n// Using the default stream multiplexer which is yamux.\nlibp2p.DefaultMuxers,\n\n// Enables the circuit relay transport for peers behind\n// a severe NAT. See AutoRelay below.\nlibp2p.EnableAutoRelayWithPeerSource(peerSource),\n\n// This option runs a service for other peers that allows\n// them to determine the status of their firewall. It will\n// attempt to dial the requesting peer and report on the\n// result.\nlibp2p.EnableNATService(),\n\n// Enables the relay transport. It allows the illium node\n// to accept incoming conenctions through a relay and make\n// outgoing connections to other peers through a relay.\nlibp2p.EnableRelay(),\n\n// Allows the illium node to attempt to make direction connections\n// to another peer by coordinating a hole punch over a relayed connection.\nlibp2p.EnableHolePunching(),\n\n// Enables the ping protocol.\nlibp2p.Ping(true),\n")),(0,r.kt)("h2",{id:"protocols"},"Protocols"),(0,r.kt)("p",null,"The following protocols are supported by the illium node. The /ilx/ protocols will be futher defined in this documentation."),(0,r.kt)("p",null,"Network: ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet1"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"regtest")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/ilx/<network>/chainservice/1.0.0\n/ilx/<network>/consensus/1.0.0\n/ilx/<network>/kad/1.0.0\n/ilx/<network>/meshsub/1.1.0\n/ipfs/id/1.0.0\n/ipfs/id/push/1.0.0\n/ipfs/ping/1.0.0\n/libp2p/autonat/1.0.0\n/libp2p/circuit/relay/0.2.0/stop\n")),(0,r.kt)("h2",{id:"dht-configuration"},"DHT Configuration"),(0,r.kt)("p",null,"Illium uses the libp2p kademlia DHT for peer and content routing but not the value store."),(0,r.kt)("p",null,"The DHT is initialized with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dht.DisableValues()\ndht.ProtocolPrefix(cfg.params.ProtocolPrefix),\n")),(0,r.kt)("p",null,"Where protocol prefix is ",(0,r.kt)("inlineCode",{parentName:"p"},"/ilx/<network>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<network>")," is either ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"regtest")," depending on which\nnetwork is being used."),(0,r.kt)("h2",{id:"autorelay-configuration"},"AutoRelay Configuration"),(0,r.kt)("p",null,"The autorelay uses the DHT content routing to discover a list of peers capable of acting as a relay. When a node determines\nthat it is publicly reachable it advertises itself as a potential relay in the DHT. "),(0,r.kt)("p",null,"The DHT key used for the advertisement is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'relayKey := "/ilx/relaypeers"\nhash, _ := multihash.Sum([]byte(relayKey), multihash.SHA2_256, -1)\nkey := cid.NewCidV1(cid.Raw, hash)\n')),(0,r.kt)("h2",{id:"pubsub-configuration"},"Pubsub Configuration"),(0,r.kt)("p",null,"Pubsub is used for relaying transactions and blocks. The configuration options are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// We don't want to advertise who authored a transaction or block.\npubsub.WithNoAuthor(),\n\n// Using the DHT for peer discovery.\npubsub.WithDiscovery(discovery.NewRoutingDiscovery(kdht)),\n\n// Maxmessage size is a consensus parameter. This would cause a hardfork if you\n// change it.\n//\n// Default: 8 MiB\npubsub.WithMaxMessageSize(cfg.maxMessageSize),\n\n// hash.HashFunc is blake2s.\npubsub.WithMessageIdFn(func(pmsg *pb.Message) string {\n    h := hash.HashFunc(pmsg.Data)\n    return string(h[:])\n}),\n\n// Where the protocol prefix is /ilx/<network> and <network> is either mainnet, \n// testnet, or regtest depending on which network is being used.\npubsub.WithGossipSubProtocols([]protocol.ID{cfg.params.ProtocolPrefix + pubsub.GossipSubID_v11}, func(feature pubsub.GossipSubFeature, id protocol.ID) bool {\n    if id == cfg.params.ProtocolPrefix+pubsub.GossipSubID_v11 && (feature == pubsub.GossipSubFeatureMesh || feature == pubsub.GossipSubFeaturePX) {\n        return true\n    }\n    return false\n}),\n")),(0,r.kt)("p",null,"The subscription topics are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'BlockTopic        = "blocks"\nTransactionsTopic = "transactions"\n')))}h.isMDXComponent=!0}}]);