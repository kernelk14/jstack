// *-- Implemented Types
// |-- Added the OP_COUNT for operation handling
// `-- And for additional security.
export const jstackTypes = {
   JSTACK_PUSH: 0,
   JSTACK_PLUS: 1,
   JSTACK_WRITE: 2,
   JSTACK_MINUS: 3,
   JSTACK_MULTI: 4,
   JSTACK_DIVIDE: 5,
   JSTACK_OP_COUNT: 6,
}

if (jstackTypes.JSTACK_OP_COUNT != 6) {
   throw Error, "Oops, You have unhandled operations in the lexer."
}

export const jstack = {
   curtok: "",
   nextok: "",
   name: "",
   code: 0,
   value: 0
}
