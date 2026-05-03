import type { Config } from 'tailwindcss'
const config: Config = {
content:[
'./app/**/*.{js,ts,jsx,tsx,mdx}',
'./components/**/*.{js,ts,jsx,tsx,mdx}',
'./lib/components/**/*.{js,ts,jsx,tsx,mdx}',
],
theme: {
extend: {
colors: {
steel: {
50: '#F8F8F8',
100: '#F0F0F0',
200: '#E0E0E0',
300: '#C8C8C8',
400: '#B0B0B0',
500: '#909090',
600: '#686868',
700: '#484848',
800: '#282828',
900: '#181818',
950: '#0A0A0A',
},
chrome: {
light: '#F5F5F5',
mid: '#C0C0C0',
dark: '#808080',
shine: '#E8E8E8',
}
},
fontFamily: {
bebas: ['var(--font-bebas)'],
rajdhani: ['var(--font-rajdhani)'],
inter:['var(--font-inter)'],
},
animation: {
shimmer: 'shimmer 4s linear infinite',
'whatsapp-pulse': 'whatsapp-pulse 2s ease-in-out infinite',
marquee: 'marquee 25s linear infinite',
},
keyframes: {
shimmer: {
'0%': { backgroundPosition: '0% center' },
'100%': { backgroundPosition: '200% center' },
},
'whatsapp-pulse': {
'0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
'50%': { boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
},
},
plugins:[],
}
export default config