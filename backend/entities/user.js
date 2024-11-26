import typeorm from 'typeorm';

const User = new typeorm.EntitySchema({
  name: 'User',
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },
    email: {
      type: String,
      unique: true,
      nullable: true,
    },
    firstname: { type: String, nullable: true },
    lastname: { type: String, nullable: true },
    recommend: { type: String, nullable: true },
  },
  relations: {
    categories: {
      type: 'many-to-one',
      target: 'rating',
    },
  },
});

export default User;
