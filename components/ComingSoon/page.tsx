import Image from "next/image";
import style from '@/css/coming.module.css'

export default function ComingSoon(){
    return(
        <main
            className={style.pageSection}
        >
            <Image
                src={"/assets/background-image.webp"}
                alt=""
                width={1600}
                height={800}
                className={style.backgroundImage}
            />

            <div
                className={style.wordOverlayBlock}
            >
                <h1
                    className={style.comingText}
                >
                    Sorry, we are out of service till futher notice
                </h1>
            </div>
        </main>
    )
}