/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        heading1: [
          "clamp(2.25rem, 2.5vw + 1.25rem, 3.25rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading2: [
          "clamp(2rem, 2.1875vw + 1.125rem, 2.875rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading3: [
          "clamp(1.75rem, 1.875vw + 1rem, 2.5rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading4: [
          "clamp(1.5rem, 1.875vw + 0.75rem, 2.25rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading5: [
          "clamp(1.375rem, 1.5625vw + 0.75rem, 2rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading6: [
          "clamp(1.25rem, 1.25vw + 0.75rem, 1.75rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        subtitle1: [
          "clamp(1.25rem, 0.625vw + 1rem, 1.5rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
            // fontWeight: "600",
            fontWeight: "500",
          },
        ],
        subtitle2: [
          "clamp(1.125rem, 0.625vw + 0.875rem, 1.375rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
            // fontWeight: "600",
            fontWeight: "500",
          },
        ],
        body1: [
          "clamp(1.125rem, 0.625vw + 0.875rem, 1.375rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        body2: [
          "clamp(1rem, 0.625vw + 0.75rem, 1.25rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        caption1: [
          "clamp(0.875rem, 0.3125vw + 0.75rem, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        caption2: [
          "clamp(0.75rem, 0.3125vw + 0.625rem, 0.875rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        btn: [
          "clamp(0.875rem, 0.3125vw + 0.75rem, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        xxs: [
          "clamp(0.5rem, 0.143rem + 0.952vw, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
      },
      colors: {
        green: {
          DEFAULT: "rgba(var(--color-green) / <alpha-value>)",
          ...colors.green,
        },
        // yellow: "rgba(var(--color-yellow) / <alpha-value>)",
        // black: "rgba(var(--color-black) / <alpha-value>)",
        // gray: "rgba(var(--color-gray) / <alpha-value>)",
        // offwhite: "rgba(var(--color-offwhite) / <alpha-value>)",
        // white: "rgba(var(--color-white) / <alpha-value>)",
        greenLight: "rgba(var(--color-green-light) / <alpha-value>)",
        greenDark: {
          50: "#7fa15a",
        },
        darkBlue: {
          50: "#0F242E"
        },

      },

    },
  },
  plugins: [],
}


// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontSize: {
//         heading1: [
//           "clamp(2.25rem, 2.5vw + 1.25rem, 3.25rem)",
//           {
//             lineHeight: "1.3",
//             letterSpacing: "-0.01em",
//             // fontWeight: "700",
//             fontWeight: "600",
//           },
//         ],
//         heading2: [
//           "clamp(2rem, 2.1875vw + 1.125rem, 2.875rem)",
//           {
//             lineHeight: "1.3",
//             letterSpacing: "-0.01em",
//             // fontWeight: "700",
//             fontWeight: "600",
//           },
//         ],
//         heading3: [
//           "clamp(1.75rem, 1.875vw + 1rem, 2.5rem)",
//           {
//             lineHeight: "1.3",
//             letterSpacing: "-0.01em",
//             // fontWeight: "700",
//             fontWeight: "600",
//           },
//         ],
//         heading4: [
//           "clamp(1.5rem, 1.875vw + 0.75rem, 2.25rem)",
//           {
//             lineHeight: "1.3",
//             letterSpacing: "-0.01em",
//             // fontWeight: "700",
//             fontWeight: "600",
//           },
//         ],
//         heading5: [
//           "clamp(1.375rem, 1.5625vw + 0.75rem, 2rem)",
//           {
//             lineHeight: "1.3",
//             letterSpacing: "-0.01em",
//             // fontWeight: "700",
//             fontWeight: "600",
//           },
//         ],
//         heading6: [
//           "clamp(1.25rem, 1.25vw + 0.75rem, 1.75rem)",
//           {
//             lineHeight: "1.3",
//             letterSpacing: "-0.01em",
//             // fontWeight: "700",
//             fontWeight: "600",
//           },
//         ],
//         subtitle1: [
//           "clamp(1.25rem, 0.625vw + 1rem, 1.5rem)",
//           {
//             lineHeight: "1.8",
//             letterSpacing: "-0.01em",
//             // fontWeight: "600",
//             fontWeight: "500",
//           },
//         ],
//         subtitle2: [
//           "clamp(1.125rem, 0.625vw + 0.875rem, 1.375rem)",
//           {
//             lineHeight: "1.8",
//             letterSpacing: "-0.01em",
//             // fontWeight: "600",
//             fontWeight: "500",
//           },
//         ],
//         body1: [
//           "clamp(1.125rem, 0.625vw + 0.875rem, 1.375rem)",
//           {
//             lineHeight: "1.8",
//             letterSpacing: "-0.01em",
//           },
//         ],
//         body2: [
//           "clamp(1rem, 0.625vw + 0.75rem, 1.25rem)",
//           {
//             lineHeight: "1.8",
//             letterSpacing: "-0.01em",
//           },
//         ],
//         caption1: [
//           "clamp(0.875rem, 0.3125vw + 0.75rem, 1rem)",
//           {
//             lineHeight: "1.8",
//             letterSpacing: "-0.01em",
//           },
//         ],
//         caption2: [
//           "clamp(0.75rem, 0.3125vw + 0.625rem, 0.875rem)",
//           {
//             lineHeight: "1.8",
//             letterSpacing: "-0.01em",
//           },
//         ],
//         btn: [
//           "clamp(0.875rem, 0.3125vw + 0.75rem, 1rem)",
//           {
//             lineHeight: "1.8",
//             letterSpacing: "-0.01em",
//           },
//         ],
//         xxs: [
//           "clamp(0.5rem, 0.143rem + 0.952vw, 1rem)",
//           {
//             lineHeight: "1.8",
//             letterSpacing: "-0.01em",
//           },
//         ],
//       },
//       colors: {
//         green: {
//           DEFAULT: "rgba(var(--color-green) / <alpha-value>)",
//           ...colors.green,
//         },
//         yellow: "rgba(var(--color-yellow) / <alpha-value>)",
//         black: "rgba(var(--color-black) / <alpha-value>)",
//         gray: "rgba(var(--color-gray) / <alpha-value>)",
//         offwhite: "rgba(var(--color-offwhite) / <alpha-value>)",
//         white: "rgba(var(--color-white) / <alpha-value>)",
//         greenLight: "rgba(var(--color-green-light) / <alpha-value>)",
//         darkBlue: {
//           50: "#0F242E",
//         },
//         grayDark: {
//           50: "#777777"
//         },

//       },
//     },
//   },
//   plugins: [],
// }