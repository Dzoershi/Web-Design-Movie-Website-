import typeorm from 'typeorm';

const movie = new typeorm.EntitySchema({
  name: 'movie',
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },
    titre: {
      type: String,
      unique: true,
      nullable: true,
    },
    date_de_sortie: { type: String, nullable: true },
    description: { type: String, nullable: true },
    genre: { type: String, nullable: true },
    realisateur: { type: String, nullable: true },
    note: { type: String, nullable: true },
    duree: { type: String, nullable: true },
  },
  relations: {
    categories: {
      type: 'many-to-one',
      target: 'rating',
    },
  },
});

export default movie;
