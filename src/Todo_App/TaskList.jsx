import { useContext, useState, useEffect } from "react";
import { TaskContext } from "./TaskProvider";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = ({ category }) => {
    const { data, handleDelete, toggleState } = useContext(TaskContext);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        let filteredTasks;
        if (category === "all") {
            filteredTasks = data;
        } else if (category === "complete") {
            filteredTasks = data.filter(ele => ele.isCompleted);
        } else {
            filteredTasks = data.filter(ele => !ele.isCompleted);
        }
        setFilteredData(filteredTasks);
    }, [data, category]);

    return (
        <div>
            {filteredData.map(ele => (
                <div key={ele.id} className="flex items-center gap-5 w-full justify-between my-1 bg-slate-100 p-2">
                    <div className="space-x-2">
                        <input type="checkbox" checked={ele.isCompleted} onChange={() => toggleState(ele.id)} />
                        <span>{ele.task}</span>
                    </div>
                    {ele.isCompleted && (
                        <IconButton aria-label="delete" size="small" onClick={() => handleDelete(ele.id)} sx={{ color: "gray" }}>
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TaskList;
