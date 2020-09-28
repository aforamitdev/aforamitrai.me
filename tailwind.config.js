module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Righteous", "Roboto"],
      },
      colors: {
        offwhite: "#F2E8E8",
      },
    },
  },
  variants: {
    backgroundColor: ["active"],
  },
  plugins: [],
};
