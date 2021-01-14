module.exports = function (sequelize, DataTypes) {
    var MemberInfo = sequelize.define("MemberInfo", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: {
          len: [1]
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: {
          len: [1]
        }
      },
      income: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        validate: {
          len: [1]
        }
      },
      children: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        validate: {
          len: [1]
        }
      },
      childernages: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
        validate: {
          len: [1]
        }
      },
      spouse: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
        validate: {
          len: [1]
        }
      },
      donating:{
          type: DataTypes.STRING,
          allowNull: true,
          validate:{
             len: [1] 
          }
      },

   
    });
    // BandMember.associate = function (models){
    //   BandMember.belongsTo(models.BandUser, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
    return MemberInfo;
  };