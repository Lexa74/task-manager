'use client'
import {Box, Button, Container, Divider, Heading, Input, Text} from "@chakra-ui/react";
import {useState} from "react";
import {TaskBody} from "./components/TaskBody";
import {TaskFilter} from "./components/TaskFilter";

export default function Home() {
    const [taskName, setTaskName] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [tasksList, setTasksList] = useState([]);

    const onCreateTask = () => {
        if (taskName === '') return;
        setTasksList((prevTasksList) => [...prevTasksList, { id: Date.now(), status: 'In progress', name: taskName }]);
        setTaskName('');
    };
    const onDeleteTask = (taskId) => {
        setTasksList((prevTasksList) => prevTasksList.filter(task => task.id !== taskId));
    };
    const onToggleStatus = (taskId) => {
        setTasksList((prevTasksList) =>
            prevTasksList.map(task =>
                task.id === taskId ? { ...task, status: task.status === 'Done' ? 'In progress' : 'Done' } : task
            )
        );
    };
    const filteredTasksList = tasksList.filter(task => filterStatus === '' || task.status === filterStatus);
  return (
    <main>
        <Heading mb={4} textAlign='center'>Менеджер задач</Heading>
        <Container>
            <Box display='flex' mb={4}>
                <Input
                    borderRightRadius={0}
                    placeholder='Введите название задачи'
                    onChange={(e) => setTaskName(e.target.value)}
                    value={taskName}
                    onKeyUp={(e) => {
                        e.key === 'Enter' && onCreateTask()
                    }}
                />
                <Button borderLeftRadius={0} onClick={onCreateTask}>Добавить</Button>
            </Box>
            <Box>
                <TaskFilter setFilterStatus={setFilterStatus}/>
            </Box>
            <Divider mt={4} mb={8}/>
            <Box>
                {filteredTasksList.length > 0 ? (
                    filteredTasksList.map((task, index) => (
                        <Box key={index}>
                            <TaskBody onDeleteTask={onDeleteTask} task={task} onToggleStatus={onToggleStatus}/>
                        </Box>
                    ))
                ) : (
                    <Text align='center'>Нет задач</Text>
                )}
            </Box>
        </Container>
    </main>
  )
}
