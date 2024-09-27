export const useCounter = () => useState<number>('counter', () => 0)

export const useRandTwClassColor = (colors = useTwClassColors(), range = [5, 9], prefix = 'bg') => {
    return `${prefix}-${useRandomString(colors)}-${useRandomInt(range[0], range[1]) * 100}`
}

export const useRandTwClassColors = (
    count = 5,
    colors = useTwClassColors(),
    range = [5, 9],
    prefix = 'bg'
) => {
    return useRandomArrayItems(colors, count).map(
        (twc: any) => `${prefix}-${twc}-${useRandomInt(range[0], range[1]) * 100}`
    )
}

export const useRandTwColors = (count = 5, colors = useTwColors([300, 500, 600])) => {
    return useRandomArrayItems(colors, count)
}

export const queryContent = () => null
