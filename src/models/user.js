const validator=require('validator')
module.exports=(sequelize,DataTypes)=>{
    const user=sequelize.define("user",{
        
        name:{
            type:DataTypes.STRING,
            
        },
        email:{
            type:DataTypes.STRING,
            allownull:false,
            unique:true,
            validate:{
                checkEmail(value){
                    if(!validator.isEmail(value)){
                        throw new Error("Invalid email")
                    }
                }
            }

        },
        contactNumber:{
            type:DataTypes.STRING,
            unique:true,
            validate:{
                checkPhoneNumber(value){
                    if(!validator.isMobilePhone(value)){
                        throw new Error("Invalid phone number")
                    }
                }
            }
        },
        address:{
            type:DataTypes.STRING,
            unique:true,
            allownull:false,
           
        },
        dateofBirth:{
            type:DataTypes.DATE,
            allownull:false
        },
        bloodGroup:{
            type:DataTypes.ENUM("A+","B+","O+","AB+","A-","B-","O-","AB-"),
            allownull:false

        }


        
    })
    return user;
}