const ComponentWithProps = (props) => {
    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.content}</p>
            <p>{props.number}</p>
            <p>{props.nocontent}</p>
        </div>
    )
}

export default ComponentWithProps;