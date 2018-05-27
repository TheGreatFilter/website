let component = ReasonReact.statelessComponent("MarketPage");

[@bs.deriving abstract]
type hit = {
  id: string,
  name: string,
};

[@bs.deriving abstract]
type hitResult = {
  hit: hit,
};

let hitComponent = hitResult => {
  let hit = hitResult |. hit;
  Js.log(hit);
 <div className="hit">
    <h3>
      <Algolia.Highlight attribute="name" hit />
    </h3>
  </div>;
};

/*

 Categories

 */
let make = _children => {
  ...component,
  render: _self =>
    <div className="market-page">
      <aside className="market-page__filters">
        <h2> (ReasonReact.string("Filters")) </h2>
      </aside>
      <main className="market-page__results">
        <Algolia.InstantSearch
          appId="X0210UMLR1"
          apiKey="5085ce346201999ee5e28e32380ceab1"
          className="neato"
          indexName="dev_market">
          <Algolia.Breadcrumb
            attributes=[|"category.lvl0", "category.lvl1"|]
          />
          <Algolia.HierarchicalMenu
            attributes=[|"category.lvl0", "category.lvl1"|]
          />
          <Algolia.SearchBox />
          <Algolia.Stats />
          <Algolia.Hits hitComponent />
        </Algolia.InstantSearch>
      </main>
    </div>,
};
