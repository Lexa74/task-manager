import React from 'react';
import {Box, Text} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";

export const TaskBody = ({ task, onDeleteTask, onToggleStatus }) => {
    return (
        <Box
            p={4}
            mb={2}
            border='1px solid'
            borderColor={task.status === 'Done' ? 'green.300' : 'gray.300'}
            background={task.status === 'Done' ? 'green.100' : 'transparent'}
            borderRadius='md'
            cursor='pointer'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            onClick={() => onToggleStatus(task.id)}
        >
            <Text size={'lg'} fontWeight='bold'>{task.name}</Text>
            <CloseIcon onClick={() => onDeleteTask(task.id)}/>
        </Box>
    )
}