module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                para: 'clamp(1rem, 1.2vw, 2rem)',
                header: 'clamp(1.2rem, 1.5vw, 2.2rem)',
                title: 'clamp(1.8rem, 2vw, 5rem)',
            },
            padding: {
                cu: '4rem calc((100vw - 1200px) / 2)',
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
