import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'noto': "'Noto Sans TC', sans-serif",
            },
            colors: {
                'success': '#B5CC22',
                'success-dark': '#677510',
                'secondary': '#F6F6F6',
            }
        },
    },
    plugins: [require('tailwind-scrollbar'),],
}
export default config
