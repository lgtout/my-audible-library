"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["fuse-search"],{2631:(t,e,n)=>{function s(t){return Array.isArray?Array.isArray(t):"[object Array]"===a(t)}function r(t){return"string"==typeof t}function i(t){return"number"==typeof t}function c(t){return"object"==typeof t}function o(t){return null!=t}function h(t){return!t.trim().length}function a(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}n.r(e),n.d(e,{default:()=>P});const l=Object.prototype.hasOwnProperty;class u{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach((t=>{let n=d(t);e+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,e+=n.weight})),this._keys.forEach((t=>{t.weight/=e}))}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function d(t){let e=null,n=null,i=null,c=1;if(r(t)||s(t))i=t,e=g(t),n=f(t);else{if(!l.call(t,"name"))throw new Error("Missing name property in key");const s=t.name;if(i=s,l.call(t,"weight")&&(c=t.weight,c<=0))throw new Error((t=>`Property 'weight' in key '${t}' must be a positive integer`)(s));e=g(s),n=f(s)}return{path:e,id:n,weight:c,src:i}}function g(t){return s(t)?t:t.split(".")}function f(t){return s(t)?t.join("."):t}var p={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(t,e){let n=[],h=!1;const l=(t,e,u)=>{if(o(t))if(e[u]){const d=t[e[u]];if(!o(d))return;if(u===e.length-1&&(r(d)||i(d)||function(t){return!0===t||!1===t||function(t){return c(t)&&null!==t}(t)&&"[object Boolean]"==a(t)}(d)))n.push(function(t){return null==t?"":function(t){if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(t)}(d));else if(s(d)){h=!0;for(let t=0,n=d.length;t<n;t+=1)l(d[t],e,u+1)}else e.length&&l(d,e,u+1)}else n.push(t)};return l(t,r(e)?e.split("."):e,0),h?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1};const M=/[^ ]+/g;class m{constructor({getFn:t=p.getFn}={}){this.norm=function(t=3){const e=new Map,n=Math.pow(10,t);return{get(t){const s=t.match(M).length;if(e.has(s))return e.get(s);const r=1/Math.sqrt(s),i=parseFloat(Math.round(r*n)/n);return e.set(s,i),i},clear(){e.clear()}}}(3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach(((t,e)=>{this._keysMap[t.id]=e}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,r(this.docs[0])?this.docs.forEach(((t,e)=>{this._addString(t,e)})):this.docs.forEach(((t,e)=>{this._addObject(t,e)})),this.norm.clear())}add(t){const e=this.size();r(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!o(t)||h(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let n={i:e,$:{}};this.keys.forEach(((e,i)=>{let c=this.getFn(t,e.path);if(o(c))if(s(c)){let t=[];const e=[{nestedArrIndex:-1,value:c}];for(;e.length;){const{nestedArrIndex:n,value:i}=e.pop();if(o(i))if(r(i)&&!h(i)){let e={v:i,i:n,n:this.norm.get(i)};t.push(e)}else s(i)&&i.forEach(((t,n)=>{e.push({nestedArrIndex:n,value:t})}))}n.$[i]=t}else if(!h(c)){let t={v:c,n:this.norm.get(c)};n.$[i]=t}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function y(t,e,{getFn:n=p.getFn}={}){const s=new m({getFn:n});return s.setKeys(t.map(d)),s.setSources(e),s.create(),s}function x(t,{errors:e=0,currentLocation:n=0,expectedLocation:s=0,distance:r=p.distance,ignoreLocation:i=p.ignoreLocation}={}){const c=e/t.length;if(i)return c;const o=Math.abs(s-n);return r?c+o/r:o?1:c}const L=32;function k(t){let e={};for(let n=0,s=t.length;n<s;n+=1){const r=t.charAt(n);e[r]=(e[r]||0)|1<<s-n-1}return e}class _{constructor(t,{location:e=p.location,threshold:n=p.threshold,distance:s=p.distance,includeMatches:r=p.includeMatches,findAllMatches:i=p.findAllMatches,minMatchCharLength:c=p.minMatchCharLength,isCaseSensitive:o=p.isCaseSensitive,ignoreLocation:h=p.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:s,includeMatches:r,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h},this.pattern=o?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const a=(t,e)=>{this.chunks.push({pattern:t,alphabet:k(t),startIndex:e})},l=this.pattern.length;if(l>L){let t=0;const e=l%L,n=l-e;for(;t<n;)a(this.pattern.substr(t,L),t),t+=L;if(e){const t=l-L;a(this.pattern.substr(t),t)}}else a(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return n&&(e.indices=[[0,t.length-1]]),e}const{location:s,distance:r,threshold:i,findAllMatches:c,minMatchCharLength:o,ignoreLocation:h}=this.options;let a=[],l=0,u=!1;this.chunks.forEach((({pattern:e,alphabet:d,startIndex:g})=>{const{isMatch:f,score:M,indices:m}=function(t,e,n,{location:s=p.location,distance:r=p.distance,threshold:i=p.threshold,findAllMatches:c=p.findAllMatches,minMatchCharLength:o=p.minMatchCharLength,includeMatches:h=p.includeMatches,ignoreLocation:a=p.ignoreLocation}={}){if(e.length>L)throw new Error("Pattern length exceeds max of 32.");const l=e.length,u=t.length,d=Math.max(0,Math.min(s,u));let g=i,f=d;const M=o>1||h,m=M?Array(u):[];let y;for(;(y=t.indexOf(e,f))>-1;){let t=x(e,{currentLocation:y,expectedLocation:d,distance:r,ignoreLocation:a});if(g=Math.min(t,g),f=y+l,M){let t=0;for(;t<l;)m[y+t]=1,t+=1}}f=-1;let k=[],_=1,v=l+u;const S=1<<l-1;for(let s=0;s<l;s+=1){let i=0,o=v;for(;i<o;)x(e,{errors:s,currentLocation:d+o,expectedLocation:d,distance:r,ignoreLocation:a})<=g?i=o:v=o,o=Math.floor((v-i)/2+i);v=o;let h=Math.max(1,d-o+1),p=c?u:Math.min(d+o,u)+l,y=Array(p+2);y[p+1]=(1<<s)-1;for(let i=p;i>=h;i-=1){let c=i-1,o=n[t.charAt(c)];if(M&&(m[c]=+!!o),y[i]=(y[i+1]<<1|1)&o,s&&(y[i]|=(k[i+1]|k[i])<<1|1|k[i+1]),y[i]&S&&(_=x(e,{errors:s,currentLocation:c,expectedLocation:d,distance:r,ignoreLocation:a}),_<=g)){if(g=_,f=c,f<=d)break;h=Math.max(1,2*d-f)}}if(x(e,{errors:s+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:a})>g)break;k=y}const w={isMatch:f>=0,score:Math.max(.001,_)};if(M){const t=function(t=[],e=p.minMatchCharLength){let n=[],s=-1,r=-1,i=0;for(let c=t.length;i<c;i+=1){let c=t[i];c&&-1===s?s=i:c||-1===s||(r=i-1,r-s+1>=e&&n.push([s,r]),s=-1)}return t[i-1]&&i-s>=e&&n.push([s,i-1]),n}(m,o);t.length?h&&(w.indices=t):w.isMatch=!1}return w}(t,e,d,{location:s+g,distance:r,threshold:i,findAllMatches:c,minMatchCharLength:o,includeMatches:n,ignoreLocation:h});f&&(u=!0),l+=M,f&&m&&(a=[...a,...m])}));let d={isMatch:u,score:u?l/this.chunks.length:1};return u&&n&&(d.indices=a),d}}class v{constructor(t){this.pattern=t}static isMultiMatch(t){return S(t,this.multiRegex)}static isSingleMatch(t){return S(t,this.singleRegex)}search(){}}function S(t,e){const n=t.match(e);return n?n[1]:null}class w extends v{constructor(t,{location:e=p.location,threshold:n=p.threshold,distance:s=p.distance,includeMatches:r=p.includeMatches,findAllMatches:i=p.findAllMatches,minMatchCharLength:c=p.minMatchCharLength,isCaseSensitive:o=p.isCaseSensitive,ignoreLocation:h=p.ignoreLocation}={}){super(t),this._bitapSearch=new _(t,{location:e,threshold:n,distance:s,includeMatches:r,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class C extends v{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,n=0;const s=[],r=this.pattern.length;for(;(e=t.indexOf(this.pattern,n))>-1;)n=e+r,s.push([e,n-1]);const i=!!s.length;return{isMatch:i,score:i?0:1,indices:s}}}const I=[class extends v{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},C,class extends v{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},class extends v{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends v{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends v{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class extends v{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},w],$=I.length,A=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,b=new Set([w.type,C.type]);const E=[];function F(t,e){for(let n=0,s=E.length;n<s;n+=1){let s=E[n];if(s.condition(t,e))return new s(t,e)}return new _(t,e)}const R="$and",O=t=>!(!t.$and&&!t.$or),j=t=>({[R]:Object.keys(t).map((e=>({[e]:t[e]})))});function N(t,e,{auto:n=!0}={}){const i=t=>{let o=Object.keys(t);const h=(t=>!!t.$path)(t);if(!h&&o.length>1&&!O(t))return i(j(t));if((t=>!s(t)&&c(t)&&!O(t))(t)){const s=h?t.$path:o[0],i=h?t.$val:t[s];if(!r(i))throw new Error((t=>`Invalid value for key ${t}`)(s));const c={keyId:f(s),pattern:i};return n&&(c.searcher=F(i,e)),c}let a={children:[],operator:o[0]};return o.forEach((e=>{const n=t[e];s(n)&&n.forEach((t=>{a.children.push(i(t))}))})),a};return O(t)||(t=j(t)),i(t)}function z(t,e){const n=t.matches;e.matches=[],o(n)&&n.forEach((t=>{if(!o(t.indices)||!t.indices.length)return;const{indices:n,value:s}=t;let r={indices:n,value:s};t.key&&(r.key=t.key.src),t.idx>-1&&(r.refIndex=t.idx),e.matches.push(r)}))}function K(t,e){e.score=t.score}class q{constructor(t,e={},n){this.options={...p,...e},this.options.useExtendedSearch,this._keyStore=new u(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof m))throw new Error("Incorrect 'index' type");this._myIndex=e||y(this.options.keys,this._docs,{getFn:this.options.getFn})}add(t){o(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=(()=>!1)){const e=[];for(let n=0,s=this._docs.length;n<s;n+=1){const r=this._docs[n];t(r,n)&&(this.removeAt(n),n-=1,s-=1,e.push(r))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:s,shouldSort:c,sortFn:o,ignoreFieldNorm:h}=this.options;let a=r(t)?r(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return function(t,{ignoreFieldNorm:e=p.ignoreFieldNorm}){t.forEach((t=>{let n=1;t.matches.forEach((({key:t,norm:s,score:r})=>{const i=t?t.weight:null;n*=Math.pow(0===r&&i?Number.EPSILON:r,(i||1)*(e?1:s))})),t.score=n}))}(a,{ignoreFieldNorm:h}),c&&a.sort(o),i(e)&&e>-1&&(a=a.slice(0,e)),function(t,e,{includeMatches:n=p.includeMatches,includeScore:s=p.includeScore}={}){const r=[];return n&&r.push(z),s&&r.push(K),t.map((t=>{const{idx:n}=t,s={item:e[n],refIndex:n};return r.length&&r.forEach((e=>{e(t,s)})),s}))}(a,this._docs,{includeMatches:n,includeScore:s})}_searchStringList(t){const e=F(t,this.options),{records:n}=this._myIndex,s=[];return n.forEach((({v:t,i:n,n:r})=>{if(!o(t))return;const{isMatch:i,score:c,indices:h}=e.searchIn(t);i&&s.push({item:t,idx:n,matches:[{score:c,value:t,norm:r,indices:h}]})})),s}_searchLogical(t){const e=N(t,this.options),n=(t,e,s)=>{if(!t.children){const{keyId:n,searcher:r}=t,i=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(e,n),searcher:r});return i&&i.length?[{idx:s,item:e,matches:i}]:[]}switch(t.operator){case R:{const r=[];for(let i=0,c=t.children.length;i<c;i+=1){const c=t.children[i],o=n(c,e,s);if(!o.length)return[];r.push(...o)}return r}case"$or":{const r=[];for(let i=0,c=t.children.length;i<c;i+=1){const c=t.children[i],o=n(c,e,s);if(o.length){r.push(...o);break}}return r}}},s=this._myIndex.records,r={},i=[];return s.forEach((({$:t,i:s})=>{if(o(t)){let c=n(e,t,s);c.length&&(r[s]||(r[s]={idx:s,item:t,matches:[]},i.push(r[s])),c.forEach((({matches:t})=>{r[s].matches.push(...t)})))}})),i}_searchObjectList(t){const e=F(t,this.options),{keys:n,records:s}=this._myIndex,r=[];return s.forEach((({$:t,i:s})=>{if(!o(t))return;let i=[];n.forEach(((n,s)=>{i.push(...this._findMatches({key:n,value:t[s],searcher:e}))})),i.length&&r.push({idx:s,item:t,matches:i})})),r}_findMatches({key:t,value:e,searcher:n}){if(!o(e))return[];let r=[];if(s(e))e.forEach((({v:e,i:s,n:i})=>{if(!o(e))return;const{isMatch:c,score:h,indices:a}=n.searchIn(e);c&&r.push({score:h,key:t,value:e,idx:s,norm:i,indices:a})}));else{const{v:s,n:i}=e,{isMatch:c,score:o,indices:h}=n.searchIn(s);c&&r.push({score:o,key:t,value:s,norm:i,indices:h})}return r}}q.version="6.4.6",q.createIndex=y,q.parseIndex=function(t,{getFn:e=p.getFn}={}){const{keys:n,records:s}=t,r=new m({getFn:e});return r.setKeys(n),r.setIndexRecords(s),r},q.config=p,q.parseQuery=N,function(...t){E.push(...t)}(class{constructor(t,{isCaseSensitive:e=p.isCaseSensitive,includeMatches:n=p.includeMatches,minMatchCharLength:s=p.minMatchCharLength,ignoreLocation:r=p.ignoreLocation,findAllMatches:i=p.findAllMatches,location:c=p.location,threshold:o=p.threshold,distance:h=p.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:s,findAllMatches:i,ignoreLocation:r,location:c,threshold:o,distance:h},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map((t=>{let n=t.trim().split(A).filter((t=>t&&!!t.trim())),s=[];for(let t=0,r=n.length;t<r;t+=1){const r=n[t];let i=!1,c=-1;for(;!i&&++c<$;){const t=I[c];let n=t.isMultiMatch(r);n&&(s.push(new t(n,e)),i=!0)}if(!i)for(c=-1;++c<$;){const t=I[c];let n=t.isSingleMatch(r);if(n){s.push(new t(n,e));break}}}return s}))}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let r=0,i=[],c=0;for(let s=0,o=e.length;s<o;s+=1){const o=e[s];i.length=0,r=0;for(let e=0,s=o.length;e<s;e+=1){const s=o[e],{isMatch:h,indices:a,score:l}=s.search(t);if(!h){c=0,r=0,i.length=0;break}if(r+=1,c+=l,n){const t=s.constructor.type;b.has(t)?i=[...i,...a]:i.push(a)}}if(r){let t={isMatch:!0,score:c/r};return n&&(t.indices=i),t}}return{isMatch:!1,score:1}}});const P=q}}]);