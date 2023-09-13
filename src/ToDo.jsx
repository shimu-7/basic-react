export default function ToDo({task,isDone}){
    return(
        <>
        <div style={{
            border: '5px solid purple',
            padding: '5px',
            margin:'10px',
            borderRadius:'20px'
        }

        }>
        <li>  {isDone ? 'Finished' : 'try this'} :{task}</li>
        </div>
        </>
    )
}