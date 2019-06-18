const dotenv  =  require("dotenv").config();

module.exports.getSubtractedDate = () => {
    var dt = new Date();
    dt.setDate( dt.getDate() - process.env.DAYS );
    return dt;
}