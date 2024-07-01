import Counter from "./Counter_App/Counter"
import TaskProvider from "./Todo_App/TaskProvider"
import TodoAppContainer from "./Todo_App/TodoAppContainer"

const App = () => {
  return (
    <>
      <TaskProvider>
        <TodoAppContainer></TodoAppContainer>
      </TaskProvider>
      <Counter></Counter>
      <Counter></Counter>
    </>
  )
}

export default App