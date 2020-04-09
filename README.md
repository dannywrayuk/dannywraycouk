# Overview

This repo contains the react app hosted as a static site via aws at dannywray.co.uk. It was initally built using [create-react-app](https://github.com/facebook/create-react-app) then later ejected to accomidate changes to the webpack config.


# Coding Convention

## Style
For the most part the code follows the [Airbnb React/JSX Style](https://airbnb.io/javascript/react/) with a few notable exceptions seen in `.eslintrc.json`:

### Prefer Arrow function declarations

Airbnb reccomend:
```javascript
    function Something({ hello }) {
    return <div>{hello}</div>;
    }
```
However, I prefer 
```javascript
    const Something = ({ hello }) => (
        <div>
            {hello}
        </div>
    );
```

## Naming

* Components use PascalCase.
* Props use camelCase.
* CSS classes use camelCase.
* CSS variables use PascalCase.

## Importing Components

While I'm not super strict on this, imported files should preserve their filename.
```javascript
\\Good
import Something from './Something';

\\Bad
import Spaghetti from './Something'
```


## Components
React components should share the same name as both the file and the directory they are in. As of [Airbnb React/JSX Style](https://airbnb.io/javascript/react/) there should typically only be one component per file, however, im not too strict on this and dont mind having multiple of the same family in one file (see `_organisms/Card`). An example stateless component:
```javascript
import React from 'react';
import PropTypes from 'prop-types';

import style from './Something.css';

const Something = ({ hello }) => (
    <div>
        {hello}
    </div>
);

Something.propTypes = {
    hello: PropTypes.string,
}

Something.defaultProps = {
    hello: 'yeet',
}

export default Something;
```

## File Structure
All React code should be contained within the `src/` directory. The Components follow the [Atomic Design](https://atomicdesign.bradfrost.com/) convention.

### Barrel Files
To avoid ugly imports such as 
```javascript
 import Something from './Something/Something.js'
 ```
Barrel files are used at the root of directories which export the required content as either a default or as a named export. An example barrel would be :

`index.js`
```javascript
export { default } from ./Something.js;
```
And simplifyign the imports to only require the name of the component (etc) once.

### Components
For a component named `Something`  in the `_atoms/` directory (for example) the file structure should be:

    components/
    └──_atoms/
        └── Something/
            ├── Something.js
            ├── Something.css
            └── index.js

Notice that the Directory, .js and .css files all share the same name and casing as the component.

For a component with multiple presentations (PartA and PartB) the directory is split into a container and presentation directory with a barrel file pointing to the contianer:

    components/
    └──_atoms/
        └── Something/
            ├── index.js
            ├── container/
            |   └── Something.js
            └── presentation/
                ├── SomethingPartA/
                |   ├── SomethingPartA.js
                |   ├── SomethingPartA.css
                |   └── index.js
                └── SomethingPartB/
                    ├── SomethingPartB.js
                    ├── SomethingPartB.css
                    └── index.js

There should be no blank css files. In any of these cases if no css is required the file should be removed not left blank.