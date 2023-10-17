"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[8133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,f=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:7,description:"Marco extensions"},i="Storage",s={unversionedId:"developers/storage",id:"developers/storage",title:"Storage",description:"Marco extensions",source:"@site/docs/developers/storage.md",sourceDirName:"developers",slug:"/developers/storage",permalink:"/docs/developers/storage",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/developers/storage.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Marco extensions"},sidebar:"devSidebar",previous:{title:"Smart Contracts",permalink:"/docs/developers/smart_contracts"},next:{title:"Lurk",permalink:"/docs/developers/lurk"}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storage"},"Storage"),(0,o.kt)("p",null,"[",(0,o.kt)("strong",{parentName:"p"},"NOTE")," Nothing in this section has been implemented yet and may change.]"),(0,o.kt)("p",null,"Illium only gives you 128 bytes to use for each contract's state field. For a lot of applications this is enough space.\nFor other's it's not."),(0,o.kt)("p",null,"If you need more storage you'll need create an offchain database, compute a merkle root of all the data in the database,\nand store the root hash of the database in state. "),(0,o.kt)("p",null,"Here's the interface for an offchain database written in Go:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MerkleDB interface {\n        // Put a new key-value pair into the local db or update the value for an existing key. \n        // This operation should update the root hash.\n        Put(key, value []byte) (err error) \n\n        // Get the value for a given key.\n        // Nil is returned if the key is not in the db.\n        // And inclusion (or exclusion in case of nil value) proof is returned linking to the root.\n        Get(key []byte) (value []byte, proof [][]byte, err error)\n    \n        // Returns the root hash of the db.\n        Root() (hash []byte, err error) \n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"std/merkle-db")," module interface is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},";; Verify that the key-value pair exists in the db by making\n;; sure the key-value pair links to the state root via the provided\n;; proof.\n;; Returns t or nil\n!(defun db-exists (key value proof root) ())\n\n;; Same as above but verifies an exclusion proof for the given key.\n;; Returns t or nil\n!(defun db-not-exists (key proof root) ())\n\n;; Verifies that the old-value (which can be nil) links to the state \n;; root via the provided proof, then uses the hashes in the proof\n;; to compute the new state root.\n;; Returns the new root or nil if the proof was invalid\n!(defun db-put (key old-val new-val proof root) ())\n")),(0,o.kt)("p",null,"Now consider the following contract. It allows users to add new data to the contract storage. To do so they have to do\nthe following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Put the data to their local, offchain database."),(0,o.kt)("li",{parentName:"ul"},"Get the new database root hash."),(0,o.kt)("li",{parentName:"ul"},"Fetch a merkle inclusion proof linking the data they just inserted to the new root hash."),(0,o.kt)("li",{parentName:"ul"},"Use data and merkle inclusion proof as input parameters to the contract."),(0,o.kt)("li",{parentName:"ul"},"Contract uses the data and the inclusion proof to:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Verify the inclusion proof hashes link to the current contract state root"),(0,o.kt)("li",{parentName:"ul"},"Compute the new contract state root"),(0,o.kt)("li",{parentName:"ul"},"Enforce a covenant saving the new state root")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unlocking-params = (<data> <merkle-proof>)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(lambda (script-params unlocking-params input-index private-params public-params)\n    !(import std/merkle-db)\n    !(import std/crypto)\n    \n    !(def data (nth 0 unlocking-params))\n    !(def merkle-proof (nth 1 unlocking-params))\n    !(def state-root (car !(param priv-in input-index state)))\n\n    ;; Compute the new state root\n    !(def new-state-root (db-put pubkey merkle-proof state-root))\n\n    ;; Compute the required output\n    !(def required-output !(list\n                            !(param priv-in input-index script-hash)\n                            new-amount\n                            !(param priv-in input-index asset-id)\n                            new-state-root\n                            (hash !(param priv-in input-index salt))))\n    \n    ;; Enforce covenant requring output 0 to be of the required form                  \n    !(assert-eq required-output !(param priv-out 0))\n    \n    ;; Enforce  a covenant requring that the ciphertext contains (required-output data-to-store)\n    ;; and is encrypted with the hash of the input-salt. \n    !(assert-eq !(param pub-out 0 ciphertext) (encrypt !(list required-output data-to-store) (hash !(param priv-in input-index salt))))\n    \n    t\n)\n")))}d.isMDXComponent=!0}}]);