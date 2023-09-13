export default function User({user}){
    console.log(user);
    const {name,email}=user;
    console.log(name,email);
    return(
        <div>
            <h4>name:{name}</h4>
            <h5>email:{email}</h5>
        </div>
    )
}