# grunt-scratchy
A grunt module for the scratchy document extractor.

## Required
- src: an array of paths/globs to process
- dest: the directory to drop docs into

## Options
- begin // default: /**
 - The string of characters that indicates a comment block is starting. These should be immediately
   followed by @scratch /your/path/and/1234 in your code.
- end // default: */
 - String that indicates a comment block is ending
- line // default: *
 - String at the beginning of every line in a comment block. Why? So that scratchy knows where
   to begin considering white space to be important. Leaving this off a line allows you to make
   comments within your comment blocks. OOooo.
- strip // default: <space>
 - String to strip, along with the --line string, from the beginning of every line. Useful if you
   trim trailing white space, but want blank lines to be considered
- extension // default: .txt
 - Extension, with leading dot, to add to exported documents
- unslash // default: N/A
 - Turn / into /

## Example usage

<pre>
scratchy: {
  docs: {
    src: ['**/*.js'],
    dest: 'docs',
    options: {
      unslash: true,
      extension: '.md'
    }
  }
}
<pre>
