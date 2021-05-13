import React,{ useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCords] = useState({x:0, y:0});
    const { x,y } = coords;

    useEffect(() => {
        console.log("show component");

        const mouseMove = ({x,y}) => {
            setCords({x,y});
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            console.log("hide component")
            window.removeEventListener("mousemove", mouseMove );
        }
    }, [])

    return (
        <div>
            <h3> i'm learning to use react effects</h3>

            <p>
                { `x: ${x}, y: ${y}` }
            </p>

        </div>
    )
}
