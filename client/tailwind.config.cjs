/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxHeight: {
                '6xl': '1152px', // custom max-h-6xl
            },
            minWidth: {
                'sm': '24rem'
            },
            gridTemplateColumns: {
                // custom grids
                24: 'repeat(24, minmax(0, 1fr))',
                18: 'repeat(18, minmax(0, 1fr))',

            },
            backgroundColor:{
                "old-700" : "#44413c",
                "old-800": "#292824",
                "old-900": "#1c1b17"
            }
            ,
              borderColor:{
                "old-700" : "#44413c",
                "old-800": "#292824",
                "old-900": "#1c1b17"
            }
        },
    },
    plugins: [],
}
