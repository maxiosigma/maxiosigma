<template>
    <LayoutPage pagecl="main">
        <!--  -->

        <div class="m-auto">{{ polygon }}</div>
        <!--<div class="mt-auto mx-auto mb-4">{{ basePolygon }}</div>-->

        <div class="flex mb-auto mx-auto gap-20">
            <div
                class="main-clip self-center bg-dark-100 h-30vh w-30vw overflow-hidden"
                :style="`clip-path: polygon(${toProcent(polygon)})`"
            ></div>

            <div
                class="main-clip self-center bg-dark-100 h-30vh w-30vw overflow-hidden"
                :style="`clip-path: polygon(${toProcent(polygon_test)})`"
            ></div>
        </div>

        <!--<div class="flex flex-grow">
            <div :class="['relative flex-grow h-full w-full overflow-hidden']">
                <ItemMediaImg
                    :class="[
                        'absolute h-full w-full ml-10 object-cover object-right',
                        //timers.mainImg
                        //    ? 'animated animate-fade-in'
                        //    : 'animated animate-fade-out',
                    ]"
                    src="main/face_1.webp"
                ></ItemMediaImg>
            </div>

            <div :class="['relative flex-grow h-full w-full overflow-hidden']">
                <ItemMediaImg
                    :class="[
                        'absolute h-full w-full -ml-10 object-cover object-left',
                        //!timers.mainImg
                        //    ? 'animated animate-fade-in'
                        //    : 'animated animate-fade-out',
                        //timers.mainImgCount === 0
                        //    ? 'opacity-0 animate-none'
                        //    : '',
                    ]"
                    src="main/face_2.webp"
                ></ItemMediaImg>
            </div>
        </div>-->

        <!--<div class="nav-bottom"></div>-->
        <!--  -->
    </LayoutPage>
</template>

<script setup>
import { pointsOnBezierCurves } from 'points-on-curve'

console.log(
    pointsOnBezierCurves([
        [5, 5],
        [10, 10],
        [15, 5],
        [20, 0]
    ])
)

const polygon_test = [
    [0, 0],
    //
    //[5, 5],
    //[10, 10],
    //[15, 5],
    //[20, 0],
    ...pointsOnBezierCurves([
        [5, 5],
        [10, 10],
        [15, 5],
        [20, 0]
    ]),
    //
    [100, 0],
    [100, 100],
    [0, 100]
]

const polygon = [
    [0, 0],
    [100, 0]
]

const dotHF = ([x1, y1], [x2, y2]) => [x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2]

const newDot = (i1, i2) => polygon.splice(i2, 0, dotHF(polygon[i1], polygon[i2]))

newDot(0, 1)

const newDotsBetween = () => {
    //const index = (polygon.length / 2) | 0
    //newDot(index, index + 1)
    //newDot(index - 1, index)
    //newDot(polygon.length - 2, polygon.length - 1)
    //newDot(0, 1)
    //console.log(index)
    //newDot(polygon.length - 2, polygon.length - 1)
    //newDot(polygon.length - 2, polygon.length - 1)

    const poly = polygon
    //const curve = UIBezierPath()

    poly.map(([x, y], i) => (i > ((poly.length / 2) | 0) ? newDot(i - 1, i) : null))
    //console.log(Math.floor((polygon.length - 1) / 2))
    poly.map(([x, y], i) => (i < Math.floor((poly.length - 1) / 2) ? newDot(i, i + 1) : null))
    //console.log(Math.floor((polygon.length - 1) / 2))
}

//newDot(0, 1)
//newDot(0, 1)
//newDot(2, 3)
//newDot(3, 4)
//newDot(0, 1)
//newDot(0, 1)

newDotsBetween()
//newDotsBetween()
//newDotsBetween()
//newDotsBetween()
//newDotsBetween()

//newDotsBetween()

//console.log(polygon)

//const clip = [
//    [0, 0],
//    [100, 0],
//    [100, 100],
//    [0, 100],
//]
//    .reduce((s, [x, y], i) => {
//        s.push([x, y])
//        s.push([x * 0.5, y * 0.2])

//        return s
//    }, [])
//    .map(([x, y]) => `${x}% ${y}%`)
//    .join(', ')

//const timers = ref({ mainImg: false, mainImgCount: 0 })
//setInterval(async function () {
//    timers.value.mainImg = !timers.value.mainImg
//    timers.value.mainImgCount === 0 ? timers.value.mainImgCount++ : null
//}, 5000)

const toProcent = (polygon) => polygon.map(([p1, p2]) => `${p1}% ${p2}%`).join(', ')
</script>

<style lang="scss">
.main {
    /*@apply flex-grow;*/

    /*&-clip {
        clip-path: polygon(1% 1%, 95% 5%, 85% 15%, 95% 95%, 5% 95%);
    }*/
}
</style>
