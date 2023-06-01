import getData from "@/app/firebase/getData";
import { NewTodo } from "@/app/components";
import Link from "next/link";

// export const dynamic = 'auto'
// export const dynamic = 'force-static'
// export const dynamic = 'error'
export const dynamic = 'force-dynamic'

export default async function Task(){

    const {result, error} = await getData('notes');
    
    return (
        <section className='py-20'>
        <div className='container'>
          <h1 className='text-3xl font-bold mb-10 bg-emerald-100 w-fit px-2 text-emerald-800'>
            SSR
          </h1>
  
          <NewTodo />
  
          <h2 className='text-xl font-semibold mt-10 border-b pb-2'>Todos</h2>
          <ul className='mt-4 flex flex-col gap-1'>
            {result?.map((note:any) => (
              <li key={note.id}>
                <Link href={`/ssg/task/${note.id}`}>{note.description}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
}