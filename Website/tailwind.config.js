// tailwind.config.js
const tailwindConfig = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // ... other plugins
    require('@tailwindcss/forms'),
  ],
};

module.exports = tailwindConfig;
