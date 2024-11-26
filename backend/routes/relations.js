import express from 'express';
import { appDataSource } from '../datasource.js';
import relation from '../entities/relation.js';

const router = express.Router();

router.get('/', function (req, res) {
  appDataSource
    .getRepository(relation)
    .find({})
    .then(function (relations) {
      res.json({ relations: relations });
    });
});

router.post('/new', function (req, res) {
  const userRepository = appDataSource.getRepository(relation);
  const newrelation = userRepository.create({
    score: req.body.score,
  });

  userRepository
    .save(newrelation)
    .then(function (savedrelation) {
      res.status(201).json({
        message: 'User successfully created',
        id: savedrelation.id,
      });
    })
    .catch(function (error) {
      console.error(error);
      if (error.code !== '23505') {
        res.status(500).json({ message: 'Error while creating the relation' });
      }
    });
});

router.delete('/:userId', function (req, res) {
  appDataSource
    .getRepository(relation)
    .delete({ id: req.params.relationId })
    .then(function () {
      res.status(204).json({ message: 'relation successfully deleted' });
    })
    .catch(function () {
      res.status(500).json({ message: 'Error while deleting the relation' });
    });
});

export default router;
