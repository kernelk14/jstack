// import lex from "./lex.js"
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
   } else if (jstack.code == jstackTypes.JSTACK_MINUS) {
      const a = stack.pop()
      const b = stack.pop()
      // jstack.value = parseInt(b) - parseInt(a) // Misplaced a code here.
      stack.push(parseInt(b) - parseInt(a))
   } else if (jstack.code == jstackTypes.JSTACK_MULTI) {
      const a = stack.pop()
      const b = stack.pop()
      stack.push(parseInt(a) * parseInt(b))
   } else if (jstack.code == jstackTypes.JSTACK_DIVIDE) {
      const a = stack.pop()
      const b = stack.pop()
      stack.push(parseInt(b) / parseInt(a)) 
   }
   // console.log(stack)
}

