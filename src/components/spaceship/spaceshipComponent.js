import React from 'react'
import { 
    SpacecraftWrapper, 
    SpaceCraftAdapter, 
    SpaceCraftWrapperEngine,
    SpaceCraftWrapperWings,
    SpaceCraftWrapperCargo,
    SpaceCraftFightDockWrapper
} from './spaceshipStyles';

import WingsComponent from './spaceshipmodules/wingsComponent';
import EngineComponent from './spaceshipmodules/engineCompnent';
import CargoComponent from './spaceshipmodules/cargoComponent';
import FightDockComponent from './spaceshipmodules/fightDockComponent';
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

                <SpaceCraftFightDockWrapper>
                    <FightDockComponent />
                </SpaceCraftFightDockWrapper>

                <CargoComponent/>
            </SpaceCraftWrapperCargo>

            <SpaceCraftWrapperEngine>
                    <EngineComponent/>
                    <EngineComponent/>
            </SpaceCraftWrapperEngine>
        </SpacecraftWrapper>
    )
}
