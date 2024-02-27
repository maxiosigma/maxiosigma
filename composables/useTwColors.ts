import {
    amber,
    black,
    blue,
    cyan,
    emerald,
    fuchsia,
    gray,
    green,
    indigo,
    lime,
    neutral,
    orange,
    pink,
    purple,
    red,
    rose,
    sky,
    slate,
    stone,
    teal,
    violet,
    white,
    yellow,
    zinc
} from 'tailwindcss/colors'

export default function () {
    try {
        const colors = [
            amber,
            black,
            blue,
            cyan,
            emerald,
            fuchsia,
            gray,
            green,
            indigo,
            lime,
            neutral,
            orange,
            pink,
            purple,
            red,
            rose,
            sky,
            slate,
            stone,
            teal,
            violet,
            white,
            yellow,
            zinc
        ]
            .map((it) => (typeof it === typeof {} ? Object.values(it) : it))
            .flat()

        return colors ?? []
    } catch (error) {
        return []
    }
}
