import lex from "./lex.js"
import { jstack, jstackTypes } from "./types.js"

export const stack = []

export default function parse(source) {
   if (jstack.code == jstackTypes.JSTACK_PUSH) {
      stack.push(source) 
   } else if (jstack.code == jstackTypes.JSTACK_PLUS) {
      const a = stack.pop()
      const b = stack.pop()
      jstack.value = parseInt(a) + parseInt(b)
      stack.push(parseInt(a) + parseInt(b))
   } else if (jstack.code == jstackTypes.JSTACK_WRITE) {
      const a = stack.pop()
      console.log(a)
   }
   // console.log(stack)
}

