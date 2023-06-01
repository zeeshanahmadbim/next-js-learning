type TNoteRow = {
    note: any
}

export function NoteRow({note}: TNoteRow){
    return <div>{note.description}</div>
}