const validator=require('validator')
module.exports=(sequelize,DataTypes)=>{
    const emergency_contact=sequelize.define("emergency_contact",{
       
        name:{
            type:DataTypes.STRING,
            
        },
        address:{
            type:DataTypes.STRING,
            unique:true,

        },
        phoneNumber:{
            type:DataTypes.STRING,
            unique:true,
            
            validate:{
                checkPhoneNum(value){
                    if(!validator.isMobilePhone(value)){
                        throw new Error("Invalid Phone number")
                    }
                }
            }
        }

    })
    return emergency_contact;
}