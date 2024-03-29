/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";


const Team = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 pt-10">
            <p className="text-[#FF3811] font-semibold text-center">Team</p>
            <h1 className="text-4xl text-center font-bold">Meet Our Team</h1>
            <p className="lg:w-1/2 mx-auto text-center pt-3">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
                {
                    members.map(member => <TeamCard key={member._id} member={member}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Team;