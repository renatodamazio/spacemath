import React from 'react'
import { ScenarioWrapper } from "./scenarioStyles";
export default function scenarioComponent({ children }) {
    return (
        <ScenarioWrapper>
            { children }
        </ScenarioWrapper>
    )
}
