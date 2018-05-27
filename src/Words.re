type words =
  | Market
  | Games
  | Treasury
  | Governance
  | Stats
  | Login;

type language =
  | English
  | Spanish
  | Russian
  | Korean
  | Chinese
  | French
  | Germa
  | Dutch
  | Portuguese;

let toEnglish = words =>
  switch (words) {
  | Market => "Market"
  | Games => "Games"
  | Treasury => "Treasury"
  | Governance => "Governance"
  | Stats => "Stats"
  | Login => "Login"
  };

let translate = (language, words) =>
  switch (language) {
  | _ => toEnglish(words)
  };
