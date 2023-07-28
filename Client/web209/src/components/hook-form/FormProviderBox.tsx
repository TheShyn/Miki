import { FormProvider } from 'react-hook-form';

type Props = {
    methods: any
    onSubmit: any
    children: React.ReactNode,
    className?: string
}

export default function FormProviderBox({ methods, onSubmit, children, className }: Props) {
    
    
    return (
        <FormProvider {...methods}>
            <form className={className} onSubmit={onSubmit}>
                {children}
            </form>
        </FormProvider>
    )
}