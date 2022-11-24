export const Scroll:React.FC<{children: any}> = ({children}) => {
    return (
        <div style={{overflowY: 'scroll', height: '300px', overflowX: 'hidden'}}>
            {children}
        </div>
    )
}