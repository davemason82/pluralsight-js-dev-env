webpackJsonp([0],[function(e,t,n){(function(e){"use strict";n(1);var t=n(3);(0,t.getUsers)().then(function(n){var r="";n.forEach(function(e){r+='<tr>\n    <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n    <td>'+e.id+"</td>\n    <td>"+e.firstName+"</td>\n    <td>"+e.lastName+"</td>\n    <td>"+e.email+"</td>\n    </tr>"}),e.document.getElementById("users").innerHTML=r;var u=e.document.getElementsByClassName("deleteUser");Array.from(u,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,function(){return this}())},function(e,t){},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(){return c("users")}function o(e){return a("users/"+e)}function c(e){return fetch(f+e).then(s,d)}function a(e){var t=new Request(f+e,{method:"DELETE"});return fetch(t).then(s,d)}function s(e){return e.json()}function d(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=u,t.deleteUser=o,n(4);var i=n(5),l=r(i),f=(0,l["default"])()},,function(e,t){"use strict";function n(){return r("useMockApi")?"http://localhost:3001":"https://dry-journey-38631.herokuapp.com/"}function r(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null==n?"":decodeURIComponent(n[1].replace(/\+/g," "))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}]);
//# sourceMappingURL=main.c5603ac93ff7676157f2.js.map