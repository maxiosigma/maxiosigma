export default function (...arg: any[]) {
    return arg.map((it) => (typeof it === 'string' ? useLocalStorage(it, false) : useLocalStorage(it.n, it.v)))
}
