(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(9),i=a.n(l),s=(a(77),a(78),a(79),a(26)),c=a(27),o=a(39),m=a(28),u=a(8),y=a(40),p=a(115),h=a(61),f=a(114),v=a(116),E=(a(80),a(120)),w=a(121),d=a(119),b=a(112),g=a(113);function k(e){var t=e.firstPlayer?"\u26aa\ufe0f":"\u26ab\ufe0f",a=e.firstPlayer?"\u26ab\ufe0f":"\u26aa\ufe0f",r=e.firstPlayer?e.isBlack?"":"-active":e.isBlack?"-active":"",l="-active"===r?"":"-active",i=e.firstPlayer?e.player2:e.player1;return e.nameEntered?n.a.createElement(h.a,{className:"bottonContainer-left",lg:"auto"},n.a.createElement(E.a,{className:"normalCards"},n.a.createElement(E.a.Header,null,"PLAYERS",n.a.createElement(_,{key_:"right",value:"Click to decide who go first!",onClick:function(){return e.switchPlayer()},name:"Switch Player",variant:"switch"}),n.a.createElement(_,{key_:"right",value:"Click to change the names!",onClick:function(){return e.resetNames()},name:"Reset Names",variant:"switch"}))),n.a.createElement(E.a,{className:"normalCards"},n.a.createElement(E.a.Text,null,n.a.createElement("br",null),n.a.createElement("strong",null,i)," go first"),n.a.createElement(w.a,{variant:"flush"},n.a.createElement(w.a.Item,{className:"listItems"+r},e.player1,n.a.createElement("br",null)," ",t),n.a.createElement(w.a.Item,{className:"listItems"+l},e.player2,n.a.createElement("br",null)," ",a)))):n.a.createElement(h.a,{className:"bottonContainer-left",lg:"auto"},n.a.createElement(P,{setPlayer1Name:e.setPlayer1Name,setPlayer2Name:e.setPlayer2Name,player1:e.player1,player2:e.player2,submitNames:e.submitNames}))}function N(e){var t=n.a.createElement("p",null," Click ",n.a.createElement("strong",null,"New Game")," Botton below to countdown"),a=n.a.createElement("p",null,"Click to ",n.a.createElement("strong",null,"Start a new Game!"),n.a.createElement("br",null),"(please set the players before starting)."),r=n.a.createElement("p",null,"Click to go back 1 step"),l=e.seconds?"black":"red";return e.nameEntered?n.a.createElement(h.a,{className:"bottonContainer-right",md:"auto"},n.a.createElement(_,{key_:"left",value:t,onClick:function(){return 1},name:n.a.createElement("p",{style:{color:l}},"Time Remain",n.a.createElement("br",null),n.a.createElement("h2",null,e.seconds)),class_:"normalButtons",variant:"white",size:"xxl"}),n.a.createElement(_,{key_:"left",value:"Sorry the Computer vs. User mode is in-progress.",onClick:function(){return 1},name:"Mode",class_:"normalButtons",variant:"flat",size:"xxl"}),n.a.createElement(_,{key_:"left",value:a,onClick:function(){return e.newGame()},name:"New Game",class_:"normalButtons",variant:"flat",size:"xxl"}),n.a.createElement(_,{key_:"left",value:r,onClick:function(){return e.goBack()},name:n.a.createElement("p",null,"Go Back",n.a.createElement("br",null),"One Step"),class_:"normalButtons",variant:"flat",size:"xxl"})):n.a.createElement("div",null)}function _(e){return n.a.createElement(d.a,{key:e.key_,placement:e.key_,overlay:n.a.createElement(b.a,{id:"tooltip-".concat(e.key_)},e.value)},n.a.createElement(g.a,{className:e.class_,variant:e.variant,size:e.size,onClick:e.onClick},e.name))}a(104);function x(e){return e.gameOver?n.a.createElement("div",{className:"gameOverWrapper"},n.a.createElement(f.a,{className:"textArea"},n.a.createElement("h1",null,"The Winner is",n.a.createElement("br",null),n.a.createElement("strong",null,e.winner),"!"),n.a.createElement("p",null,"- Please Start A New Game to Continue -"))):n.a.createElement("div",null)}function P(e){var t=n.a.createElement("p",null,"Click to submit the names and ",n.a.createElement("strong",null,"Begin the Game!"));return n.a.createElement(v.a,null,n.a.createElement(v.a.Text,null,n.a.createElement("h1",{className:"icon"},"Gobang")),n.a.createElement(v.a.Text,{className:"text-muted"},"You can replace the default names with your prefered names!"),n.a.createElement(v.a.Group,null,n.a.createElement(v.a.Label,null,"Player 1"),n.a.createElement(v.a.Control,{placeholder:"Enter the name of player1",defaultValue:e.player1,onChange:e.setPlayer1Name})),n.a.createElement(v.a.Group,null,n.a.createElement(v.a.Label,null,"Player 2"),n.a.createElement(v.a.Control,{placeholder:"Enter the name of player2",defaultValue:e.player2,onChange:e.setPlayer2Name})),n.a.createElement(_,{key_:"bottom",value:t,onClick:function(){return e.submitNames()},name:"Set Names and Begin!",class_:"normalButtons",variant:"flat"}))}function C(e,t,a){for(var r=Array(e),n=0;n<e;n++)r[n]=Array(t).fill(a);return r}function O(e,t,a){for(var r=C(e,t,0),n=0;n<e;n++)for(var l=0;l<t;l++)r[n][l]=a[n][l];return r}function B(e,t,a){if(a<2||a>12)return{win:!1,value:0};for(var r=a-2;r<a+3;r++)if(0===e[t][r]||e[t][r]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}function S(e,t,a){if(a<2||a>12||t<2||t>12)return{win:!1,value:0};for(var r=t-2,n=a+2;r<t+3;r++,n--)if(0===e[r][n]||e[r][n]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}function G(e,t,a){if(t<2||t>12)return{win:!1,value:0};for(var r=t-2;r<t+3;r++)if(0===e[r][a]||e[r][a]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}function j(e,t,a){if(a<2||a>12||t<2||t>12)return{win:!1,value:0};for(var r=t-2,n=a-2;r<t+3;r++,n++)if(0===e[r][n]||e[r][n]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}a(105);function T(e){var t="box"+e.type,a=e.matrix,r=e.position.x,l=e.position.y,i=a[r][l]?a[r][l]:"",s=e.active[r][l]?e.active[r][l]:"";return n.a.createElement(h.a,{className:t,onClick:function(){e.updateMatrix(r,l)}},n.a.createElement("div",{className:"piece"},i),n.a.createElement("div",{className:"piece-active"},s))}function M(e){var t=parseInt(e.row),a=2===t||7===t||12===t?"-center":"";return n.a.createElement(p.a,{className:"board-row"},[{y:0,type:"-left"+e.type},{y:1,type:e.type},{y:2,type:a+e.type},{y:3,type:e.type},{y:4,type:e.type},{y:5,type:e.type},{y:6,type:e.type},{y:7,type:a+e.type},{y:8,type:e.type},{y:9,type:e.type},{y:10,type:e.type},{y:11,type:e.type},{y:12,type:a+e.type},{y:13,type:e.type},{y:14,type:"-right"+e.type}].map(function(a){return n.a.createElement(T,{matrix:e.matrix,active:e.active,position:{x:t,y:a.y},updateMatrix:e.updateMatrix,type:a.type})}))}var I=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(y.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(h.a,{className:"board",md:"auto"},n.a.createElement(x,{gameOver:this.props.gameOver,winner:this.props.winner}),[{type:"-top",row:"0"},{type:"",row:"1"},{type:"",row:"2"},{type:"",row:"3"},{type:"",row:"4"},{type:"",row:"5"},{type:"",row:"6"},{type:"",row:"7"},{type:"",row:"8"},{type:"",row:"9"},{type:"",row:"10"},{type:"",row:"11"},{type:"",row:"12"},{type:"",row:"13"},{type:"-bottom",row:"14"}].map(function(t){return n.a.createElement(M,{matrix:e.props.matrix,active:e.props.active,updateMatrix:e.props.updateMatrix,type:t.type,row:t.row})}))}}]),t}(n.a.Component),L=(a(106),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={matrix:C(15,15,0),active:C(15,15,0),isBlack:!0,firstPlayer:0,history:[{matrix:C(15,15,0)}],currStep:0,player1:"Player 1",player2:"Player 2",nameEntered:!1,seconds:60},a.gameOver=!1,a.winner="",a.timer=0,a.startTimer=a.startTimer.bind(Object(u.a)(a)),a.countDown=a.countDown.bind(Object(u.a)(a)),a._startGame=a._startGame.bind(Object(u.a)(a)),a._resetNames=a._resetNames.bind(Object(u.a)(a)),a._setPlayer1Name=a._setPlayer1Name.bind(Object(u.a)(a)),a._setPlayer2Name=a._setPlayer2Name.bind(Object(u.a)(a)),a._updateMatrix=a._updateMatrix.bind(Object(u.a)(a)),a._switchPlayer=a._switchPlayer.bind(Object(u.a)(a)),a._newGame=a._newGame.bind(Object(u.a)(a)),a._goBack=a._goBack.bind(Object(u.a)(a)),a}return Object(y.a)(t,e),Object(c.a)(t,[{key:"startTimer",value:function(){this.setState({seconds:60}),0==this.timer&&this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3))}},{key:"countDown",value:function(){var e=this.state.seconds-1;-1!==e&&this.setState({seconds:e})}},{key:"_startGame",value:function(){this.setState({nameEntered:!0}),this.startTimer()}},{key:"_setPlayer1Name",value:function(e){this.setState({player1:e.target.value})}},{key:"_setPlayer2Name",value:function(e){this.setState({player2:e.target.value})}},{key:"_updateMatrix",value:function(e,t){var a=O(15,15,this.state.matrix),r=this.state.currStep+1,n=this.state.history.slice(0,r),l=this.state.isBlack,i=C(15,15,0);i[e][t]="\ud83d\udd34",a[e][t]||(a[e][t]=l?"\u26ab\ufe0f":"\u26aa\ufe0f",this.setState({matrix:a,isBlack:!l,active:i,history:n.concat([{matrix:a}]),currStep:r}),this.startTimer())}},{key:"_switchPlayer",value:function(){var e=this.state.firstPlayer?0:1;this.setState({firstPlayer:e}),this.startTimer()}},{key:"_newGame",value:function(){this.setState({matrix:C(15,15,0),active:C(15,15,0),isBlack:!0,history:[{matrix:C(15,15,0)}],currStep:0}),this.gameOver=!1,this.winner="",this.startTimer()}},{key:"_resetNames",value:function(){this.setState({nameEntered:!1}),this.startTimer()}},{key:"_goBack",value:function(){var e=this.state.currStep-1;if(!(e<=0)){var t=!this.state.isBlack,a=this.state.history.slice(0,e),r=O(15,15,a[e-1].matrix);this.setState({currStep:e,history:a,matrix:r,active:C(15,15,0),isBlack:t}),this.startTimer()}}},{key:"render",value:function(){if(function(e){for(var t=0;t<15;t++)for(var a=0;a<15;a++){var r;if((r=B(e,t,a)).win)return r;if((r=G(e,t,a)).win)return r;if((r=j(e,t,a)).win)return r;if((r=S(e,t,a)).win)return r}return{win:!1,value:0}}(this.state.matrix).win){this.gameOver=!0;var e=this.state.firstPlayer?this.state.player2:this.state.player1,t=this.state.firstPlayer?this.state.player1:this.state.player2;this.winner=this.state.currStep%2===1?e:t}return n.a.createElement(p.a,{className:"gameContainer"},n.a.createElement(k,{switchPlayer:this._switchPlayer,firstPlayer:this.state.firstPlayer,isBlack:this.state.isBlack,player1:this.state.player1,player2:this.state.player2,nameEntered:this.state.nameEntered,setPlayer1Name:this._setPlayer1Name,setPlayer2Name:this._setPlayer2Name,submitNames:this._startGame,resetNames:this._resetNames}),n.a.createElement(I,{matrix:this.state.matrix,active:this.state.active,updateMatrix:this._updateMatrix,gameOver:this.gameOver,winner:this.winner}),n.a.createElement(N,{nameEntered:this.state.nameEntered,newGame:this._newGame,goBack:this._goBack,seconds:this.state.seconds}))}}]),t}(r.Component));function z(){return n.a.createElement(f.a,{className:"mobilePage_",fluid:!0},n.a.createElement("h3",null,"Dear Mobile User,",n.a.createElement("br",null)),n.a.createElement("p",null,"Please play ",n.a.createElement("strong",null,"Gobang")," on a Computer or Laptop."),n.a.createElement("a",{className:"simple2048Link",href:"https://ruihuasui.github.io/react-simple2048/"},"Try ",n.a.createElement("strong",null,"Simple 2048")," Here"))}function A(){return window.innerWidth<=520?n.a.createElement(z,null):n.a.createElement(h.a,null,n.a.createElement(L,null))}var D=a(117),W=a(118),R=a(67),H=a(68),J=a(21);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(function(){return n.a.createElement(H.a,null,n.a.createElement("div",null,n.a.createElement(D.a,{bg:"light",variant:"light"},n.a.createElement(D.a.Brand,{href:"/react-gobang/"},n.a.createElement("img",{className:"logo",href:"./images/logo.png"})," ","Gobang"),n.a.createElement(W.a,{className:"mr-auto"},n.a.createElement(W.a.Link,{href:"/react-gobang/"},"Gobang"),n.a.createElement(W.a.Link,{href:"https://ruihuasui.github.io/react-simple2048/"},"Simple 2048")),n.a.createElement(v.a,{inline:!0},n.a.createElement(R.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),n.a.createElement(g.a,{variant:"outline-info"},"Search"))),n.a.createElement(J.a,{exact:!0,path:"/react-gobang/",component:A})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(110)},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.e90a5d12.chunk.js.map