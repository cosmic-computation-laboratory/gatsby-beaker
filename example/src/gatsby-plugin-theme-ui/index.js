// import { tailwind } from "@theme-ui/presets";
// console.log({
//   tailwind
// });
// export default {
//   ...tailwind,
//   styles: {
//     ...tailwind.styles
//   }
// };

const join = (xs) => xs.join(", ");

const theme = {
  colors: {
    background: "#fff",
    text: "#222",
    primary: "#0139FF",
  },
  fonts: {
    sans: join([
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Helvetica",
      "sans-serif",
    ]),
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    sidebar: 256,
    container: 1024,
  },
  text: {
    heading: {
      fontFamily: "sans",
    },
  },
  styles: {
    root: {
      fontFamily: "sans",
      fontSize: 1,
    },
    h1: {
      variant: "text.heading",
      fontSize: 6,
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    p: {
      fontSize: 4,
      color: "text",
      lineHeight: "body",
      fontFamily: "sans",
    },
  },
};

export default theme;
