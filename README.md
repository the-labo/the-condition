the-condition
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-condition
[bd_travis_url]: http://travis-ci.org/the-labo/the-condition
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-condition.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-condition
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-condition.svg?token=
[bd_license_url]: https://github.com/the-labo/the-condition/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/the-labo/the-condition
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/the-labo/the-condition.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/the-labo/the-condition.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/the-labo/the-condition
[bd_gemnasium_shield_url]: https://gemnasium.com/the-labo/the-condition.svg
[bd_npm_url]: http://www.npmjs.org/package/the-condition
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-condition.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Conditional renderer for the-components

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-condition --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

import React from 'react'
import { TheCondition, TheConditionStyle } from 'the-condition'

class ExampleComponent extends React.PureComponent {
  render () {
    const value = 1
    return (
      <div>
        <TheConditionStyle/>
        <TheCondition if={value === 1}>
          <div>Will b render if the condition is true</div>
        </TheCondition>
        <TheCondition unless={value === 1}>
          <div>Will be rendered unless the condition is true</div>
        </TheCondition>
      </div>

    )
  }
}

export default ExampleComponent

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Components.md.hbs" Start -->

<a name="section-doc-guides-03-components-md"></a>

Components
-----------

### TheCondition

Conditional renderer for the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `if` | bool  |  | `null` |
| `unless` | bool  |  | `null` |
| `someOf` | arrayOf bool |  | `null` |
| `allOf` | arrayOf bool |  | `null` |

### TheConditionStyle

Style for TheCondition

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `options` | object  | Style options | `{}` |



<!-- Section from "doc/guides/03.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-condition/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][t_h_e_labo_url]

[t_h_e_labo_url]: https://github.com/the-labo

<!-- Links End -->
