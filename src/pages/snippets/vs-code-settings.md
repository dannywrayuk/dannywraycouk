---
title: My VS Code Setup
abstract: A copy of my vscode settings and favourite extensions.
date: 2022/07/11
layout: post
tags:
  - Snippet
  - VS Code
keywords:
  - settings
  - visual studio code
  - extension
---

There have been a few times now, either setting up a new laptop or helping out a friend, where I've needed a copy of my vscode settings. But when I dig into my settings it's hard to tell which ones are important, and I typically end up missing some.

I thought I'd do my future self a favour and create a reference copy of settings, along with some of the extensions I like.

## settings.json

```json
{
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,

  "editor.formatOnSave": true,
  "files.trimTrailingWhitespace": true,
  "diffEditor.ignoreTrimWhitespace": false,

  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,

  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": true,

  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "git.confirmSync": false,

  "editor.hover.enabled": false,
  "terminal.integrated.tabs.enabled": false,

  "files.associations": {
    "*.mdx": "markdown",
    "*.snap": "javascript"
  },
  "[markdown]": {
    "editor.wordWrap": "off"
  },
  "extensions.ignoreRecommendations": true,

  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "projectManager.git.baseFolders": ["~/Documents"],

  "workbench.panel.defaultLocation": "right",
  "workbench.editor.untitled.hint": "hidden"
}
```

## Extensions

|                                                     | Extension                                | Description                                                                                           |
| --------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| ![prettier icon][prettier-icon]                     | [Prettier][prettier]                     | The preferred code formatter for the majority of web languages.                                       |
| ![Code Spell Checker icon][code-spell-checker-icon] | [Code Spell Checker][code-spell-checker] | Surprisingly helpful spellchecker. It's aware of variable casing which is neat.                       |
| ![Git Lens icon][git-lens-icon]                     | [GitLens][git-lens]                      | Adds extra source control features. I use this because enjoy having the commit log built into vscode. |
| ![Project Manager icon][project-manager-icon]       | [Project Manager][project-manager]       | An absolute essential. Adds a pane of git projects allowing you to quickly switch between them.       |
| ![Auto Rename Tag icon][auto-rename-tag-icon]       | [Auto Rename Tag][auto-rename-tag]       | Renames the closing tag when you change the opening tag in html and JSX.                              |
| ![Error Lens icon][error-lens-icon]                 | [Error Lens][error-lens]                 | Shows errors and warnings inline with the code, on the line that caused it.                           |

[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[prettier-icon]: https://raw.githubusercontent.com/prettier/prettier/24d39a906834cf449304dc684b280a5ca9a0a6d7/website/static/icon.png
[code-spell-checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[code-spell-checker-icon]: https://raw.githubusercontent.com/streetsidesoftware/vscode-spell-checker/67fd51f7436b10a1f04f6d2783d2688b76f3fe81/images/SpellCheck.png
[git-lens]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[git-lens-icon]: https://raw.githubusercontent.com/gitkraken/vscode-gitlens/914a2d0817794d188d710c0729577e099358b40c/images/gitlens-icon.png
[project-manager]: https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager
[project-manager-icon]: https://raw.githubusercontent.com/alefragnani/vscode-project-manager/4e8b7ddf030ed005aaca9393c67f28d7ca9f4b19/images/icon.png
[auto-rename-tag]: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag
[auto-rename-tag-icon]: https://raw.githubusercontent.com/formulahendry/vscode-auto-rename-tag/f3039ed7263c5ab94c6e2fa9995d3ad265ebc822/images/logo.png
[error-lens]: https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens
[error-lens-icon]: https://raw.githubusercontent.com/usernamehw/vscode-error-lens/c0b50521e5d14fb7d56608d5b430df92097ddd80/img/icon.png
