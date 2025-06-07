import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Album from "../pages/album";
import Album1 from "../pages/album1";
import Album2 from "../pages/album2";
import Album3 from "../pages/album3";
import Playlist from "../pages/playlist";
import About from "../pages/about";

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/album" component={Album} />
    <Route path="/album1" component={Album1} />
    <Route path="/album2" component={Album2} />
    <Route path="/album3" component={Album3} />
    <Route path="/playlist" component={Playlist} />
    <Route path="/about" component={About} />
  </Switch>
);
