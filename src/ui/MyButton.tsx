import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'px-4 py-2 rounded-lg font-medium transition-colors duration-200',
  variants: {
    variant: {
      primary: 'bg-primary-500 hover:bg-primary-600 text-white',
      secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
      outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
    },
    size: {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-6 py-3',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

type ButtonVariants = VariantProps<typeof button>

interface MyButtonProps extends ButtonVariants {
  onClick?: () => void
  children?: React.ReactNode
}

export const MyButton: React.FC<MyButtonProps> = ({
  variant,
  size,
  onClick,
  children,
}) => {

  return (
    <button className={button({ variant, size })} onClick={onClick}>
      {children}
    </button>
  )
}
