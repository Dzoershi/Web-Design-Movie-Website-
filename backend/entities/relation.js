import typeorm from 'typeorm';

const rating = new typeorm.EntitySchema({
  name: 'rating',
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },
    score: { type: Number, nullable: true },
  },
  // relations: {
  //   categories: {
  //     type: 'one-to-many',
  //     target: 'movie',
  //   },
  //   categories: {
  //     type: 'one-to-many',
  //     target: 'User',
  //   },
  // },
});
export default rating;
