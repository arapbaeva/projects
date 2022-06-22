export function Rating() {
    console.log('Rating rendering')
    return (
        <>
           <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star />
        </>
    );
}

export function Star(props: any) {
    console.log('Star rendering')
    return <span><b>Star</b></span>

}