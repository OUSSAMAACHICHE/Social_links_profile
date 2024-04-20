/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/input.css"];
export const theme = {
  extend: {
    colors: {
      primary: {
        'Green': "hsl(75, 94%, 57%)",
      },
      secondry: {
        White: "hsl(0, 0%, 100%)",
        Grey: "hsl(0, 0%, 20%)",
        DarkGrey: "hsl(0, 0%, 12%)",
        OffBlack: "hsl(0, 0%, 8%)",
      },
    },
    fontSize: {
      paragraphText: "14px",
    },
  },
};
export const plugins = [];

