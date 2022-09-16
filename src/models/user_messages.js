module.exports=(sequelize,DataTypes)=>{
    const user_messages=sequelize.define("user_messages",{
        id:{
            type:DataTypes.UUID,
            allownull:false,
            unique:true

        },
        userId:{
            type:DataTypes.UUID,
            allownull:false,
            unique:true
        },
        messageId:{
            type:DataTypes.UUID,
            allownull:false,
            unique:true
        }
    })
}