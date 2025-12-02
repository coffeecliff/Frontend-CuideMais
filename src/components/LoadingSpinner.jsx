export const LoadingSpinner = ({size = 'md'}) => {
    const sizes = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-16 h-16'
    }
    return (
        <div className="flex justify-center items-center py-10">
        <div className="w-12 h-12 border-4 border-light border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
}
