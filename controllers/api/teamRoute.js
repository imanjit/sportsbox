const { Team } = require('../../models');
const router = require('express').Router();

router.get('/teams/:TEAMID', async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.TEAMID);
    
    if (!teamData) {
      res.status(404).json({ message: 'No team found with this id!' });
      return;
    };

    const team = teamData.get({ plain: true });
    res.status(200).render('teams', { team });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/api/teams/:TEAMID', async (req, res) => {
    try {
      const teamData = await Team.findByPk(req.params.TEAMID);
  
      if (!teamData) {
        res.status(404).json({ message: 'No team found with this id!' });
        return;
      }
  
      res.status(200).json(teamData);
    } catch (err) {
      res.status(500).json(err);
    }
});
router.get('/api/teams', async (req, res) => {
    try {
      const teamData = await Team.findAll();
  
      if (!teamData) {
        res.status(404).json({ message: 'No teams found!' });
        return;
      }
  
      res.status(200).json(teamData);
    } catch (err) {
      res.status(500).json(err);
    }
});
router.delete('/api/teams/:TEAMID', async (req, res) => {
    try {
      const teamData = await Team.destroy({
        where: {
          TEAMID: req.params.TEAMID
        }
      });
  
      if (!teamData) {
        res.status(404).json({ message: 'No team was found with this id.' });
        return;
      }
  
      res.status(200).json(teamData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;