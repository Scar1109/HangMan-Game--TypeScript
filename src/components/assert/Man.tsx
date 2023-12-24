export function Man (){
    return (<div>

        {/* Head */}
        <div style={{
            height : "50px",
            width : "50px",
            borderRadius : "100%",
            position : "absolute",
            border : "10px solid black",
            right : "-30px",
            top : "50px"
        }}></div>
        
        {/* Body */}
        <div style={{
                    height : "100px",
                    width : "10px",
                    background : "black",
                    marginLeft : "120px",
                    position : "absolute",
                    right : 0,
                    top : "120px"
                }}></div>
        
        {/* Left Hand */}
        <div style={{
                    height : "10px",
                    width : "80px",
                    background : "black",
                    position : "absolute",
                    right : 0,
                    top : "130px",
                    rotate : "-60deg",
                    transformOrigin : "right bottom"
                }}></div> 
        
        {/* Right Hand */}
        <div style={{
                    height : "10px",
                    width : "80px",
                    background : "black",
                    position : "absolute",
                    right : "-70px",
                    top : "130px",
                    rotate : "60deg",
                    transformOrigin : "left bottom"
                }}></div> 
        
        {/* Left Leg */}
        <div style={{
                    height : "10px",
                    width : "80px",
                    background : "black",
                    position : "absolute",
                    right : 0,
                    top : "210px",
                    rotate : "-60deg",
                    transformOrigin : "right bottom"
                }}></div> 
        
        {/* Right Leg */}
        <div style={{
                    height : "10px",
                    width : "80px",
                    background : "black",
                    position : "absolute",
                    right : "-70px",
                    top : "210px",
                    rotate : "60deg",
                    transformOrigin : "left bottom"
                }}></div> 
                
        {/* Stage */}
        <div style={{
            height : "10px",
            width : "130px",
            position : "absolute",
            background : "black",
            marginLeft : "120px",
            top : "285px",
            right : "-58px"
        }}></div>
    
        <div style={{
            height : "10px",
            width : "30px",
            position : "absolute",
            background : "black",
            marginLeft : "120px",
            top : "285px",
            right : "-58px",
            rotate : "-45deg",
            transformOrigin : "right bottom"
        }}></div>
        <div style={{
            height : "10px",
            width : "30px",
            position : "absolute",
            background : "black",
            marginLeft : "120px",
            top : "285px",
            right : "-28px",
            rotate : "-45deg",
            transformOrigin : "right bottom"
        }}></div>
    
    <div style={{
            height : "10px",
            width : "30px",
            position : "absolute",
            background : "black",
            marginLeft : "120px",
            top : "285px",
            right : "2px",
            rotate : "-45deg",
            transformOrigin : "right bottom"
        }}></div>
    
    <div style={{
            height : "10px",
            width : "30px",
            position : "absolute",
            background : "black",
            marginLeft : "120px",
            top : "285px",
            right : "34px",
            rotate : "-45deg",
            transformOrigin : "right bottom"
        }}></div>
    
    <div style={{
            height : "10px",
            width : "30px",
            position : "absolute",
            background : "black",
            marginLeft : "120px",
            top : "285px",
            right : "66px",
            rotate : "-45deg",
            transformOrigin : "right bottom"
        }}></div>
    
        </div>
    
        )
}