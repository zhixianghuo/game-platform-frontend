import { use, useEffect, useMemo, useState } from 'react'
import styles from './Wordle.module.css'
import { ANSWERS, DICTIONARY } from './words'

const MAXTRIES = 6
const WORD_LENGTH = 5

function getRandomWord(){
    return ANSWERS[Math.floor(Math.random() * ANSWERS.length)]
}

function isValidWord(word: string) {
    return DICTIONARY.has(word.toUpperCase())
}

function evaluateGuess(guess: string, answer: string) {
    const result = Array(WORD_LENGTH).fill('')

    // First pass: check for correct letters
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (guess[i] === answer[i]) {
            result[i] = 'G' // Green
        }
    }

    // Second pass: check for misplaced letters
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (result[i] === '') {
            if (answer.includes(guess[i])) {
                result[i] = 'Y' // Yellow
            } else {
                result[i] = 'B' // Black
            }
        }
    }

    return result
}

export default function WordleGame() {

    const answer = useMemo(() => getRandomWord(), [])
    const [current, setCurrent] = useState('')

    useEffect(() =>{

    })

    return (
        <div>
            <div>
                Game board    
            </div>
            <div>
                Key board    
            </div>
        </div>
    )
}
