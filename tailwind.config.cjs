const { fontFamily } = require('tailwindcss/defaultTheme')
const config = require('./tailwind.theme.config')
/**
 * Find the applicable theme color palette, or use the default one
 */
const themeConfig = process.env.THEME_KEY && config[process.env.THEME_KEY] ? config[process.env.THEME_KEY] : config.nightrider
const { colors } = themeConfig
module.exports = {
    darkMode: 'class',
    content: [
        './public/**/*.html',
        './src/**/*.{astro,js,ts}'
    ],
    safelist: ['dark'],
    theme: {
		fontFamily: {
			sans: ['Fira Code', ...fontFamily.sans],
		},
		extend: {
            colors: {
                theme: {
                    ...colors
                }
            },
            typography: (theme) => ({
                dark: {
                    css: {
			color: theme("colors.gray.200"),
                        a: {
                            color: theme("colors.blue.500"),
                              '&:hover': {
                                color: theme("colors.blue.600")
                              },
			    borderColor: "#38bdf8"
                        },
                        blockquote: {
                            color: theme("colors.red.200"),
                            borderColor: theme("colors.slate.200")
                        },
                        'blockquote > p::before, p::after': {
                            color: theme("colors.red.200"),
                        },
                        h1: {
                            color: colors.dark.secondary,
                        },
                        h2: {
                            color: colors.dark.secondary,
                        },
                        h3: {
                            color: colors.dark.secondary,
                        },
			p: {
                            color: colors.dark.secondary,
                        },
                    },
                },
                DEFAULT: {
                    css: {
                        a: {
                            color: theme("colors.blue.600"),
                              '&:hover': {
                                color: theme("colors.blue.700")
                              },
                        },
                        blockquote: {
                            color: colors.primary,
                            borderColor: colors.primary
                        },
                        'blockquote > p::before, p::after': {
                            color: colors.primary,
                        },
                        h1: {
                            color: colors.secondary,
                        },
                        h2: {
                            color: colors.secondary,
                        },
                        h3: {
                            color: colors.secondary,
                        },
			p: {
                            color: colors.secondary,
                        },
                    }
                },
            }),
		},
	},
    variants: {
        extend: { typography: ["dark"] }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ]
};
