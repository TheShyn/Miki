import { FormProvider, UseFormReturn,FieldValues  } from 'react-hook-form';

type Props = {
    methods: UseFormReturn<FieldValues>
    onSubmit: () => void,
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