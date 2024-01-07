"use client"
import Image from 'next/image'
import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Switch} from "@nextui-org/switch";
import React from 'react';
import handleApiIot from './ApiIot/handleApiIot'

export default function Home() {

  const [isSwitchOn, setSwitchState] = React.useState(false);

  const handleSwitchChange = async (newState: boolean | ((prevState: boolean) => boolean)) => {
    setSwitchState(newState);
    console.log(`El estado del switch es: ${newState ? 'Encendido' : 'Apagado'}`);
    const result2 = await handleApiIot(isSwitchOn,isSwitchOn);
  };

  const handleClick = () => {
    console.log('Botón clicado');
  };


  return (
    <NextUIProvider>
      <main className="min-h-screen">
      <div className='flex justify-center place-items-center flex-col items-center pt-24'>
        <Button className='' color="primary" variant="ghost" onClick={handleClick}>Press me</Button>
        <Switch 
          className='py-7' 
          isSelected={isSwitchOn} 
          color="success" 
          size="lg"
          onValueChange={handleSwitchChange}>
          Danger
        </Switch>
      </div>
      </main>
    </NextUIProvider>
  )
}
