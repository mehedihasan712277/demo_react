import { useContext, useState } from "react"
import { TaskContext } from "./TaskProvider";
import { Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Body = () => {
    const [task, setTask] = useState("");
    const { handleAddTask } = useContext(TaskContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTask(task);
        setTask("");
    }
    return (
        <form onSubmit={handleSubmit} className="bg-slate-200 p-4 mx-auto w-fit">
            <p className="text-center font-bold">Todo App</p>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            {/* <button type="submit" className="btn btn-outline btn-sm">Add</button> */}
            <Button variant="outlined" startIcon={<AddCircleIcon />} type="submit">
                Add
            </Button>
        </form>
    )
}

export default Body