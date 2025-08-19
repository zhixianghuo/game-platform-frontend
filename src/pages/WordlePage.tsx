import WordleGame from "../games/wordle/WordleGame";

export default function WordlePage() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Wordle Game</h1>
        <WordleGame />
        </section>
    )
}