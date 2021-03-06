// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var Dom = require("react-instantsearch/dom");

function make(apiKey, appId, indexName, children) {
  return ReasonReact.wrapJsForReason(Dom.InstantSearch, {
              apiKey: apiKey,
              appId: appId,
              indexName: indexName
            }, children);
}

var InstantSearch = /* module */[/* make */make];

function make$1(children) {
  return ReasonReact.wrapJsForReason(Dom.Stats, /* () */0, children);
}

var Stats = /* module */[/* make */make$1];

function make$2($staropt$star, children) {
  var searchAsYouType = $staropt$star ? $staropt$star[0] : true;
  return ReasonReact.wrapJsForReason(Dom.SearchBox, {
              searchAsYouType: searchAsYouType
            }, children);
}

var SearchBox = /* module */[/* make */make$2];

function make$3(hitComponent, children) {
  return ReasonReact.wrapJsForReason(Dom.Hits, {
              hitComponent: hitComponent
            }, children);
}

var Hits = /* module */[/* make */make$3];

function make$4(children) {
  return ReasonReact.wrapJsForReason(Dom.Pagination, /* () */0, children);
}

var Pagination = /* module */[/* make */make$4];

function make$5(attributes, children) {
  return ReasonReact.wrapJsForReason(Dom.HierarchicalMenu, {
              attributes: attributes
            }, children);
}

var HierarchicalMenu = /* module */[/* make */make$5];

function make$6(attributes, children) {
  return ReasonReact.wrapJsForReason(Dom.Breadcrumb, {
              attributes: attributes
            }, children);
}

var Breadcrumb = /* module */[/* make */make$6];

function make$7(attribute, hit, children) {
  return ReasonReact.wrapJsForReason(Dom.Highlight, {
              attribute: attribute,
              hit: hit
            }, children);
}

var Highlight = /* module */[/* make */make$7];

function make$8(items, defaultRefinement, children) {
  return ReasonReact.wrapJsForReason(Dom.SortBy, {
              items: items,
              defaultRefinement: defaultRefinement
            }, children);
}

var SortBy = /* module */[/* make */make$8];

exports.InstantSearch = InstantSearch;
exports.Stats = Stats;
exports.SearchBox = SearchBox;
exports.Hits = Hits;
exports.Pagination = Pagination;
exports.HierarchicalMenu = HierarchicalMenu;
exports.Breadcrumb = Breadcrumb;
exports.Highlight = Highlight;
exports.SortBy = SortBy;
/* ReasonReact Not a pure module */
