const {Sequelize}=require('Sequelize')
const sequelize=new Sequelize("bjmapvfemg92dfc2aayl","uisoyts6gxjkwpsz","qb7d2Do3GdOQgaiC90OG",{
    host:"bjmapvfemg92dfc2aayl-mysql.services.clever-cloud.com",
    dialect:"mysql"
})

try{
    sequelize.authenticate()
    console.log("Authentication Successfully")

}catch{
    console.log("Error")
}
