import {useEffect, useState} from "react";

export default function Cronometro2() {
    const [segundos, setSegundos] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            if (running) {
                setSegundos((atual) => (atual + 1))
            }
        }, 1000)
        return () => clearTimeout(timer)
    }, [running])

    useEffect(() => {
        if (segundos >= 60) {
            setMinutes((atual) => (atual + 1))
            setSegundos(0)
        }
    }, [segundos])

    useEffect(() => {
        if (minutes >= 60) {
            setHours((atual) => (atual + 1))
            setMinutes(0)
        }
    }, [minutes])

    return (
        <div className={"flex justify-between items-center gap-4"}>
            <div>{`${hours}:${minutes}:${segundos}`}</div>
            <button className={"rounded border-2 py-2 px-4"} onClick={() => setRunning(!running)}>{running ? "Pausar" : "Iniciar"}</button>
            <button className={"rounded border-2 py-2 px-4"} onClick={() => {
                setHours(0)
                setMinutes(0)
                setSegundos(0)
            }}>Zerar</button>
        </div>
    )
}
