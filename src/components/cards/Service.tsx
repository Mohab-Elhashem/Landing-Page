import { Paragraph } from "../shared/Paragraph";

interface serviceProps{
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const Service = ({title, description, icon}: serviceProps)=>{
    return(
        <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-bg-body shadow-lg shadow-bg-box relative overflow-hidden">
            <div className="rounded-xl  bg-bg-body p-3 text-heading-1 w-max relative border border-box-border">{icon}</div>
            <div className="mt-6 space-y-4 relative ">
                <h2 className="text-lg md:text-xl font-semibold text-heading-2">{title}</h2>
                <Paragraph>{description}</Paragraph>
            </div>
        </div>
    )
}