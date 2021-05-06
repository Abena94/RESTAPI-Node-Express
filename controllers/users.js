import { v4 as uuidv4 } from 'uuid';
let users = [];


export const CreateUser = (req, res)=>{
    const user =req.body;
    const userId=uuidv4(); 
    const userWithId ={...user,id:userId};
  users.push(userWithId);
  res.send(`user with name : ${user.firstName} added `);
 
}
export const GetUsers = (req, res)=>{
    res.send(users);
}

export const GetUser = (req, res)=>{
    const {id}=req.params;
    const foundUser=users.find((user)=> user.id == id);
   //res.send(foundUser);
   res.send(foundUser);
}

export const DeleteUser = (req, res)=>{
    const {id}=req.params;
    users = users.filter((user) => user.id != id);
   
   res.send(`user with id : ${id} deleted `);
}

export const UpdateUser = (req, res)=>{
    const {id}=req.params;
    const {firstName,lastName,age}=req.body;
    const user=users.find((user)=> user.id == id);
    if(firstName){
        user.firstName=firstName;
    }
    if(lastName){
        user.lastName=lastName;
    }
    if(age){
        user.age=age;
    }
 
   res.send(`user with id : ${id} has been updated `);
}