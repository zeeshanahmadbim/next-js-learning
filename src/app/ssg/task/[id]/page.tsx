'use-client'

export const dynamicParams = true;
export default function Detail({params}:any){
    console.log(params.id)
    return <div>Detail todo</div>
}