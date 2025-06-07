import * as React from "react";

export default function Album() {
  return (
    <div className="">
      <div className="albumtitle1">
        <div className="albumtitlenormal">
          <h2>VIEW</h2>
        </div>
        <div className="albumtitleitalic">
          <h2>ALL</h2>
        </div>
        <div className="albumtitlenormal">
          <h2>ALBUMS HERE</h2>
        </div>
      </div>

      <div className="albumtitle1">
        <div className="albumtitlenormal">
          <h2>don</h2>
        </div>
        <div className="albumtitlenormal">
          <h2>'t forget to</h2>
        </div>
        <div className="albumtitlenormal">
          <h2>check out our</h2>
        </div>
        <div className="albumtitleitalic">
          <h2>latest</h2>
        </div>
      </div>

      <div className="albumtitle1">
        <div className="albumtitleitalic">
          <h2>Album: SNQAOUD</h2>
        </div>
      </div>

      <div className="albumalbums">
        <a href="/album1">
          <div className="albumalbum1">
            <img src="https://cdn.glitch.global/1cf3e81f-e2aa-41e7-964b-ac8757fc7a6d/album%20for%20children.png?v=1701256740939"></img>
          </div>
        </a>
        <a href="/album2">
          <div className="albumalbum2">
            <img src="https://cdn.glitch.global/1cf3e81f-e2aa-41e7-964b-ac8757fc7a6d/Album2%20album%20of%20water.png?v=1701709974544"></img>
          </div>
        </a>
        <a href="/album3">
          <div className="albumalbum3">
            <img src="https://cdn.glitch.global/1cf3e81f-e2aa-41e7-964b-ac8757fc7a6d/Album3CoverStill.png?v=1702386608704"></img>
          </div>
        </a>
      </div>
    </div>
  );
}
