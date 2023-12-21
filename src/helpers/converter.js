
export async function convertImperialToMetric(stones, pounds) {
    stones = parseInt(stones)
    pounds = parseInt(pounds)

    await new Promise(resolve => setTimeout(() => resolve(), 1000))

    return (stones * 14 + pounds) / 2.2
}

export async function convertMetricToImperial(kilos) {
    kilos = parseInt(kilos)

    const stones = Math.floor((kilos * 2.2) / 14)
    const pounds = Math.round(((kilos * 2.2) / 14 - stones) * 14)

    await new Promise(resolve => setTimeout(() => resolve(), 1000))

    return {
        stones,
        pounds
    }
}