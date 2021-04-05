module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      required: true,
    },
    is_confirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    address: {
      type: DataTypes.STRING,
      required: true,
    },
    city: {
      type: DataTypes.STRING,
      required: true,
    },
    phone_number: {
      type: DataTypes.INTEGER,
      required: true,
    },
    image: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Specialty, {
      onDelete: "cascade",
    });
    User.hasMany(models.Education, {
      onDelete: "cascade",
    });
    User.hasMany(models.Schedule, {
      onDelete: "cascade",
    });
  };
};
