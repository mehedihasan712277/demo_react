import TaskProvider from "./Todo_App/TaskProvider"
import TodoAppContainer from "./Todo_App/TodoAppContainer"

const App = () => {
  return (
    <TaskProvider>
      <TodoAppContainer></TodoAppContainer>
    </TaskProvider>
  )
}

export default App