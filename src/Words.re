type words =
  | Market
  | Games
  | Treasury
  | Governance
  | Stats
  | Login
  | Upload;

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
  | Market => "Trade"
  | Games => "Play"
  | Treasury => "Treasury"
  | Governance => "Vote"
  | Stats => "Stats"
  | Login => "Login"
  | Upload => "Upload"
  };

let translate = (language, words) =>
  switch (language) {
  | _ => toEnglish(words)
  };
