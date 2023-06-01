import { ReactNode } from "react";

export default function Layout({children}){
    return (
        <main className="ml-9 mr-15">
            {children}
        </main>
    );
}