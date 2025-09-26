export const Card = ({children, className = '', ...props}) => {
    return(
        <div
        className={`glass-card shadow-lg p-6 ${className}`}
        {...props}
        >
        {children}
        </div>
    );
};