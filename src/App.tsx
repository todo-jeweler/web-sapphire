import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { todoState } from 'src/state/todo/todo'

const App = () => {
  const [todo, setTodo] = useRecoilState(todoState)

  useEffect(() => {
    setInterval(() => {
      setTodo((prev) => prev + '헉z!')
    }, 1000)
  }, [])

  return <>Hello Recoil, {todo}</>
}

export default App
