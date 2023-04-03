 module.exports = (sequelize, Sequelize) => {
    return sequelize.define("files", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      filename: {
        type: Sequelize.STRING,
      },
      fileContent:{
        type: Sequelize.TEXT('long'),
      },  
      fileSize :
      { type: Sequelize.STRING,
    },
    });
  };