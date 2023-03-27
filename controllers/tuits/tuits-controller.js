import posts from "./tuits.js";
let tuits = posts;

const findTuits = (req, res) =>
  { res.json(tuits);}

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.username = "spaceX";
    newTuit.time = "2h";
    newTuit.title = "new published tuits";
    newTuit.handle = "@spacex";
    newTuit.image = "https://www.reuters.com/resizer/S2QZTkoqSfT_OagpUN2LL5FX5j8=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TXDGVXPBEVMY5PA2RHRF2EA25Y.jpg";
    tuits.push(newTuit);
    res.json(newTuit);
}


const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const tuitIndex = tuits.findIndex(
    (t) => t._id === tuitdIdToUpdate)
  tuits[tuitIndex] =
    {...tuits[tuitIndex], ...updates};
  res.sendStatus(200);
}


const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) =>
    t._id !== tuitdIdToDelete);
  res.sendStatus(200);
}



export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

