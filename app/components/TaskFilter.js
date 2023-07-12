import React from 'react';
import {Box, Select, Text} from "@chakra-ui/react";

export const TaskFilter = ({setFilterStatus}) => {
    return (
        <>
            <Text>Фильтр:</Text>
            <Select placeholder='Все' onChange={(e) => setFilterStatus(e.target.value)}>
                <option value='Done'>Выполненные</option>
                <option value='In progress'>В процессе</option>
            </Select>
        </>
    )
}