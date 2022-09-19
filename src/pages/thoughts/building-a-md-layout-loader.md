---
title: Building a Markdown Layout Loader
abstract: I wrote a webpack loader for wrapping markdown in layout components, here's why.
date: 2022/09/11
layout: post
tags:
  - Webpack
  - Markdown
  - Next.js
---

While building this website one of the problems I had to solve was the content management. I decided to store the posts as markdown checked into the repo, which is a pattern I've seen quite a lot with small personal blogs.

Once I had decided on using markdown, I had to deal with the processing of it. Some websites will fetch the markdown at runtime and process it in the browser. There is definitely a time and a place for this approach, but given I wanted something a bit more complex (MDX, equations, code highlighting), I thought it would be best to handle a lot of this processing at build time.

Since this site uses uses SSG, we could pop this markdown processing into getStaticProps and dangerouslySetInnerHTML the output onto a parent element. This would work great, we can wrap the generated HTML in our sites layout and it should look seamless. However, for some of the larger posts (especially those containing equations) the HTML output of the markdown processor can be a pretty huge string! I'm sure it's fine, but I didn't feel comfortable passing this huge string around as a variable.

Next.js allows us to modify the webpack config and even add additional loaders. Adding an MDX loader to the config allows us to use .md and .mdx files in our pages directory. These files will be transpiled into .js files and then through the chain of webpack loaders like the rest of the pages in the directory. That's pretty much what we want - fully compiled markdown being built by Next.js and no large strings as props. We can even deal with front-matter and other features by adding plugins to the loader. But when you do this, you might notice that all of the styling of the site is gone and only the markdown content is rendered.

The downside to this approach is that most of the methods to add your layouts to the pages are a bit messy (or at least I think so). [An example from the docs](https://nextjs.org/docs/advanced-features/using-mdx) suggests something like this,

```md
import { MyComponent, MyLayoutComponent } from 'my-components'

export const meta = {
author: 'Rich Haines'
}

# My MDX Page with a Layout

This is a list in markdown:

- One
- Two
- Three

Checkout my React component:

<MyComponent/>

export default ({ children }) => <MyLayoutComponent meta={meta}>{children}</MyLayoutComponent>
```

which I guess works, but it requires the metadata to be a JS object and I don't really want to have to copy the boilerplate into every file.

If only there was a way we could apply the layout component to each markdown file based on settings specified in the front-matter...

This is where md-layout-loader comes in. It's a markdown loader to do exactly that. Using this loader we can get the same functionality as the previous example by writing

```md
---
layout: layout-name-here
author: Danny Wray
---

# My MDX Page with a Layout

This is a list in markdown:

- One
- Two
- Three

Checkout my React component:

<MyComponent/>
```

To me that makes a big difference, I think it looks so much better without all the extra fluff surrounding it.
It's even made the markdown more reusable in the event of future migrations etc.

The [source code](https://github.com/dannywrayuk/md-layout-loader) for the loader really isn't that long, and it's probably easier to read than me explaining how it works. But at it's core it's doing what we saw above, adding the export that wraps everything in a layout. There are a couple more features I added, such as the metadata mutator function. The idea here is that you can modify the metadata of the post before the layout consumes it, maybe adding the current date at build time or something like that (but that is optional of course).

```
npm i @dannywrayuk/md-layout-loader
```

If you're interested in trying out the loader it's available via NPM. The full source is available on my github with some docs, and this site serves as a working example.
