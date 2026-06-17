
export const userLogin = (req, res)=>{
    res.send(`user Loging`)
}

export const userSignUp = (req, res)=>{
    res.send(`user SignUp`)
}

//queryString
export const queryString =(req, res)=>{
    const keywords= req.query.keywords;
    res.send(`sending query String ${keywords}`)
}
//route parameters
export const routeParameter= (req, res)=>{
const name= req.params.name;
res.send(`route parameters : welcome ${name}`)
}