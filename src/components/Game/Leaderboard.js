import React, { useEffect } from "react";

export const LeaderBoard = () => {

    useEffect(() => {
        window.scrollTo(0, 300);
    })
    return (
        <>
        <iframe width="100%" height="850px" src="https://keepthescore.co/board/hjhcjxtxhte/" title="Leaderboard" frameborder="0"  ></iframe>
        </>
    )
}