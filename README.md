# Gleam language support in Atom 💫

Available in Atom packages: https://atom.io/packages/language-gleam

### Features:

- 🎨 Syntax highlighting for Gleam source.
- 👔 Optionally run `gleam format` on save.
- 🧬 Snippets for common Gleam constructs.

![highlighting demo](https://github.com/itsgreggreg/language-gleam/blob/master/images/highlighting_demo.jpg?raw=true)

## Installation

For formatting to work you must have `gleam` installed on your computer.
Follow these instructions for installing `gleam`: https://gleam.run/getting-started/

You can get this package on [Atom's Package Manager](https://atom.io/packages/language-gleam).

1. Open up Atom
1. Press `CTRL + Shift + P` inside Atom
1. Type `install package` and press enter.
1. In the search bar type `gleam` and press enter.
1. Press `Install` on the `language-gleam` package.

## Settings

To access setings for this package click on:

`Preferences -> Pagkages -> type language-gleam -> Settings`

### Format on Save

`format_on_save` is on for all gleam files by default, you can change this
by opening the package settings and un-checking `Format On Save`.

### Gleam executable absolute path

This package will try to find `gleam` automatically in your system but in case
it can't or you want to use a specific version of `gleam`, change the
`Executable` option in the settings panel to be the location of the `gleam`
executable on your computer.

If you know `gleam` is installed but formatting is not working, try running
`which gleam` in the terminal and pasting the output of that command into
`Executable`.

### Contributions:

Are welcome and appreciated! Please fork this repository and open a pull request to add snippets, make highlighter tweaks, etc.

Uses [tree-sitter-gleam](https://gitlab.com/greggreg/tree-sitter-gleam).
