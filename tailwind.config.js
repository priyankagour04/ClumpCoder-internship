/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001f3d',  // Dark Navy Blue (Primary)
        primary_gary : "#374151",
        secondary_gray : "#9ca3af",
        
      },
    },
  },
  plugins: [],
}
