import { jstack, jstackTypes } from "./types.js"
import parse from "./parse.js"
let ip = 0

export function isNumber(num) {
   if (typeof(num) != "string") return false
   return !isNaN(num) &&
      !isNaN(parseFloat(num))
}

export function checkEOF(prog) {
   if (jstack.nextok == undefined) {
      jstack.nextok = "EOF" 
   } else {
      jstack.nextok = prog[ip+1]
   }  
}

export function errorPls(err) {
   throw Error, `${err}`
}


// const status = "devel"
const status = "release"

export default function lex(source) {
   if (status == "devel") {
      console.log(source)
      console.log("------------------")
   }
   const prog = source.split(" ")
   while (ip < prog.length) {
      const code = prog[ip]
      // REMEMBER: For Debug purposes
      // console.log(code)
      if (code == "+") {
         jstack.name = "Plus"
         jstack.code = jstackTypes.JSTACK_PLUS
         jstack.curtok = code
         jstack.nextok = prog[ip+1]
         checkEOF(prog)
         if (status == "devel") {
            console.log(jstack)
         }
      } else if (code == "write") {
         jstack.name = "Write"
         jstack.code = jstackTypes.JSTACK_WRITE
         jstack.curtok = code
         jstack.nextok = prog[ip+1]
         checkEOF(prog)
         if (status == "devel") {
            console.log(jstack)
         }
      } else {
         if (isNumber(code) == true) {
            jstack.name = `Number_${code}`
            jstack.code = jstackTypes.JSTACK_PUSH
            jstack.curtok = code
            jstack.nextok = prog[ip+1]
            checkEOF(prog)
            if (status == "devel") {
               console.log(jstack)
            }
         } else {
            errorPls(`Oops, expecting ints and builtin keywords, but found \`${code}\` instead.`)
         }
      }
      parse(code)
      ip += 1
   }
}
