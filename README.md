# remark-preset-lint-styleguide

This package helps you maintain good quality Markdown.

- *Source text* is readable, easy to write and easy to edit.
- *Output* is consistent across different Markdown implementations (portable).

This [remark][] preset includes the [remark-lint][] plug-in and all "[official rules][]".

The rules are configured based on various style guides, such as [Markdown Style Guide][] by [Ciro Santilli][], [Google documentation guide][] and [CommonMark][] specification.

## Table of contents

-   [Installation and Usage](#installation-and-usage)

    - [Local installation](#local-installation)
    - [Programmatic usage](#programmatic-usage)

-   [Presets](#presets)

    - [Default preset](#default-preset)
    - [`writability` preset](#writability-preset)
    - [`readability` preset](#readability-preset)

-   [Configuration](#configuration)

    - [Override rules](#override-rules)
    - [Configuration comments](#configuration-comments)
    - [External rules](#external-rules)

-   [Help](#help)

-   [Issues](#issues)

-   [License](#license)

## Installation and Usage

### Local installation

If you want to lint the Markdown files from a project, the recommended way is to [install][npm install] this package as a [development dependency][] via [npm][]. Requires [`remark-cli`][remark-cli package].

```bash
npm install --save-dev remark-cli remark-preset-lint-styleguide
```

Then, add the [`remarkConfig`][unified-engine configure] field in your [`package.json`][package.json] file.

```json
"remarkConfig": {
  "plugins": [
    "remark-preset-lint-styleguide"
  ]
}
```

Alternatively, you can create a [`.remarkrc`][unified-engine configure] file in the root of your project and put the configuration there.

```json
{
  "plugins": [
    "remark-preset-lint-styleguide"
  ]
}
```

Next, you need to setup a [npm script][npm run-script] to lint Markdown files. See the [remark-cli package][] for more information on all available options.

```json
"scripts": {
  "lint-md": "remark ."
}
```

Run the script from the command-line.

```bash
npm run lint-md
```

----------

You can tell **remark** to ignore certain files or folders by creating a [`.remarkignore`][unified-engine ignore] file in the root of your project. The format is the same as for [`.gitignore`][gitignore] files.

Alternatively, you can use any file that follows the standard ignore file format. You can even use your `.gitignore` file.

```json
"scripts": {
  "lint-md": "remark --ignore-path .gitignore ."
}
```

### Programmatic usage

If you want to lint Markdown inside a [Node.js module][], you need to [install][npm install] this package as a project [dependency][] via [npm][]. Requires [`remark`][remark package].

```bash
npm install --save remark remark-preset-lint-styleguide vfile-reporter
```

If you want to use it inside your project's custom build script, you should [install][npm install] this package as a [development dependency][] via [npm][]. Requires [`remark`][remark package].

```bash
npm install --save-dev remark remark-preset-lint-styleguide vfile-reporter
```

Quick example:

```javascript
const fs = require('fs');
const remark = require('remark');
const styleguide = require('remark-preset-lint-styleguide');
const report = require('vfile-reporter');

const myFile = fs.readFileSync('my-awesome-article.md', 'utf8');

let output = remark().use(styleguide).processSync(myFile);

console.log(report(output));
```

The [remark package][] interface is provided by the [unified package][]. See the documentation of both projects in order to get a better understanding of the API.

## Presets

This package exposes multiple presets, each with it's own set of rules based on a style guide.

If you want to use a preset besides the *default* one, you have to append to the package name a slash (`/`) followed by the preset name. Example: `remark-preset-lint-styleguide/writability`.

Use the `writability` preset inside the `remarkConfig` field.

```json
"remarkConfig": {
  "plugins": [
    "remark-preset-lint-styleguide/writability"
  ]
}
```

Use the `writability` preset with the **remark** API.

```javascript
const fs = require('fs');
const remark = require('remark');
const styleguideWritability = require('remark-preset-lint-styleguide/writability');
const report = require('vfile-reporter');

const myFile = fs.readFileSync('my-awesome-article.md', 'utf8');

let output = remark().use(styleguideWritability).processSync(myFile);

console.log(report(output));
```

### Default preset

It is mostly based on the [writability profile][] from the [Markdown Style Guide][] by [Ciro Santilli][], which uses the following options:

- `wrap:no`
- `list-marker:hyphen`
- `code:fenced`

It also has an opinionated horizontal rule style of ten hyphens: `----------`.

#### Reasons behind certain choices

##### No hard wrapping

Instead, enable the editor's `soft wrap` or `word wrap` option for Markdown files.

See "[Difference between hard wrap and soft wrap?](http://stackoverflow.com/questions/319925/difference-between-hard-wrap-and-soft-wrap)" on Stack Overflow.

- It's easier to write and edit without constantly having to maintain a specific line length.
- It's easier to copy and paste text because you can select the whole paragraph without extra line breaks.
- A modified paragraph always shows up as a single `diff` line.
- Text, unlike code, still looks good when it's soft wrapped, so readability is not affected.
- Non-tech users are accustomed to this behavior from other popular word processors.

##### Horizontal rule

- improved visibility
- still easy to remember and write

### `writability` preset

It implements the [writability profile][] from the [Markdown Style Guide][] by [Ciro Santilli][], which uses the following options:

- `wrap:no`
- `list-marker:hyphen`
- `code:fenced`

### `readability` preset

It implements the [readability profile][] from the [Markdown Style Guide][] by [Ciro Santilli][], which uses the following options:

- `wrap:space`
- `list-marker:asterisk`
- `code:indented`

## Configuration

Because all "[official rules][]" are already included, they can be easily used without having to first install their respective package.

Each rule can be configured with a severity level:

- `off`: turn the rule off
- `warn`: show a warning for problems (exit code is 0, lint passes). Used by optional rules that might have a valid edge case.
- `error`: trigger an error for problems (exit code is 1, lint fails). Used by rules that enforce correct syntax, best practices or portability.

### Override rules

Start your configuration with one of the presets and then modify certain rules to better suit your needs.

<!-- TODO: After error is solved in remark-lint -> Each rule can have a severity level and an optional configuration parameter. -->

```json
"remarkConfig": {
  "plugins": [
    "remark-preset-lint-styleguide",
    ["remark-lint-no-html", false]
  ]
}
```

### Configuration comments

You can use configuration comments to turn all or certain rules on or off inside a file. Note that you cannot change their setting, only whether messages for that rule are shown or hidden. See the [remark-message-control][] package for more information.

To disable all **remark-lint** rules for an entire file, put the comment at the top of the file.

```markdown
<!-- lint disable -->

# Heading

Paragraph.

* list item 1
* list item 2
* list item 3
```

Disable certain rules for an entire file.

```markdown
<!-- lint disable no-html unordered-list-marker-style -->

# Heading

<img src="cover.png">

Paragraph.

* list item 1
* list item 2
* list item 3
```

Disable certain rules only for a section of text.

```markdown
# Heading

<!-- lint disable no-html unordered-list-marker-style -->

<img src="cover.png">

* list item 1
* list item 2
* list item 3

<!-- lint enable no-html unordered-list-marker-style -->

Paragraph.

- list item 1
- list item 2
- list item 3
```

Disable certain rules only for the next node.

```markdown
# Heading

<!-- lint ignore no-html -->

<img src="cover.png">

Paragraph.

- list item 1
- list item 2
- list item 3
```

> **Note**: You'll need the blank lines between comments and other nodes!

### External rules

In order to use the "[external rules][]" you will first have to install their respective package and then add them to your configuration. Example: `remark-lint-no-url-trailing-slash`.

First, install the rule as a [development dependency][].

```bash
npm install --save-dev remark-lint-no-url-trailing-slash
```

Then, add the rule to your existing configuration and provide a severity level for it.

```json
"remarkConfig": {
  "plugins": [
    "remark-preset-lint-styleguide",
    ["remark-lint-no-url-trailing-slash", ["warn"]]
  ]
}
```

## Help

If you have questions that this document or the [remark][] and [remark-lint][] documentations do not answer, please use the official [Gitter chat room][gitter remark] for **remark**.

## Issues

Use this project's [issue tracker][] for any of these situations:

- report a preset that does not correctly implement the style guide it is based on
- request a new preset
- other aspects directly related to the current package

For problems related to the [remark][] and [remark-lint][] packages, please use their respective issue trackers.

## License

[MIT](LICENSE) © [Radu Serbanescu][]

<!-- Definitions -->

[remark]: https://github.com/wooorm/remark
[remark-lint]: https://github.com/wooorm/remark-lint
[official rules]: https://github.com/wooorm/remark-lint/blob/master/doc/rules.md
[external rules]: https://github.com/wooorm/remark-lint#list-of-external-rules
[gitter remark]: https://gitter.im/wooorm/remark

[remark-cli package]: https://github.com/wooorm/remark/tree/master/packages/remark-cli
[remark package]: https://github.com/wooorm/remark/tree/master/packages/remark
[unified-engine configure]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[unified-engine ignore]: https://github.com/unifiedjs/unified-engine/blob/master/doc/ignore.md
[unified package]: https://github.com/unifiedjs/unified
[remark-message-control]: https://github.com/wooorm/remark-message-control#markers

[markdown style guide]: http://www.cirosantilli.com/markdown-style-guide/
[ciro santilli]: http://www.cirosantilli.com/
[writability profile]: http://www.cirosantilli.com/markdown-style-guide/#writability-profile
[readability profile]: http://www.cirosantilli.com/markdown-style-guide/#readability-profile
[google documentation guide]: https://github.com/google/styleguide/tree/gh-pages/docguide
[commonmark]: http://commonmark.org/

[npm]: https://www.npmjs.com/ "npm is the package manager for Node.js"
[npm install]: https://docs.npmjs.com/cli/install
[npm run-script]: https://docs.npmjs.com/cli/run-script
[package.json]: https://docs.npmjs.com/files/package.json
[development dependency]: https://docs.npmjs.com/files/package.json#devdependencies
[dependency]: https://docs.npmjs.com/files/package.json#dependencies

[node.js module]: https://nodejs.org/api/modules.html

[gitignore]: https://git-scm.com/docs/gitignore

[issue tracker]: https://github.com/raduserbanescu/remark-preset-lint-styleguide/issues
[radu serbanescu]: https://github.com/raduserbanescu
