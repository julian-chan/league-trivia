(this["webpackJsonpleague-trivia"]=this["webpackJsonpleague-trivia"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(16),r=n.n(a),i=(n(22),n(10)),o=n(3),l=(n(23),n(0));var u=function(e){return Object(l.jsx)("div",{className:"MainBanner",children:"League of Legends Trivia"})};n(25);var j=function(){var e=Object(o.e)();return Object(l.jsxs)("div",{className:"Home",children:[Object(l.jsx)(u,{}),Object(l.jsx)("button",{className:"PlayButton",onClick:function(){e.push("/play")},children:"Play!"})]})},m=n(2);n(31);var d=function(e){var t=Object(o.e)();return Object(l.jsx)("div",{className:"ConfirmEndGamePopup",children:Object(l.jsxs)("div",{className:"ConfirmEndGamePopupBox",children:[Object(l.jsx)("div",{className:"ConfirmEndGamePopupText",children:"Are you sure you want to end the game?"}),Object(l.jsx)("button",{className:"ConfirmEndGamePopupButton",onClick:function(){e.handleClosePopup(),t.push("/")},children:"End Game"}),Object(l.jsx)("button",{className:"ConfirmEndGamePopupButton",onClick:function(){e.handleClosePopup()},children:"Go Back"})]})})},b="champion_name",p="item_name",h="rune_to_tree_assoc",O={champion_name:"championName",item_name:"itemName",rune_to_tree_assoc:"runeName",passive_to_champion_assoc:"passiveImage",spell_to_champion_assoc:"spellImage",odd_spell_out:"spellImage"},x={champion_name:"/league-assets/img/champion/",item_name:"/league-assets/img/item/",rune_to_tree_assoc:"/league-assets/img/",passive_to_champion_assoc:"/league-assets/img/champion/",spell_to_champion_assoc:"/league-assets/img/champion/"},g={champion_name:"championImage",item_name:"itemImage",rune_to_tree_assoc:"runeTreeIcon",passive_to_champion_assoc:"championImage",spell_to_champion_assoc:"championImage"},f=new Set(Object.keys(x)),C={passive_to_champion_assoc:"/league-assets/img/passive/",spell_to_champion_assoc:"/league-assets/img/spell/",odd_spell_out:"/league-assets/img/spell/"},v=new Set(Object.keys(C)),w=new Set([b,p,h]),_="Iron",N="Bronze",A="Silver",k="Gold",q="Platinum",T="Diamond",S="Master",y="Grandmaster",I="Challenger",E={Iron:"/league-assets/img/ranked-emblems/Emblem_Iron.png",Bronze:"/league-assets/img/ranked-emblems/Emblem_Bronze.png",Silver:"/league-assets/img/ranked-emblems/Emblem_Silver.png",Gold:"/league-assets/img/ranked-emblems/Emblem_Gold.png",Platinum:"/league-assets/img/ranked-emblems/Emblem_Platinum.png",Diamond:"/league-assets/img/ranked-emblems/Emblem_Diamond.png",Master:"/league-assets/img/ranked-emblems/Emblem_Master.png",Grandmaster:"/league-assets/img/ranked-emblems/Emblem_Grandmaster.png",Challenger:"/league-assets/img/ranked-emblems/Emblem_Challenger.png"},G={1:{rank:_,questionsAnswered:0,percentCorrect:0},2:{rank:N,questionsAnswered:3,percentCorrect:.2},3:{rank:A,questionsAnswered:6,percentCorrect:.35},4:{rank:k,questionsAnswered:9,percentCorrect:.5},5:{rank:q,questionsAnswered:12,percentCorrect:.65},6:{rank:T,questionsAnswered:15,percentCorrect:.75},7:{rank:S,questionsAnswered:20,percentCorrect:.85},8:{rank:y,questionsAnswered:25,percentCorrect:.9},9:{rank:I,questionsAnswered:30,percentCorrect:.95}},B=function(e){return O[e]},P=function(e,t){var n=0===e?0:t/e,s=[];for(var c in G){var a=G[c].questionsAnswered,r=G[c].percentCorrect;e>=a&&n>=r&&s.push(c)}var i=s.sort((function(e,t){return e-t}))[s.length-1];return G[i].rank};n(32);var D=function(e){var t=Object(s.useState)(e.questionCount),n=Object(m.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(e.correctCount),i=Object(m.a)(r,2),o=i[0],u=i[1],j=Object(s.useState)(P(c,o)),d=Object(m.a)(j,2),b=d[0],p=d[1];return Object(s.useEffect)((function(){a(e.questionCount),u(e.correctCount),p(P(e.questionCount,e.correctCount))}),[e.questionCount,e.correctCount]),Object(l.jsxs)("div",{className:"GameStatisticsDisplay",children:[Object(l.jsxs)("div",{className:"StatisticRowsContainer",children:[Object(l.jsxs)("p",{className:"StatisticRow",children:["# Questions: ",c]}),Object(l.jsxs)("p",{className:"StatisticRow",children:["# Correct: ",o]}),Object(l.jsxs)("p",{className:"StatisticRow",children:["# Incorrect: ",c-o]})]}),Object(l.jsxs)("div",{className:"RankImageAndTextContainer",children:[Object(l.jsx)("img",{className:"RankImage",src:""+E[b],alt:"Rank"}),Object(l.jsx)("div",{className:"RankText",children:b})]})]})};n(33);function F(e){var t=Object(s.useState)(""),n=Object(m.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(""),i=Object(m.a)(r,2),o=i[0],u=i[1];return Object(s.useEffect)((function(){a(e.questionText),u(e.questionImage)}),[e.questionText,e.questionImage]),0===c.length?null:0===o.length?Object(l.jsx)("div",{className:"QuestionDisplay",children:Object(l.jsx)("div",{className:"QuestionText",children:c})}):Object(l.jsxs)("div",{className:"QuestionDisplay",children:[Object(l.jsx)("div",{className:"QuestionText",children:c}),Object(l.jsx)("img",{className:"QuestionImage",src:o,alt:"Question"})]})}F.defaultProps={questionImage:""};var L=F;n(34);var Q=function(e){var t=Object(s.useState)(""),n=Object(m.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)([]),i=Object(m.a)(r,2),o=i[0],u=i[1],j=Object(s.useState)(!1),d=Object(m.a)(j,2),b=d[0],p=d[1];Object(s.useEffect)((function(){a(e.questionType),u(e.answerChoices),p(e.hasSelectedAnswer)}),[e.questionType,e.answerChoices,e.hasSelectedAnswer]);var h=B(c);if(0===c.length)return null;if(w.has(c))return Object(l.jsx)("div",{className:"AnswerChoicesDisplay",children:o.map((function(t,n){return Object(l.jsx)("button",{disabled:b,className:"AnswerChoiceButton",onClick:function(){return e.handleAnswerChoice(n)},children:t[h]},"choice"+n)}))});if(v.has(c)){var O=C[c];return Object(l.jsx)("div",{className:"AnswerChoicesDisplay",children:o.map((function(t,n){return Object(l.jsx)("button",{disabled:b,className:"AnswerChoiceButton",onClick:function(){return e.handleAnswerChoice(n)},children:Object(l.jsx)("img",{src:""+O+t[h],alt:"Spell"})},"choice"+n)}))})}};n(35);var R=function(e){var t,n=Object(s.useState)(""),c=Object(m.a)(n,2),a=c[0],r=c[1],i=Object(s.useState)(!1),o=Object(m.a)(i,2),u=o[0],j=o[1],d=Object(s.useState)({}),b=Object(m.a)(d,2),p=b[0],h=b[1],O=Object(s.useState)({}),x=Object(m.a)(O,2),g=x[0],f=x[1],_=Object(s.useState)({}),N=Object(m.a)(_,2),A=N[0],k=N[1];t=u?Object(l.jsx)("div",{className:"FeedbackLogoContainer",children:Object(l.jsx)("img",{className:"FeedbackLogo",src:"/victory_logo.png",alt:"Victory Logo"})}):Object(l.jsx)("div",{className:"FeedbackLogoContainer",children:Object(l.jsx)("img",{className:"FeedbackLogo",src:"/defeat_logo.png",alt:"Defeat Logo"})});var q,T,S=B(a);if(w.has(a))q=g[S],T=p[S];else if(v.has(a)){var y=C[a];q=Object(l.jsx)("img",{src:""+y+g[S],alt:"Correct"}),T=Object(l.jsx)("img",{src:""+y+p[S],alt:"Selected"})}var I,E=A.length>0?Object(l.jsx)("div",{className:"ExplanationText",children:A}):null;return I=u?Object(l.jsxs)("div",{className:"FeedbackText",children:[Object(l.jsxs)("div",{className:"AnswerTextContainer",children:[Object(l.jsx)("div",{className:"CorrectText",children:"Correct"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Your Answer:"}),Object(l.jsx)("span",{className:"CorrectAnswerText",children:q})]})]}),E]}):Object(l.jsxs)("div",{className:"FeedbackText",children:[Object(l.jsxs)("div",{className:"AnswerTextContainer",children:[Object(l.jsx)("div",{className:"IncorrectText",children:"Incorrect"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Your Answer:"}),Object(l.jsx)("span",{className:"IncorrectAnswerText",children:T})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Correct Answer:"}),Object(l.jsx)("span",{className:"CorrectAnswerText",children:q})]})]}),E]}),Object(s.useEffect)((function(){r(e.questionType),j(e.isCorrect),h(e.selectedAnswer),f(e.correctAnswer),k(e.explanation)}),[e.questionType,e.isCorrect,e.selectedAnswer,e.correctAnswer,e.explanation]),Object(l.jsxs)("div",{className:"FeedbackDisplay",children:[t,Object(l.jsxs)("div",{className:"FeedbackTextAndContinueButtonContainer",children:[I,Object(l.jsx)("button",{className:"ContinueButton",onClick:e.handleContinue,children:"Continue"})]})]})};n(36);var M=function(e){var t=Object(s.useState)(!1),n=Object(m.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(0),i=Object(m.a)(r,2),o=i[0],j=i[1],b=Object(s.useState)(0),p=Object(m.a)(b,2),h=p[0],O=p[1],C=Object(s.useState)(0),v=Object(m.a)(C,2),w=v[0],_=v[1],N=Object(s.useState)({}),A=Object(m.a)(N,2),k=A[0],q=A[1],T=Object(s.useState)(!1),S=Object(m.a)(T,2),y=S[0],I=S[1],E=Object(s.useState)({}),G=Object(m.a)(E,2),P=G[0],F=G[1],M=Object(s.useState)(!1),z=Object(m.a)(M,2),J=z[0],Y=z[1],H=function(){a(!c)},V=function(){fetch("/api/question").then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){var t={};t.questionType=e.questionType,t.questionText=e.questionText,t.answerChoices=e.answerChoices,t.correctAnswerIndex=e.correctAnswerIndex,t.correctAnswer=e.answerChoices[e.correctAnswerIndex],t.explanation="explanation"in e?e.explanation:"",q(t)})).catch((function(e){console.log(e)}))},K=function(e){I(!y),F(k.answerChoices[e]);var t=B(k.questionType);Y(k.correctAnswer[t]===k.answerChoices[e][t])},U=function(){J?(j(o+1),O(h+1)):(j(o+1),_(w+1)),I(!1),F({}),Y(!1),V()};return Object(s.useEffect)((function(){V()}),[]),Object(l.jsxs)("div",{className:"GameInterface",children:[Object(l.jsx)(u,{}),Object(l.jsx)("button",{className:"EndGameButton",onClick:function(){H()},children:"End Game"}),Object(l.jsx)(D,{questionCount:o,correctCount:h}),Object(l.jsxs)("div",{className:"QuestionAnswerFeedbackDisplay",children:[function(){if(0===Object.keys(k).length)return null;var e;if(f.has(k.questionType)){var t=x[k.questionType],n=g[k.questionType];e=Object(l.jsx)(L,{questionText:k.questionText,questionImage:""+t+k.correctAnswer[n]})}else e=Object(l.jsx)(L,{questionText:k.questionText,questionImage:""});var s=Object(l.jsx)(Q,{questionType:k.questionType,answerChoices:k.answerChoices,handleAnswerChoice:K,hasSelectedAnswer:y});return Object(l.jsxs)("div",{className:"QuestionAndAnswerChoicesDisplay",children:[e,s]})}(),function(){if(y)return Object(l.jsx)(R,{questionType:k.questionType,isCorrect:J,selectedAnswer:P,correctAnswer:k.correctAnswer,handleContinue:U,explanation:k.explanation})}()]}),function(){if(c)return Object(l.jsx)(d,{handleClosePopup:H})}()]})};n(37);var z=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:j}),Object(l.jsx)(o.a,{exact:!0,path:"/play",component:M})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(z,{})}),document.getElementById("root")),J()}},[[38,1,2]]]);
//# sourceMappingURL=main.cf6a337b.chunk.js.map