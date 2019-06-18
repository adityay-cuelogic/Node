const members = require("../../../members");
const uuid =  require("uuid");

const getRecords = ( req, res ) => {
    let found  = members.filter( member => member.id == req.params.id );
    if( found.length > 0 ) {
        res.json( found )
    } else {
        res.status(400).json({msg: `No data found for ${req.params.id}`});
    }
}

const insertRecords = (req, res) => {
    const newMember = {
      id: uuid.v4(),
      name: req.body.name,
      email: req.body.email,
      status: 'active'
    };
  
    if (!newMember.name || !newMember.email) {
      return res.status(400).json({ msg: 'Please include a name and email' });
    }
  
    members.push(newMember);
    res.json(members);
  }

module.exports.getRecords = getRecords;
module.exports.insertRecords = insertRecords;