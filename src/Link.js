// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var Route$ReactTemplate = require("./Route.js");

var component = ReasonReact.statelessComponent("Link");

function handleClick(href, $$event) {
  if ($$event.defaultPrevented) {
    return 0;
  } else {
    $$event.preventDefault();
    return ReasonReact.Router[/* push */0](href);
  }
}

function make(route, $staropt$star, children) {
  var className = $staropt$star ? $staropt$star[0] : "";
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var partial_arg = Route$ReactTemplate.toString(route);
              return ReasonReact.createDomElement("a", {
                          href: Route$ReactTemplate.toString(route),
                          className: className,
                          onClick: (function (param) {
                              return handleClick(partial_arg, param);
                            })
                        }, children);
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.handleClick = handleClick;
exports.make = make;
/* component Not a pure module */
