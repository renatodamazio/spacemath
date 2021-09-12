import React from 'react'
import { 
    SpacecraftWrapper, 
    SpaceCraftAdapter, 
    SpaceCraftWrapperEngine,
    SpaceCraftWrapperWings,
    SpaceCraftWrapperCargo
} from './spaceshipStyles';

import WingsComponent from './spaceshipmodules/wingsComponent';
import EngineComponent from './spaceshipmodules/engineCompnent';
import CargoComponent from './spaceshipmodules/cargoComponent';
export default function index() {
    return (
        <SpacecraftWrapper>
            <SpaceCraftAdapter>
                <SpaceCraftWrapperWings>
                    <WingsComponent id="leftWing"/>
                    <WingsComponent id="rightWing"/>
                </SpaceCraftWrapperWings>
            </SpaceCraftAdapter>

            <SpaceCraftWrapperCargo>
                <CargoComponent/>
            </SpaceCraftWrapperCargo>

            <SpaceCraftWrapperEngine>
                    <EngineComponent/>
                    <EngineComponent/>
            </SpaceCraftWrapperEngine>
        </SpacecraftWrapper>
    )
}
