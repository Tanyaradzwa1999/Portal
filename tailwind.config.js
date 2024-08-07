module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375pxpx",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // Colors

        // Primary

        Nutmeg: "hsl(14, 45%, 36%)",
        DarkRaspberry: "hsl(332, 51%, 32%)",

        // Neutral
        // ## Colors

        // ### Primary

        //#### Text

        PaleViolet: "hsl(276, 100%, 81%)", //(sub-heading at the top of the app UI)
        ModerateViolet: "hsl(276, 55%, 52%)", //(chat on the left)
        DesaturatedDarkViolet: "hsl(271, 15%, 43%)", //(chat on the right)
        GrayishBlue: "hsl(206, 6%, 79%)", //(placeholder text)
        VeryDarkDesaturatedViolet: "hsl(271, 36%, 24%)", //(main heading)
        DarkGrayishViolet: "hsl(270, 7%, 64%)", //(paragraph)
        veryDarkBlue: "hsl(229, 31%, 21%)",

        //#### Gradients

        //These two colors are the vibrant background colors you see throughout the design and are applied as a linear gradient:

        LightMagenta: "hsl(293, 100%, 63%)",
        LightViolet: "hsl(264, 100%, 61%)",
        softRed: "hsl(0, 94%, 66%)",
        //### Secondary
        ExperiencesBlue: "hsl(208,79,34)",
        White: "hsl(0, 0%, 100%)",
        LightGrayishViolet: "hsl(270, 20%, 96%)", // (app background)
        VeryDarkDesaturatedViolet: "hsl(271, 36%, 24%)", // (submit button background)
        VeryLightMagenta: "hsl(289, 100%, 72%)", //(radio button outline)

        PaleBlue: "hsl(243, 100%, 93%)",
        GrayishBlue: "hsl(229, 7%, 55%)",
        DarkBlue: "hsl(228, 56%, 26%)",
        VeryDarkBlue: "hsl(229, 57%, 11%)",
        PalePink: "hsl(6, 100%, 80%)",
        RedshPink: "hsl(335, 100%, 65%)",
      },
      fontFamily: {
        sans: ["Montserrat"],
        Baskervville: ["Baskervville SC"],
        Margarine: ["Margarine"],
      },
    },
  },
  plugins: [],
};
