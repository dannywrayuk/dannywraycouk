---
title: Converting YAML to JSON
abstract: Converting between YAML and JSON is harder than you think! I wrote a VS Code extension.
date: 2022/10/30
layout: post
tags:
  - YAML
  - JSON
  - VS Code
  - Extension
  - Anchor
  - Converter
---

Converting YAML to JSON is harder than you think.

Coming into this, I had quite a simple idea. I want a quick way in my IDE to convert a document between YAML and JSON.
This was mainly driven by frustration - I find the indentation of YAML files tedious and difficult to debug.
I also wanted to learn VSCode Extension development, so this seemed like a good candidate for some practice even if a tool already existed.
If you're anything like me, the idea of converting YAML to JSON and back doesn't seem like too much of a complex task, but there is a spanner in the works that you might not have considered - anchors.

Anchors are probably one of the best features of YAML. They provide a way to reference parts of a document and reduce repetition. An example of how you might use them could look something like this,

```yaml
name: &me dannywrayuk

accounts:
  twitter:
    username: *me
  github:
    username: *me
```

Here you can see that an anchor (me) has been created on the first line for the name,
this can then be referenced throughout the document. If there was ever a need to change the name in this document,
only one line would need to be updated rather than every reference to the name.
Of course, there is far more to this feature than this simple example, but for illustration purposes this is all we need to know.
Let's consider what happens when we convert this YAML into JSON using the standard YAML node package,

```json
{
  "name": "dannywrayuk",
  "accounts": {
    "twitter": "dannywrayuk",
    "github": "dannywrayuk"
  }
}
```

All the references to anchors have been replaced with their value! Not ideal. There isn't much we can do about this either -
JSON doesn't _really_ have an equivalent to anchors and so they can't be represented using a syntax.
This essentially means that YAML -> JSON -> YAML is a lossy process and doesn't recover the original document.

The lossy nature of this conversion pretty much ruined the extension I was trying to make. My intended use case was to take a YAML document, convert it to JSON and make edits, then convert back to YAML.
If the process was going to flatten the document then it wasn't going to work. Naturally, I decided to try and find a way to embed this information into the JSON and create my own conversion functions to reconstruct the anchors when converting back to YAML.

So how does this look? If we take the original YAML example I gave, this is the JSON representation after using the converter I wrote,

```json
{
  "name": "dannywrayuk",
  "accounts": {
    "twitter": "source *me",
    "github": "source *me"
  },
  "&me": "name"
}
```

You'll notice this time an extra key has appeared at the bottom. This is a definition needed for reconstruction of the anchor when converting back to YAML. The left-hand side is the anchor name, `&me` in the YAML, and the right-hand side is the key that the anchor is applied on.
The second difference here is that the references to the anchor haven't been flattened to their value, they've instead been replaced with `source *me`.

This was all achieved by hooking into the node YAML package's 'Document' object. We can recursively traverse the object tree and make the needed modifications such as adding the extra keys where necessary, or in the reverse case adding back the anchors. All before finally calling the `.toString()` method on the new object and updating the document with the changes.

After making these modifications the conversion between YAML and JSON is lossless and I can now swap between them as many times as I like. This is cool, however my main intention with this project was to learn VSCode extension development. I seem to have gotten a bit side tracked by this issue - I spent much more time learning about YAML parsing than VSCode Extensions.

Anyhow, the Extension is [available on the marketplace](https://marketplace.visualstudio.com/items?itemName=dannywrayuk.yaml-json-converter), but I don't plan on doing much with it in the future. So, I'm shelving this project for now in favour of something leaning more on the VSCode side of things.
