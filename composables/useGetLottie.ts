export default async function (name: string) {
    return await import(`~/assets/images/main/lottie/${name}.json`)
        .then((r) => r.default)
        .catch(() => '')
}
