(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(15),n(1)),s=n(2),l=n(4),u=n(3),d=n(5),m=n(8),h=n.n(m),p=(n(16),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={speed:-1,accuracy:0,unitkmh:!1,getoStatusOk:!1,lat:0,longi:0},n.forceRender=!1,n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&(console.log("navigator.geolocation is available"),navigator.geolocation.watchPosition(function(t){return e._onPosition(t)},function(t){return e._onErrorPosition(t)},{enableHighAccuracy:!0,timeout:1e3,maximumAge:0}))}},{key:"render",value:function(){this._getSpeed(),this.forceRender;return this.forceRender=!1,o.a.createElement("div",null,o.a.createElement("div",null,"Accuracy: ",this.state.accuracy,o.a.createElement("br",null),"Speed: ",this.state.speed,o.a.createElement("br",null),"Lat: ",this.state.lat,o.a.createElement("br",null),"Long: ",this.state.longi))}},{key:"_getSpeed",value:function(){var e=this.state.speed;return null==e?-1:(this.state.unitkmh&&(e*=3.6),e)}},{key:"_onPosition",value:function(e){console.log("set state "+e.coords.speed+" "+e.coords.accuracy),this.setState({speed:e.coords.speed,accuracy:e.coords.accuracy,geoStatusOk:!0,lat:e.coords.latitude,longi:e.coords.longitude})}},{key:"_onErrorPosition",value:function(e){console.log("error state {error}"),this.setState({geoStatusOk:!1})}}]),t}(o.a.Component)),g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/APP.js")," and save to reload."),o.a.createElement(p,null),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.f9206e2c.chunk.js.map