'use strict'
const bcrypt=require('bcrypt')
const user = (sequelize, DataTypes) => {
 const model=sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  model.beforeCreate(async(user1)=>{
      let hash=await bcrypt.hash(user1.password,10)
      user1.password=hash
  })
model.authenticateBasic =async function(username,password){
  const user=await this.findOne({where:{username}})
  const valid=await bcrypt.compare(password,user.password)
  if(valid){
      return user
  }
  throw new Error('invalid user')
}

  return model

}
module.exports=user;
