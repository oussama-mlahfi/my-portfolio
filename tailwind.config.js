/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      tags: ['Space Mono', 'monospace'],
    },
    extend: {
     
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    
    },
  },
  plugins: [require("tailwindcss-animate"),
  function ({ addBase }) {
    addBase({
      "@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@1,700&display=swap');": {},
    });
  },
],
}
