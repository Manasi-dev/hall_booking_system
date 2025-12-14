const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define("Booking", {
  mobileNo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hallName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  applicantName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  purposeOfUse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rent: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  additionalCharges: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: false
  },
  receiptNo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  receiptDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Booking;
