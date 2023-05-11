import {useEffect, useState} from "react";

export default function Cronometro() {
    const [segundos, setSegundos] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            if (running) {
                setSegundos((atual) => (atual + 1))
            }
        }, 1000)
        return () => clearTimeout(timer)
    }, [running])

    return (
        <div className={"flex justify-between items-center gap-4"}>
            <div>{`${Math.floor(segundos / 3600)}:${Math.floor((segundos % 3600) / 60)}:${segundos % 60}`}</div>
            <button className={"rounded border-2 py-2 px-4"} onClick={() => setRunning(!running)}>{running ? "Pausar" : "Iniciar"}</button>
            <button className={"rounded border-2 py-2 px-4"} onClick={() => setSegundos(0)}>Zerar</button>
        </div>
    )
}
