module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extends: {
            fontSize: {
                dynamic: 'clamp(2.5rem, 4vw, 4.5rem',
            },
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
