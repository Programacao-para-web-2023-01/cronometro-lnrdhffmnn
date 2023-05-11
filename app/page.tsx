"use client"

import {useEffect, useState} from "react";
import Contador from "@/app/components/Contador";
import Reseter from "@/app/components/Reseter";
import {clearInterval} from "timers";
import Cronometro from "@/app/components/Cronometro";
import Cronometro2 from "@/app/components/Cronometro2";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24 gap-4">
          <Cronometro/>
          <Cronometro2/>
      </main>
    )
}
