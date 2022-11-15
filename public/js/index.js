(async() => {
    const database = require('../configdb.js')
    const Equipment = require('../../src/models/Equipament.ts')


     await database.sync();
        
     await Equipment.create({
        serialNumber: "123123123",
        partNumber: "123123123145",
        description: "Está sendo usado",
        name: "Roteador cisco 1"
     })

     await Equipment.create({
        serialNumber: "123",
        partNumber: "12312",
        description: "Está sendo usado segundo",
        name: "Roteador cisco 2"
     })

     await Equipment.create({
        serialNumber: "123123",
        partNumber: "123123123",
        description: "Está sendo usado terceuri",
        name: "Roteador cisco 3"
     })

  /*   const alterEquipment = await Equipment.findByPk(2)
     alterEquipment.serialNumber = "Arquivo Alterado"
     await alterEquipment.save()*/

     Equipment.destroy({
        where: {idequipamento: 1}
     })

     const findEquipment = await Equipment.findByPk(2)
     console.log(findEquipment)

     const findAllEquipment = await Equipment.findAll(2)
     console.log(findAllEquipment)
})();