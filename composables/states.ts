export const useCounter = () => useState<number>('counter', () => 0)

export const useRundTwColor = ({ colors = ['gray', 'indigo', 'red'], range = [5, 9], prefix = 'bg' }) => {
    return `${prefix}-${useRandomString(colors)}-${useRandomInt(range[0], range[1]) * 100}`
}
