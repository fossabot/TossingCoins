parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"7QCb":[function(require,module,exports) {
function t(t){"Enter"==t.key&&d()}window.onload=function(){return document.addEventListener("keydown",t)};var e={},n={heads:0,tails:0,currentSide:"neither"},r=[0,0];function d(){var t,n=document.getElementById("coinToss").value,r=Number(n),d=Math.floor(Math.random()*r),s=r-d;if(r<=0||isNaN(r))t="INVALID OPTION";else{e[d]=e[d]+1||1;var o=String(d),u=String(s);d>s?(o+=" ✅",a("heads")):d<s?(u+=" ✅",a("tails")):(o+=" 💰",u+=" 💰",a("neither")),t="Heads Amount: "+o+"<br>Tails Amount: "+u,i()}document.getElementById("tossOutput").innerHTML=t}function i(){var t="<table><tr><th>Number of Heads</th><th>Frequency</th></tr>";for(var n in e)t+="<tr><td>"+String(n)+"</td><td>"+String(e[n])+"</td></tr>";document.getElementById("headsTable").innerHTML=t+"</table>"}function a(t){"neither"===t?(n.heads=0,n.tails=0):t!==n.currentSide&&0!==n[t]||("heads"===t?(n.heads+=1,n.tails=0):"tails"===t&&(n.heads=0,n.tails+=1),n.heads>r[0]?r[0]=n.heads:n.tails>r[1]&&(r[1]=n.tails),s()),n.currentSide=t}function s(){var t="<table><tr><th>Coin Side</th><th>Highest Run</th></tr>";t+="<tr><td>Heads</td><td>"+String(r[0])+"</td></tr>",t+="<tr><td>Tails</td><td>"+String(r[1])+"</td></tr>",document.getElementById("coinRuns").innerHTML=t+"</table>"}
},{}]},{},["7QCb"], null)
//# sourceMappingURL=src.57c3ecfd.map