import React from "react";


interface teamProps {
    name: string;
    points: number;
}
export function Team({name, points}: teamProps) {
    return (
        <div>
            <span>{name} </span>
            <span>{points}</span>
        </div>
    )
}
