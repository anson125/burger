var mysql = require ('mysql');

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
	connection = mysql.createConnection(
	{
		host: 'i5x1cqhq5xbqtv00.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
		user: 'lk4sa0mktfkmz2v9',
		password: 'l43uya19fs23azcy',
		database: 'pwcjc7qn7kju8ced'
	});
};

connection.connect(function(err) 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
