import * as tuitsDao from 'tuits-dao.js'

let tuits = posts;

const findTuits = async (req, res) =>{
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.username = "spaceX";
    newTuit.time = "2h";
    newTuit.title = "new published tuits";
    newTuit.handle = "@spacex";
    newTuit.image = "https://www.reuters.com/resizer/S2QZTkoqSfT_OagpUN2LL5FX5j8=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TXDGVXPBEVMY5PA2RHRF2EA25Y.jpg";
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}


const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao
                         .updateTuit(tuitdIdToUpdate,
                                     updates);
  res.sendStatus(status);
}


const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao
                         .deleteTuit(tuitdIdToDelete);
  res.sendStatus(status);
}



export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

