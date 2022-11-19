// Things to do:
// ./lex.js: We should actively change the value everytime
// ./types.js: Add new operators
// ./parse.js: Improve parsing
//          `: Also remove the undefined
// ./files.js: File storage
//          `: Add also great cli and file parsing

import lex from "./lex.js"
import parse from "./parse.js"
import { program } from "./files.js"
lex(program)
parse(program)
