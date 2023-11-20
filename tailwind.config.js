/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        Red: "hsl(1, 90%, 64%)",
        Blue: "hsl(219, 85%, 26%)",
        Verylightgrayishblue: "hsl(210, 60%, 98%)",
        Lightgrayishblue1: "hsl(211, 68%, 94%)",
        Lightgrayishblue2: "hsl(205, 33%, 90%)",
        Grayishblue: "hsl(219, 14%, 63%)",
        Darkgrayishblue: "hsl(219, 12%, 42%)",
        Verydarkblue: "hsl(224, 21%, 14%)"
      },
      maxWidth: {
        small: "250px"
      },
      fontSize: {
        required: "18px"
      },
      width: {
        lower: "72%",
        mid: "5%",
        maybe: "36%",
        justfit: "75.3%",
      },
      margin: {
        please: "18.1rem",
      }

    },
    fontFamily: {
      Opensans: ('OpenSans'),
      LexendDeca: ('LexendDeca'),
      bigshoulder: ('bigshoulder')
    },


  },
  plugins: [],
}

