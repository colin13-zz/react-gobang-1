(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(85)},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(8),i=a.n(l),s=(a(51),a(52),a(18)),c=a(19),o=a(21),u=a(20),m=a(9),y=a(22),p=a(89),f=a(37),h=a(88),v=a(90),E=(a(53),a(92)),w=a(91),d=a(93),b=a(87),k=a(94);function g(e){var t=e.firstPlayer?"\u26aa\ufe0f":"\u26ab\ufe0f",a=e.firstPlayer?"\u26ab\ufe0f":"\u26aa\ufe0f",r=e.firstPlayer?e.isBlack?"":"-active":e.isBlack?"-active":"",l="-active"===r?"":"-active",i=e.firstPlayer?e.player2:e.player1;return e.nameEntered?n.a.createElement(f.a,{className:"bottonContainer-left",lg:"auto"},n.a.createElement(E.a,{className:"normalCards"},n.a.createElement(E.a.Header,null,"PLAYERS",n.a.createElement(x,{key_:"right",value:"Click to decide who go first!",onClick:function(){return e.switchPlayer()},name:"Switch Player",variant:"switch"})),n.a.createElement(E.a.Text,null,n.a.createElement("strong",null,i)," go first"),n.a.createElement(w.a,{variant:"flush"},n.a.createElement(w.a.Item,{className:"listItems"+r},e.player1,n.a.createElement("br",null)," ",t),n.a.createElement(w.a.Item,{className:"listItems"+l},e.player2,n.a.createElement("br",null)," ",a)))):n.a.createElement(f.a,{className:"bottonContainer-left",lg:"auto"},n.a.createElement(N,{setPlayer1Name:e.setPlayer1Name,setPlayer2Name:e.setPlayer2Name,submitNames:e.submitNames}))}function P(e){var t=n.a.createElement("p",null,"Click to ",n.a.createElement("strong",null,"Start a new Game!"),n.a.createElement("br",null),"(please set the players before first)."),a=n.a.createElement("p",null,"Click to go back 1 step");return e.nameEntered?n.a.createElement(f.a,{className:"bottonContainer-right",md:"auto"},n.a.createElement(x,{key_:"left",value:"Sorry the Computer vs. User mode is in-progress.",onClick:function(){return 1},name:"Mode",class_:"normalButtons",variant:"flat",size:"xxl"}),n.a.createElement(x,{key_:"left",value:t,onClick:function(){return e.newGame()},name:"New Game",class_:"normalButtons",variant:"flat",size:"xxl"}),n.a.createElement(x,{key_:"left",value:a,onClick:function(){return e.goBack()},name:n.a.createElement("p",null,"Go Back",n.a.createElement("br",null),"One Step"),class_:"normalButtons",variant:"flat",size:"xxl"})):n.a.createElement("div",null)}function x(e){return n.a.createElement(d.a,{key:e.key_,placement:e.key_,overlay:n.a.createElement(b.a,{id:"tooltip-".concat(e.key_)},e.value)},n.a.createElement(k.a,{className:e.class_,variant:e.variant,size:e.size,onClick:e.onClick},e.name))}a(82);function _(e){return e.gameOver?n.a.createElement("div",{className:"gameOverWrapper"},n.a.createElement(h.a,{className:"textArea"},n.a.createElement("h1",null,"The Winner is",n.a.createElement("br",null),n.a.createElement("strong",null,e.winner),"!"),n.a.createElement("p",null,"- Please Start A New Game to Continue -"))):n.a.createElement("div",null)}function N(e){var t=n.a.createElement("p",null,"Click to submit the names and ",n.a.createElement("strong",null,"Begin the Game!"));return n.a.createElement(v.a,null,n.a.createElement(v.a.Text,null,n.a.createElement("h1",{className:"icon"},"Gobang")),n.a.createElement(v.a.Text,{className:"text-muted"},"You can replace the default names with your prefered names!"),n.a.createElement(v.a.Group,null,n.a.createElement(v.a.Label,null,"Player 1"),n.a.createElement(v.a.Control,{placeholder:"Enter the name of player1",defaultValue:"Player 1",onChange:e.setPlayer1Name})),n.a.createElement(v.a.Group,null,n.a.createElement(v.a.Label,null,"Player 2"),n.a.createElement(v.a.Control,{placeholder:"Enter the name of player2",defaultValue:"Player 2",onChange:e.setPlayer2Name})),n.a.createElement(x,{key_:"bottom",value:t,onClick:function(){return e.submitNames()},name:"Set Names and Begin!",class_:"normalButtons",variant:"flat"}))}function B(){return n.a.createElement(h.a,{className:"mobilePage_",fluid:!0},n.a.createElement("h3",null,"Dear Mobile User,",n.a.createElement("br",null)),n.a.createElement("p",null,"Please play ",n.a.createElement("strong",null,"Gobang")," on a Computer or Laptop."),n.a.createElement("a",{href:"https://ruihuasui.github.io/react-simple2048/"},"Try ",n.a.createElement("strong",null,"Simple 2048")," Here"))}a(83);function O(e){var t="box"+e.type,a=e.matrix,r=e.position.x,l=e.position.y,i=a[r][l]?a[r][l]:"";return n.a.createElement(f.a,{className:t,onClick:function(){return e.updateMatrix(r,l)}},n.a.createElement("div",{className:"piece"},i))}function C(e){var t=parseInt(e.row),a=2===t||7===t||12===t?"-center":"";return n.a.createElement(p.a,{className:"board-row"},[{y:0,type:"-left"+e.type},{y:1,type:e.type},{y:2,type:a+e.type},{y:3,type:e.type},{y:4,type:e.type},{y:5,type:e.type},{y:6,type:e.type},{y:7,type:a+e.type},{y:8,type:e.type},{y:9,type:e.type},{y:10,type:e.type},{y:11,type:e.type},{y:12,type:a+e.type},{y:13,type:e.type},{y:14,type:"-right"+e.type}].map(function(a){return n.a.createElement(O,{matrix:e.matrix,position:{x:t,y:a.y},updateMatrix:e.updateMatrix,type:a.type})}))}var S=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(y.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(f.a,{className:"board",md:"auto"},n.a.createElement(_,{gameOver:this.props.gameOver,winner:this.props.winner}),[{type:"-top",row:"0"},{type:"",row:"1"},{type:"",row:"2"},{type:"",row:"3"},{type:"",row:"4"},{type:"",row:"5"},{type:"",row:"6"},{type:"",row:"7"},{type:"",row:"8"},{type:"",row:"9"},{type:"",row:"10"},{type:"",row:"11"},{type:"",row:"12"},{type:"",row:"13"},{type:"-bottom",row:"14"}].map(function(t){return n.a.createElement(C,{matrix:e.props.matrix,updateMatrix:e.props.updateMatrix,type:t.type,row:t.row})}))}}]),t}(n.a.Component);function G(e,t,a){for(var r=Array(e),n=0;n<e;n++)r[n]=Array(t).fill(a);return r}function j(e,t,a){for(var r=G(e,t,0),n=0;n<e;n++)for(var l=0;l<t;l++)r[n][l]=a[n][l];return r}function M(e,t,a){if(a<2||a>12)return{win:!1,value:0};for(var r=a-2;r<a+3;r++)if(0===e[t][r]||e[t][r]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}function I(e,t,a){if(a<2||a>12||t<2||t>12)return{win:!1,value:0};for(var r=t-2,n=a+2;r<t+3;r++,n--)if(0===e[r][n]||e[r][n]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}function z(e,t,a){if(t<2||t>12)return{win:!1,value:0};for(var r=t-2;r<t+3;r++)if(0===e[r][a]||e[r][a]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}function A(e,t,a){if(a<2||a>12||t<2||t>12)return{win:!1,value:0};for(var r=t-2,n=a-2;r<t+3;r++,n++)if(0===e[r][n]||e[r][n]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}a(84);var T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={matrix:G(15,15,0),isBlack:!0,firstPlayer:0,history:[{matrix:G(15,15,0)}],currStep:0,player1:"Player 1",player2:"Player 2",nameEntered:!1},a.gameOver=!1,a.winner="",a._startGame=a._startGame.bind(Object(m.a)(a)),a._setPlayer1Name=a._setPlayer1Name.bind(Object(m.a)(a)),a._setPlayer2Name=a._setPlayer2Name.bind(Object(m.a)(a)),a._updateMatrix=a._updateMatrix.bind(Object(m.a)(a)),a._switchPlayer=a._switchPlayer.bind(Object(m.a)(a)),a._newGame=a._newGame.bind(Object(m.a)(a)),a._goBack=a._goBack.bind(Object(m.a)(a)),a}return Object(y.a)(t,e),Object(c.a)(t,[{key:"_startGame",value:function(){this.setState({nameEntered:!0})}},{key:"_setPlayer1Name",value:function(e){this.setState({player1:e.target.value})}},{key:"_setPlayer2Name",value:function(e){this.setState({player2:e.target.value})}},{key:"_updateMatrix",value:function(e,t){var a=j(15,15,this.state.matrix),r=this.state.currStep+1,n=this.state.history.slice(0,r),l=this.state.isBlack;a[e][t]||(a[e][t]=l?"\u26ab\ufe0f":"\u26aa\ufe0f",this.setState({matrix:a,isBlack:!l,history:n.concat([{matrix:a}]),currStep:r}))}},{key:"_switchPlayer",value:function(){var e=this.state.firstPlayer?0:1,t=this.state.isBlack;this.setState({isBlack:!t,firstPlayer:e})}},{key:"_newGame",value:function(){var e=!this.state.firstPlayer;this.setState({matrix:G(15,15,0),isBlack:e,history:[{matrix:G(15,15,0)}],currStep:0}),this.gameOver=!1,this.winner=""}},{key:"_goBack",value:function(){var e=this.state.currStep-1;if(!(e<=0)){var t=!this.state.isBlack,a=this.state.history.slice(0,e),r=j(15,15,a[e-1].matrix);this.setState({currStep:e,history:a,matrix:r,isBlack:t})}}},{key:"render",value:function(){if(function(e){for(var t=0;t<15;t++)for(var a=0;a<15;a++){var r;if((r=M(e,t,a)).win)return r;if((r=z(e,t,a)).win)return r;if((r=A(e,t,a)).win)return r;if((r=I(e,t,a)).win)return r}return{win:!1,value:0}}(this.state.matrix).win){this.gameOver=!0;var e=this.state.firstPlayer?this.state.player2:this.state.player1,t=this.state.firstPlayer?this.state.player1:this.state.player2;this.winner=this.state.currStep%2===1?e:t}return n.a.createElement(p.a,{className:"gameContainer"},n.a.createElement(g,{switchPlayer:this._switchPlayer,firstPlayer:this.state.firstPlayer,isBlack:this.state.isBlack,player1:this.state.player1,player2:this.state.player2,nameEntered:this.state.nameEntered,setPlayer1Name:this._setPlayer1Name,setPlayer2Name:this._setPlayer2Name,submitNames:this._startGame}),n.a.createElement(S,{matrix:this.state.matrix,updateMatrix:this._updateMatrix,gameOver:this.gameOver,winner:this.winner}),n.a.createElement(P,{nameEntered:this.state.nameEntered,newGame:this._newGame,goBack:this._goBack}))}}]),t}(r.Component);var W=function(){return window.innerWidth<=520?n.a.createElement(B,null):n.a.createElement(f.a,null,n.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.4eaf6500.chunk.js.map