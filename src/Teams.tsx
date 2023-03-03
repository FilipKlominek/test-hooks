import React, {SyntheticEvent, useState} from "react";
import {Team} from "./Team";

export function Teams() {

    const initialTeams = [
        {name: "Real Madrid", points: 72},
        {name: "Barcelona", points: 68},
        {name: "Atletico Madrid", points: 65},
        {name: "Sevilla", points: 59},
    ];

    const [teams, setTeams] = React.useState(initialTeams);

    const [name, setName] = React.useState('');
    const [points, setPoints] = React.useState(0);

    function handleChange(event: SyntheticEvent) {
        event.preventDefault();
        setTeams([...teams, {name, points}]);
    }

    function handleName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handlePoints(event: React.ChangeEvent<HTMLInputElement>) {
        setPoints(event.target.valueAsNumber);
    }

    return (
        <>
            <h2>Add team</h2>
            <form onSubmit={handleChange}>
                <div>
                    <label>Name: </label>
                    <input type={"text"} onChange={handleName}/>
                </div>
                <div>
                    <label>Points: </label>
                    <input type={"number"} onChange={handlePoints}/>
                </div>
                <button type={"submit"}>submit</button>
            </form>

            <h2>
                Existing teams
            </h2>
            <div>
                {teams.map((team) => <Team name={team.name} points={team.points}/>)}
            </div>

        </>
    )

}