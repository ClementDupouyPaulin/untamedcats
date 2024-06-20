import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public birthDate!: Date;
  public gender!: string;
  public email!: string;
  public password!: string;  // Assurez-vous que cette propriété est définie
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize, // this bit is important
  }
);

export default User;
