export interface ContadorProps {
    contador: number
    onIncrement: () => void
}
export default function Contador({contador, onIncrement}:ContadorProps) {
    return (
        <div>
            <div>{contador}</div>
            <button onClick={onIncrement}>
                Clique para aumentar
            </button>
        </div>
    )
}
