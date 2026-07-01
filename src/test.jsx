function Test1({child}){
    return (
        <div>
            {child}
        </div>
    )
}

function Test2(){
    return <h1 className="text-[var(--btn)]">Hello world</h1>
}

export default function Test(){
    return (
        <Test1>
            <Test2 />
        </Test1>
    )
}