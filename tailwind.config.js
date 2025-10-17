module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black300-default": "var(--black300-default)",
        "red-100": "var(--red-100)",
        "red-400": "var(--red-400)",
        "shake-black100": "var(--shake-black100)",
        "shake-blue75": "var(--shake-blue75)",
        "shake-white100": "var(--shake-white100)",
        "trashed-colorsgray0": "var(--trashed-colorsgray0)",
        "trashed-colorsgray100": "var(--trashed-colorsgray100)",
        "trashed-colorsgray400": "var(--trashed-colorsgray400)",
        "trashed-colorsjade100": "var(--trashed-colorsjade100)",
        "trashed-colorsjade400": "var(--trashed-colorsjade400)",
        "trashed-colorsjade500": "var(--trashed-colorsjade500)",
        "trashed-colorsorange300-default":
          "var(--trashed-colorsorange300-default)",
        "trashed-colorswhite100": "var(--trashed-colorswhite100)",
        "trashed-colorswhite80": "var(--trashed-colorswhite80)",
        "yellow-400": "var(--yellow-400)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "degular-headers-3x-small":
          "var(--degular-headers-3x-small-font-family)",
        "degular-headers-small": "var(--degular-headers-small-font-family)",
        "degular-headers-XX-small":
          "var(--degular-headers-XX-small-font-family)",
        "degular-paragraph-x-small":
          "var(--degular-paragraph-x-small-font-family)",
        "degular-paragraph-XX-small":
          "var(--degular-paragraph-XX-small-font-family)",
        "degular-subtitle-6x-small":
          "var(--degular-subtitle-6x-small-font-family)",
        "degular-subtitle-7x-small":
          "var(--degular-subtitle-7x-small-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "app-bar": "var(--app-bar)",
        "elevation-light-mode-100": "var(--elevation-light-mode-100)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
