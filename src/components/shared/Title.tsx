interface titleProps{
    children: React.ReactNode; 
}

export const Title = ({children}: titleProps)=>{ 
    return (
        <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl">{children}</h1>
    )
}