import { useState } from "react"


const Game = ()  => {
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);

    return (
        <form>
            <label htmlFor="playerName">
                playerName
                <input 
                  id="playerName"
                  value={playerName}
                  placeholder="playerName"
                  onChange={(e) => setPlayerName(e.target.value)}
                />
            </label>

            <label htmlFor="players">
                players
                <input 
                     id="players"
                     value={players}
                     placeholder="players"
                     onChange={(e) => setPlayers(e.target.value)}
                />
            </label>
            <button>Submit Player</button>
        </form>
    )
    
}

export default Game;