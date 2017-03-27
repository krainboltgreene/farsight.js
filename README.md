# farsight

[![Greenkeeper badge](https://badges.greenkeeper.io/krainboltgreene/farsight.js.svg)](https://greenkeeper.io/)

Ever paste a URL into a comment field and see a preview of that website? This library gives you that feature.

This library works on any platform that can make HTTP requests.

Given a URI it returns information.

Works for these websites:

  - [ ] amazon product pages
  - [ ] wikipedia pages
  - [ ] wikipedia users
  - [ ] google searches
  - [ ] facebook pages
  - [ ] twitter tweets
  - [ ] twitter moments
  - [ ] images
  - [ ] videos
  - [ ] github repositories
  - [ ] github users
  - [ ] github organizations
  - [ ] github issues
  - [ ] github pull requests
  - [ ] github wiki pages
  - [ ] youtube video pages
  - [ ] youtube user pages
  - [ ] stackoverflow question
  - [ ] stackoverflow user

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]


## using

``` javascript
import {prop} from "ramda"
import farsight from "farsight"

farsight({uri: "https://example.com"})
  .then(prop("title"))
  .then(console.log) // "Example Website"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/farsight.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/farsight.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/farsight.js.svg?maxAge=2592000&style=flat-square
