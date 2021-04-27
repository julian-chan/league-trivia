(this["webpackJsonpleague-trivia"]=this["webpackJsonpleague-trivia"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(16),r=n.n(c),i=(n(22),n(9)),o=n(3),l=n(2),u=(n(23),n(0));var j=function(e){var t=Object(s.useState)(e.bannerText),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(s.useEffect)((function(){c(e.bannerText)}),[e.bannerText]),Object(u.jsx)("div",{className:"MainBanner",children:a})};n(25);var m=function(){var e=Object(o.e)();return Object(u.jsxs)("div",{className:"Home",children:[Object(u.jsx)(j,{bannerText:"League of Legends Trivia"}),Object(u.jsx)("div",{className:"LeagueMapImageContainer",children:Object(u.jsx)("img",{className:"LeagueMapImage",src:"map.png",alt:"LeagueMap"})}),Object(u.jsx)("div",{className:"PlayButtonContainer",children:Object(u.jsx)("button",{className:"PlayButton",onClick:function(){e.push("/play")},children:"Play!"})}),Object(u.jsx)("div",{className:"AboutButtonContainer",children:Object(u.jsx)("button",{className:"AboutButton",onClick:function(){e.push("/about")},children:"About"})})]})};n(31);var b=function(e){var t=Object(o.e)();return Object(u.jsx)("div",{className:"ConfirmEndGamePopup",children:Object(u.jsxs)("div",{className:"ConfirmEndGamePopupBox",children:[Object(u.jsx)("div",{className:"ConfirmEndGamePopupText",children:"Are you sure you want to end the game?"}),Object(u.jsx)("button",{className:"ConfirmEndGamePopupButton",onClick:function(){e.handleClosePopup(),t.push("/")},children:"End Game"}),Object(u.jsx)("button",{className:"ConfirmEndGamePopupButton",onClick:function(){e.handleClosePopup()},children:"Go Back"})]})})},d="champion_name",h="item_name",p="rune_to_tree_assoc",O={champion_name:"championName",item_name:"itemName",rune_to_tree_assoc:"runeName",passive_to_champion_assoc:"passiveImage",spell_to_champion_assoc:"spellImage",odd_spell_out:"spellImage"},x={champion_name:"/league-assets/img/champion/",item_name:"/league-assets/img/item/",rune_to_tree_assoc:"/league-assets/img/",passive_to_champion_assoc:"/league-assets/img/champion/",spell_to_champion_assoc:"/league-assets/img/champion/"},g={champion_name:"championImage",item_name:"itemImage",rune_to_tree_assoc:"runeTreeIcon",passive_to_champion_assoc:"championImage",spell_to_champion_assoc:"championImage"},f=new Set(Object.keys(x)),v={passive_to_champion_assoc:"/league-assets/img/passive/",spell_to_champion_assoc:"/league-assets/img/spell/",odd_spell_out:"/league-assets/img/spell/"},C=new Set(Object.keys(v)),w=new Set([d,h,p]),N="Iron",_="Bronze",A="Silver",T="Gold",k="Platinum",q="Diamond",S="Master",y="Grandmaster",I="Challenger",E={Iron:"/league-assets/img/ranked-emblems/Emblem_Iron.png",Bronze:"/league-assets/img/ranked-emblems/Emblem_Bronze.png",Silver:"/league-assets/img/ranked-emblems/Emblem_Silver.png",Gold:"/league-assets/img/ranked-emblems/Emblem_Gold.png",Platinum:"/league-assets/img/ranked-emblems/Emblem_Platinum.png",Diamond:"/league-assets/img/ranked-emblems/Emblem_Diamond.png",Master:"/league-assets/img/ranked-emblems/Emblem_Master.png",Grandmaster:"/league-assets/img/ranked-emblems/Emblem_Grandmaster.png",Challenger:"/league-assets/img/ranked-emblems/Emblem_Challenger.png"},B={1:{rank:N,questionsAnswered:0,percentCorrect:0},2:{rank:_,questionsAnswered:3,percentCorrect:.2},3:{rank:A,questionsAnswered:6,percentCorrect:.35},4:{rank:T,questionsAnswered:9,percentCorrect:.5},5:{rank:k,questionsAnswered:12,percentCorrect:.65},6:{rank:q,questionsAnswered:15,percentCorrect:.75},7:{rank:S,questionsAnswered:20,percentCorrect:.85},8:{rank:y,questionsAnswered:25,percentCorrect:.9},9:{rank:I,questionsAnswered:30,percentCorrect:.95}},P=function(e){return O[e]},G=function(e,t){var n=0===e?0:t/e,s=[];for(var a in B){var c=B[a].questionsAnswered,r=B[a].percentCorrect;e>=c&&n>=r&&s.push(a)}var i=s.sort((function(e,t){return e-t}))[s.length-1];return B[i].rank};n(32);var L=function(e){var t=Object(s.useState)(e.questionCount),n=Object(l.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(e.correctCount),i=Object(l.a)(r,2),o=i[0],j=i[1],m=Object(s.useState)(G(a,o)),b=Object(l.a)(m,2),d=b[0],h=b[1];return Object(s.useEffect)((function(){c(e.questionCount),j(e.correctCount),h(G(e.questionCount,e.correctCount))}),[e.questionCount,e.correctCount]),Object(u.jsxs)("div",{className:"GameStatisticsDisplay",children:[Object(u.jsxs)("div",{className:"StatisticRowsContainer",children:[Object(u.jsxs)("p",{className:"StatisticRow",children:["# Questions: ",a]}),Object(u.jsxs)("p",{className:"StatisticRow",children:["# Correct: ",o]}),Object(u.jsxs)("p",{className:"StatisticRow",children:["# Incorrect: ",a-o]})]}),Object(u.jsxs)("div",{className:"RankImageAndTextContainer",children:[Object(u.jsx)("img",{className:"RankImage",src:""+E[d],alt:"Rank"}),Object(u.jsx)("div",{className:"RankText",children:d})]})]})};n(33);function D(e){var t=Object(s.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(""),i=Object(l.a)(r,2),o=i[0],j=i[1];return Object(s.useEffect)((function(){c(e.questionText),j(e.questionImage)}),[e.questionText,e.questionImage]),0===a.length?null:0===o.length?Object(u.jsx)("div",{className:"QuestionDisplay",children:Object(u.jsx)("div",{className:"QuestionText",children:a})}):Object(u.jsxs)("div",{className:"QuestionDisplay",children:[Object(u.jsx)("div",{className:"QuestionText",children:a}),Object(u.jsx)("img",{className:"QuestionImage",src:o,alt:"Question"})]})}D.defaultProps={questionImage:""};var F=D;n(34);var Q=function(e){var t=Object(s.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)([]),i=Object(l.a)(r,2),o=i[0],j=i[1],m=Object(s.useState)(!1),b=Object(l.a)(m,2),d=b[0],h=b[1];Object(s.useEffect)((function(){c(e.questionType),j(e.answerChoices),h(e.hasSelectedAnswer)}),[e.questionType,e.answerChoices,e.hasSelectedAnswer]);var p=P(a);if(0===a.length)return null;if(w.has(a))return Object(u.jsx)("div",{className:"AnswerChoicesDisplay",children:o.map((function(t,n){return Object(u.jsx)("button",{disabled:d,className:"AnswerChoiceButton",onClick:function(){return e.handleAnswerChoice(n)},children:t[p]},"choice"+n)}))});if(C.has(a)){var O=v[a];return Object(u.jsx)("div",{className:"AnswerChoicesDisplay",children:o.map((function(t,n){return Object(u.jsx)("button",{disabled:d,className:"AnswerChoiceButton",onClick:function(){return e.handleAnswerChoice(n)},children:Object(u.jsx)("img",{src:""+O+t[p],alt:"Spell"})},"choice"+n)}))})}};n(35);var M=function(e){var t,n=Object(s.useState)(""),a=Object(l.a)(n,2),c=a[0],r=a[1],i=Object(s.useState)(!1),o=Object(l.a)(i,2),j=o[0],m=o[1],b=Object(s.useState)({}),d=Object(l.a)(b,2),h=d[0],p=d[1],O=Object(s.useState)({}),x=Object(l.a)(O,2),g=x[0],f=x[1],N=Object(s.useState)({}),_=Object(l.a)(N,2),A=_[0],T=_[1];t=j?Object(u.jsx)("div",{className:"FeedbackLogoContainer",children:Object(u.jsx)("img",{className:"FeedbackLogo",src:"/victory_logo.png",alt:"Victory Logo"})}):Object(u.jsx)("div",{className:"FeedbackLogoContainer",children:Object(u.jsx)("img",{className:"FeedbackLogo",src:"/defeat_logo.png",alt:"Defeat Logo"})});var k,q,S=P(c);if(w.has(c))k=g[S],q=h[S];else if(C.has(c)){var y=v[c];k=Object(u.jsx)("img",{src:""+y+g[S],alt:"Correct"}),q=Object(u.jsx)("img",{src:""+y+h[S],alt:"Selected"})}var I,E=A.length>0?Object(u.jsx)("div",{className:"ExplanationText",children:A}):null;return I=j?Object(u.jsxs)("div",{className:"FeedbackText",children:[Object(u.jsxs)("div",{className:"AnswerTextContainer",children:[Object(u.jsx)("div",{className:"CorrectText",children:"Correct"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Your Answer:"}),Object(u.jsx)("span",{className:"CorrectAnswerText",children:k})]})]}),E]}):Object(u.jsxs)("div",{className:"FeedbackText",children:[Object(u.jsxs)("div",{className:"AnswerTextContainer",children:[Object(u.jsx)("div",{className:"IncorrectText",children:"Incorrect"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Your Answer:"}),Object(u.jsx)("span",{className:"IncorrectAnswerText",children:q})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Correct Answer:"}),Object(u.jsx)("span",{className:"CorrectAnswerText",children:k})]})]}),E]}),Object(s.useEffect)((function(){r(e.questionType),m(e.isCorrect),p(e.selectedAnswer),f(e.correctAnswer),T(e.explanation)}),[e.questionType,e.isCorrect,e.selectedAnswer,e.correctAnswer,e.explanation]),Object(u.jsxs)("div",{className:"FeedbackDisplay",children:[t,Object(u.jsxs)("div",{className:"FeedbackTextAndContinueButtonContainer",children:[I,Object(u.jsx)("button",{className:"ContinueButton",onClick:e.handleContinue,children:"Continue"})]})]})};n(36);var R=function(e){var t=Object(s.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(0),i=Object(l.a)(r,2),o=i[0],m=i[1],d=Object(s.useState)(0),h=Object(l.a)(d,2),p=h[0],O=h[1],v=Object(s.useState)(0),C=Object(l.a)(v,2),w=C[0],N=C[1],_=Object(s.useState)({}),A=Object(l.a)(_,2),T=A[0],k=A[1],q=Object(s.useState)(!1),S=Object(l.a)(q,2),y=S[0],I=S[1],E=Object(s.useState)({}),B=Object(l.a)(E,2),G=B[0],D=B[1],R=Object(s.useState)(!1),H=Object(l.a)(R,2),z=H[0],J=H[1],V=function(){c(!a)},Y=function(){fetch("/api/question").then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){var t={};t.questionType=e.questionType,t.questionText=e.questionText,t.answerChoices=e.answerChoices,t.correctAnswerIndex=e.correctAnswerIndex,t.correctAnswer=e.answerChoices[e.correctAnswerIndex],t.explanation="explanation"in e?e.explanation:"",k(t)})).catch((function(e){console.log(e)}))},K=function(e){I(!y),D(T.answerChoices[e]);var t=P(T.questionType);J(T.correctAnswer[t]===T.answerChoices[e][t])},U=function(){z?(m(o+1),O(p+1)):(m(o+1),N(w+1)),I(!1),D({}),J(!1),Y()};return Object(s.useEffect)((function(){Y()}),[]),Object(u.jsxs)("div",{className:"GameInterface",children:[Object(u.jsx)(j,{bannerText:"League of Legends Trivia"}),Object(u.jsx)("button",{className:"EndGameButton",onClick:function(){V()},children:"End Game"}),Object(u.jsx)(L,{questionCount:o,correctCount:p}),Object(u.jsxs)("div",{className:"QuestionAnswerFeedbackDisplay",children:[function(){if(0===Object.keys(T).length)return null;var e;if(f.has(T.questionType)){var t=x[T.questionType],n=g[T.questionType];e=Object(u.jsx)(F,{questionText:T.questionText,questionImage:""+t+T.correctAnswer[n]})}else e=Object(u.jsx)(F,{questionText:T.questionText,questionImage:""});var s=Object(u.jsx)(Q,{questionType:T.questionType,answerChoices:T.answerChoices,handleAnswerChoice:K,hasSelectedAnswer:y});return Object(u.jsxs)("div",{className:"QuestionAndAnswerChoicesDisplay",children:[e,s]})}(),function(){if(y)return Object(u.jsx)(M,{questionType:T.questionType,isCorrect:z,selectedAnswer:G,correctAnswer:T.correctAnswer,handleContinue:U,explanation:T.explanation})}()]}),function(){if(a)return Object(u.jsx)(b,{handleClosePopup:V})}()]})};n(37);var H=function(){var e=Object(o.e)();return Object(u.jsxs)("div",{className:"About",children:[Object(u.jsx)(j,{bannerText:"About"}),Object(u.jsx)("div",{className:"BackHomeButtonContainer",children:Object(u.jsx)("button",{className:"BackHomeButton",onClick:function(){e.push("/")},children:"Back Home"})}),Object(u.jsxs)("p",{className:"PatchText",children:["League Trivia includes data up to patch ",Object(u.jsx)("a",{href:"https://na.leagueoflegends.com/en-us/news/game-updates/patch-11-7-notes/",className:"PatchVersionText",children:"11.7"}),"."]})]})};n(38);var z=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(u.jsx)(o.a,{exact:!0,path:"/play",component:R}),Object(u.jsx)(o.a,{exact:!0,path:"/about",component:H})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),J()}},[[39,1,2]]]);
//# sourceMappingURL=main.2312093c.chunk.js.map