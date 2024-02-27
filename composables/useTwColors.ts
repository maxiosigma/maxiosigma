import colors from 'tailwindcss/colors'

export default function () {
    return Object.values(colors)
        .filter((it) => typeof it === typeof {})
        .map((it) => Object.values(it))
        .flat()
}
