open Webapi.Dom;

type state = {route: Route.route};

module SiteNavLink = {
  let component = ReasonReact.statelessComponent("SiteNavLink");
  let make = (~route, ~label, _children) => {
    ...component,
    render: _self =>
      <Link className="site-nav__link" route>
        (ReasonReact.string(Words.translate(Words.English, label)))
      </Link>,
  };
};

type action =
  | ChangeRoute(Route.route);

let reducer = (action, _state) =>
  switch (action) {
  | ChangeRoute(route) => ReasonReact.Update({route: route})
  };

let component = ReasonReact.reducerComponent("App");

let make = _children => {
  ...component,
  reducer,
  initialState: () => {route: Route.Home},
  subscriptions: self => [
    Sub(
      () =>
        ReasonReact.Router.watchUrl(url =>
          self.send(ChangeRoute(url |> Route.fromUrl))
        ),
      ReasonReact.Router.unwatchUrl,
    ),
  ],
  didMount: _self =>
    Document.addEventListener(
      "scatterLoaded",
      _event => Js.log("scatter loaded"),
      document,
    ),
  render: self =>
    <div className="site-container">
      <header className="site-header">
        <Link className="site-logo" route=Route.Home>
          (ReasonReact.string("TGFP"))
        </Link>
        <nav className="site-nav">
          <SiteNavLink route=Route.Market label=Words.Market />
          <SiteNavLink route=Route.Treasury label=Words.Treasury />
          <SiteNavLink route=Route.Governance label=Words.Games />
          <SiteNavLink route=Route.Governance label=Words.Governance />
          <SiteNavLink route=Route.Stats label=Words.Stats />
        </nav>
        <nav className="user-nav">
          <a className="user-nav__login-link" href="#">
            (ReasonReact.string("Login"))
          </a>
        </nav>
      </header>
      <main className="page-container">
        (
          switch (self.state.route) {
          | Route.Home => <HomePage />
          | Route.Market => <MarketPage />
          | Route.Treasury => <TreasuryPage />
          | Route.Governance => <GovernancePage />
          | Route.Stats => <StatsPage />
          | Route.About => <AboutPage />
          }
        )
      </main>
    </div>,
};
