'use client'

import React from 'react'
import {Box, Button, useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <header>
            <Box w='1280px' m='0 auto' py={4} display='flex' justifyContent='end'>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <SunIcon/> : <MoonIcon/>}
                </Button>
            </Box>
        </header>
    )
}