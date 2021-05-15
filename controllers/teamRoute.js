const { Team } = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/teams/:TEAMID', async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.TEAMID);
    
    if (!teamData) {
      res.status(404).json({ message: 'No team found with this id!' });
      return;
    };

    const team = teamData.get({ plain: true });
    res.status(200).render('teampage', { team });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/teams', isAuthenticated, async (req, res) => {
  try {

    const southeastData = await Team.findAll({ where: { division: 'Southeast' } });
    const atlanticData = await Team.findAll({ where: { division: 'Atlantic' } });
    const pacificData = await Team.findAll({ where: { division: 'Pacific' } });
    const northwestData = await Team.findAll({ where: { division: 'Northwest' } });
    const southwestData = await Team.findAll({ where: { division: 'Southwest' } });
    const centralData = await Team.findAll({ where: { division: 'Central' } });
    
    if (!southeastData || !atlanticData || !pacificData || !northwestData || !southeastData || !southwestData) {
      res.status(404).json(err);
      return;
    };

    const southeast = southeastData.map((team) =>
      team.get({ plain: true })
    );
    const atlantic = atlanticData.map((team) =>
      team.get({ plain: true })
    );
    const pacific = pacificData.map((team) =>
      team.get({ plain: true })
    );
    const northwest = northwestData.map((team) =>
      team.get({ plain: true })
    );
    const southwest = southwestData.map((team) =>
      team.get({ plain: true })
    );
    const central = centralData.map((team) =>
      team.get({ plain: true })
    );

    res.status(200).render('teams', { southeast, atlantic, pacific, northwest, southwest, central } );
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