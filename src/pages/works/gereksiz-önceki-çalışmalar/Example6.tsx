export const Example6 = () => {
    
    return (
        <div style={{ backgroundColor: "#EEEEEA", width: 700, height: 400, padding: 40 }}>
            <div style={{ backgroundColor: "#DADBD1", width: 600, height: 300, display: "flex" }}>
                <div style={{width:300 , display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
                    <h3 style={{textAlign:"start",paddingLeft:10}}>Fill out form!</h3>
                    <p style={{textAlign:"start" , paddingLeft:10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis doloribus natus unde error recusandae nemo dolorem. Minima et necessitatibus ad quo iusto magnam odit voluptate cumque voluptatum, dicta qui.</p>
                </div>
                <div style={{width:300}}>
                    <input style={{width:250 ,height:35, margin:25}} type="text" placeholder="Name" />
                    <input style={{width:250 , height:35,margin:25}} type="text" placeholder="Email" />
                    <input  style={{width:250 ,height:35, margin:25}} type="text" placeholder="Subjet" />
                </div>
            </div>
        </div>
    )
}