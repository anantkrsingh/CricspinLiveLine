import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'


export const euclid = localFont({
    src: [
        {
            path: "../../public/Fonts/EuclidMedium.ttf",
            weight: "400"
            ,
            style: "medium"
        },
        {
            path: "../../public/Fonts/EuclidRegular.ttf",
            weight: "400"
            ,
            style: "normal"
        }
    ]
})



export const roboto = Roboto({
    variable: "--font-roboto",
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})