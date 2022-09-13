const validator=require('validator')
module.exports=(sequelize,DataTypes)=>{
    const emergency_contact=sequelize.define("emergency_contact",{
        id:{
            type:DataTypes.UUID,
            unique:true,
            allownull:false

        },
        name:{
            type:DataTypes.STRING,
            unique:false,
            allownull:false
        },
        address:{
            type:DataTypes.STRING,
            unique:true,

        },
        phone_number:{
            type:DataTypes.STRING,
            unique:true,
            allownull:false,
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