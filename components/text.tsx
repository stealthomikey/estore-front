export const Title = ({children, className}:{children:React.ReactNode, className?:string}) => {
    return <h2 className={`text-3xl font-bold text-shop-dark-green capitalize tracking-wide font-sans${className ? ' ' + className : ''}`}>{children}</h2>
}