import styles from './page.module.css'
import './taskManager.scss'
import {Box, Input} from "@chakra-ui/core";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className='w-500'>
            <h1>Task manager</h1>
            <input type="text" name="price" id="price"
                   className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   placeholder="0.00" />
        </div>
        <Box>
            <Input />
        </Box>
    </main>
  )
}
