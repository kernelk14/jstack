import lex from "./lex.js"
import parse from "./parse.js"
import { program } from "./files.js"
lex(program)
parse(program)
