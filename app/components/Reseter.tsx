export interface ReseterProps {
    onReset: () => void
}
export default function Reseter({onReset}:ReseterProps) {
    return (
        <button onClick={onReset}>
            Resetar tudo
        </button>
    )
}
