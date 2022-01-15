import * as React from 'react'
import { userStore } from '../../store';
import WorkCard from './WorkCard';
import WorkHistory from './WorkHistory';

export default function Work() {

    const { work, setWork } = userStore()
    if (work.length !== 0)
        return (<WorkHistory />)
    return (
        <>
            <WorkCard id={0} title={'Tell us about your most recent job'} subtitle={'We’ll start there and work backward.'} />
        </>
    )
}