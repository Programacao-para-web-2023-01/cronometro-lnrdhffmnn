"use client"

import {useEffect, useState} from "react";
import Contador from "@/app/components/Contador";
import Reseter from "@/app/components/Reseter";
import {clearInterval} from "timers";

export default function Home() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setContador((atual) => atual+1),
            1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
      <main className="flex min-h-screen flex-col items-center p-24">
          <Contador
              contador={contador}
              onIncrement={() => setContador(contador+1)}
          />
          <Reseter onReset={() => setContador(0)} />
      </main>
    )
}
