'use client'
import style from '@/css/routes.module.css';
import clsx from "clsx";
import { routes } from "@/lib/routes";
import { useState } from "react";

export default function RouteSection(){
    const [ isToGeorge, setIsToGeorge ] = useState(false)
    const [ direction, setDirection ] = useState<'CT' | 'George'>('CT')
    return(
        <section
            className={style.routesTabSection}
        >
            <button 
                type="button"
                className={clsx(style.routeButton, !isToGeorge && style.activeRoute)}
                onClick={() => (
                    setIsToGeorge(false),
                    setDirection('CT')
                )}
            >
                George to Cape Town
            </button>
            <button 
                type="button"
                className={clsx(style.routeButton, isToGeorge && style.activeRoute)}
                onClick={() => (
                    setIsToGeorge(true),
                    setDirection('George')
                )}
            >
                Cape Town to George
            </button>

            <div
                className={style.tableBlock}
            >
                <table
                    className={style.routeTable}
                >
                    <caption
                        className={style.routeCaption}
                    >
                        Stops on route from <br/> {isToGeorge? "Cape Town to George" : "George to Cape Town" }
                        
                    </caption>
                    <thead
                        className={style.routeTableHead}
                    >
                        <tr>
                            <th
                                className={style.routeTableC1}
                            >Location:</th>
                            <th>Depart Time:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(direction === 'CT' ? routes : [...routes].reverse()).map((route, i) => {
                            const directionData = route.directionTo.find(d => d.destination === direction);
                            if (!directionData) return null;

                            return (
                                <tr
                                    key={i}
                                    className={style.routeTableRow}
                                >
                                    <td
                                        className={style.routeTableCell}
                                    >
                                        {route.town} - {route.locationName}
                                        <br/> 
                                        <a 
                                            href={route.locationLink || '#'}
                                            className={style.routeAddressLink}
                                        >
                                            {route.locationAddress}
                                        </a>
                                    </td>
                                    <td
                                        className={style.routeTableCell}
                                    >
                                        {directionData.time}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}