// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';


function toEnglish(words) {
  switch (words) {
    case 0 : 
        return "Market";
    case 1 : 
        return "Games";
    case 2 : 
        return "Treasury";
    case 3 : 
        return "Governance";
    case 4 : 
        return "Stats";
    case 5 : 
        return "Login";
    
  }
}

function translate(_, words) {
  return toEnglish(words);
}

exports.toEnglish = toEnglish;
exports.translate = translate;
/* No side effect */
