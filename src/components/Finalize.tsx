import * as React from 'react'
import { stepStore } from "../store";

export default function Finalize() {
    const { setStep } = stepStore();

    return (
        <>
            <div onClick={() => {
                setStep(6)
            }}>
                Finalize
            </div>
        </>
    )
}