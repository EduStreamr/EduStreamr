import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      textShadow: {
        default: "2px 2px 0 #000",
        sm: "1px 1px 0 #000",
        lg: "3px 3px 0 #000",
      },
      colors: {
        main: "var(--main)",
        secondary: "var(--secondary)",
        overlay: "var(--overlay)",
        bg: "var(--bg)",
        bw: "var(--bw)",
        "dark-grey": "var(--dark-grey)",
        blank: "var(--blank)",
        text: "var(--text)",
        mtext: "var(--mtext)",
        border: "var(--border)",
        ring: "var(--ring)",
        ringOffset: "var(--ring-offset)",
        secondaryBlack: "#212121",
      },
      borderRadius: {
        base: "var(--border-radius)",
      },
      boxShadow: {
        shadow: "var(--shadow)",
        "shadow-white": "var(--shadow-white)",
      },
      translate: {
        boxShadowX: "var(--box-shadow-x)",
        boxShadowY: "var(--box-shadow-y)",
        reverseBoxShadowX: "var(--reverse-box-shadow-x)",
        reverseBoxShadowY: "var(--reverse-box-shadow-y)",
      },
      fontWeight: {
        base: "500",
        heading: "700",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
} satisfies Config;
