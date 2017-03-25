/* eslint-disable global-require */

module.exports.plugins = [
  require('remark-lint'),
  [require('remark-lint-blockquote-indentation'), ['error', 2]],
  [require('remark-lint-checkbox-character-style'), ['error', { checked: 'x', unchecked: ' ' }]],
  [require('remark-lint-checkbox-content-indent'), ['error']],
  [require('remark-lint-code-block-style'), ['error', 'fenced']],
  [require('remark-lint-definition-case'), ['error']],
  [require('remark-lint-definition-spacing'), ['error']],
  [require('remark-lint-emphasis-marker'), ['error', '*']],
  [require('remark-lint-fenced-code-flag'), ['error']],
  [require('remark-lint-fenced-code-marker'), ['error', '`']],
  [require('remark-lint-file-extension'), ['error', 'md']],
  [require('remark-lint-final-definition'), ['error']],
  [require('remark-lint-final-newline'), ['error']],
  // Show only a warning.
  // When using a static site generator the first heading is generated from the front matter.
  [require('remark-lint-first-heading-level'), ['warn', 1]],
  [require('remark-lint-hard-break-spaces'), ['error']],
  [require('remark-lint-heading-increment'), ['error']],
  [require('remark-lint-heading-style'), ['error', 'atx']],
  [require('remark-lint-link-title-style'), ['error', '"']],
  [require('remark-lint-list-item-bullet-indent'), ['error']],
  [require('remark-lint-list-item-content-indent'), ['error']],
  [require('remark-lint-list-item-indent'), ['error', 'mixed']],
  [require('remark-lint-list-item-spacing'), ['error']],
  // Show only a warning.
  [require('remark-lint-maximum-heading-length'), ['warn', 60]],
  // We do not encourage hard wrapping in this preset.
  /* Not used: remark-lint-maximum-line-length */
  [require('remark-lint-no-auto-link-without-protocol'), ['error']],
  [require('remark-lint-no-blockquote-without-caret'), ['error']],
  [require('remark-lint-no-consecutive-blank-lines'), ['error']],
  [require('remark-lint-no-duplicate-definitions'), ['error']],
  [require('remark-lint-no-duplicate-headings-in-section'), ['error']],
  // Most implementations do not have problems generating IDs for headings with similar content.
  /* Not used: remark-lint-no-duplicate-headings */
  [require('remark-lint-no-emphasis-as-heading'), ['error']],
  [require('remark-lint-no-empty-url'), ['error']],
  [require('remark-lint-no-file-name-articles'), ['error']],
  [require('remark-lint-no-file-name-consecutive-dashes'), ['error']],
  [require('remark-lint-no-file-name-irregular-characters'), ['error']],
  [require('remark-lint-no-file-name-mixed-case'), ['error']],
  [require('remark-lint-no-file-name-outer-dashes'), ['error']],
  [require('remark-lint-no-heading-content-indent'), ['error']],
  [require('remark-lint-no-heading-indent'), ['error']],
  [require('remark-lint-no-heading-like-paragraph'), ['error']],
  [require('remark-lint-no-heading-punctuation'), ['error', '.,;:']],
  // Show only a warning.
  // There might be valid cases, like embedding a video, etc.
  [require('remark-lint-no-html'), ['warn']],
  [require('remark-lint-no-inline-padding'), ['error']],
  [require('remark-lint-no-literal-urls'), ['error']],
  [require('remark-lint-no-missing-blank-lines'), ['error']],
  [require('remark-lint-no-multiple-toplevel-headings'), ['error', 1]],
  [require('remark-lint-no-reference-like-url'), ['error']],
  [require('remark-lint-no-shell-dollars'), ['error']],
  [require('remark-lint-no-shortcut-reference-image'), ['error']],
  [require('remark-lint-no-shortcut-reference-link'), ['error']],
  [require('remark-lint-no-table-indentation'), ['error']],
  [require('remark-lint-no-tabs'), ['error']],
  [require('remark-lint-no-undefined-references'), ['error']],
  [require('remark-lint-no-unused-definitions'), ['error']],
  [require('remark-lint-ordered-list-marker-style'), ['error', '.']],
  // Allow lazy list numbering
  /* Not used: remark-lint-ordered-list-marker-value */
  [require('remark-lint-rule-style'), ['error', '----------']],
  [require('remark-lint-strong-marker'), ['error', '*']],
  [require('remark-lint-table-cell-padding'), ['error', 'padded']],
  [require('remark-lint-table-pipe-alignment'), ['error']],
  [require('remark-lint-table-pipes'), ['error']],
  [require('remark-lint-unordered-list-marker-style'), ['error', '-']],
];
