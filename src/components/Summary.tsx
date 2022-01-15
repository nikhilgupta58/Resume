import * as React from 'react'
import { stepStore } from "../store";

export default function Summary() {
    const { setStep } = stepStore();

    return (
        <>
            <div onClick={() => {
                setStep(5)
            }}>
                Summary
            </div>
        </>
    )
}