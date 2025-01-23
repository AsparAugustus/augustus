/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0A0B1E",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#2B8EFF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#4EDBD5",
          foreground: "#0A0B1E",
        },
        accent: {
          DEFAULT: "#E94DBC",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1A1B2E",
          foreground: "#93959F",
        },
        card: {
          DEFAULT: "#12132A",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
}

