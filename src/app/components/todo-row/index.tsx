type TTodoRow = {
    todo: any
}

export function TodoRow({todo}: TTodoRow){
    return <div>{todo.description}</div>
}