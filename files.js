import fs from "fs"

// export const program = "34 35 + write 500 80 - write"
// export const program

const args = process.argv.slice(2)
// export const program = fs.readFile(args[1], "r")
console.log(args)
// if (err) throw err

export function read(src) {
   fs.readFile(src, (err, data) => {
      if (err) throw err
      return data.toString()
   })
}

export const program = read(args[0])

if (program == undefined) {
   throw Error, `Oops, we cannot read ${args[0]}`
}
console.log(program)

// TODO: Write a file handling tool
