import React from 'react';
import { Select, Text} from "@chakra-ui/react";

export const TaskFilter = ({setFilterStatus}) => {
    return (
        <>
            <Text>Фильтр:</Text>
            <Select placeholder='Все' onChange={(e) => setFilterStatus(e.target.value)}>
                <option value='Done'>Выполненные</option>
                <option value='Not done'>Не выполненные</option>
            </Select>
        </>
    )
}