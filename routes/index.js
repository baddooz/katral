
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'ekaryaa' });
};

exports.helloworld = function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
};

exports.partnerlist = function(db) {
	return function(req, res) {
		var collection = db.get('partnercollection');
		collection.find({}, {}, function(e, docs) {
			res.render('partnerlist', {
				"partnerlist" : docs
			});
		});
	};
};

exports.newpartner = function(req, res) {
	res.render('newpartner', {title: 'Add New Partner' });
};

exports.addpartner = function(db) {
	return function(req, res) {
	
		// Get our form values. These rely on the "name" attributes
		var partnerName = req.body.partnername;
		var partnerCity = req.body.partnercity;
		var partnerEmail = req.body.partneremail;
	
		// Set out collection
		var collection = db.get('partnercollection');
	
		// Submit to the DB
		collection.insert({
			"partnername" : partnerName,
			"city" : partnerCity,
			"email" : partnerEmail
		}, function (err, doc) {
			if(err) {
				// If it failed, return error
				res.send("There was a problem adding the information to the database.");
			}
			else {
				// if it worked, set the header so the address bar doesn't still say /adduser
				res.location("partnerlist");
				// And forward to success page
				res.redirect("partnerlist");
			}
		});
	}
};

exports.newsupplier = function(req, res) {
	res.render('newsupplier', {title: 'Add New Supplier' });
};

exports.addsupplier = function(db) {
	return function(req, res) {
	
		// Get our form values. These rely on the "name" attributes
		var name = req.body.entityname;
		var street1 = req.body.entitystreet1;
		var street2 = req.body.entitystreet2;
		var street3 = req.body.entitystreet3;
		var city = req.body.entitycity;
		var state = req.body.entitystate;
		var country = req.body.entitycountry;
		var countryisocode = req.body.entitycountryisocode;
		var phonenumber = req.body.entityphonenumber;
		var faxnumber = req.body.entityfaxnumber;
		var email = req.body.entityemail;
		var dandbnumber = req.body.entityandbnumber;
	
		// Set out collection
		var collection = db.get('suppliercollection');
	
		// Submit to the DB
		collection.insert({
			"name" : name,
			"street1" : street1,
			"street2" : street2,
			"street3" : street3,
			"city" : city,
			"state" : state,
			"country" : country,
			"countryisocode" : countryisocode,
			"phonenumber" : phonenumber,
			"faxnumber" : faxnumber,
			"email" : email,
			"dandbnumber" : dandbnumber
		}, function (err, doc) {
			if(err) {
				// If it failed, return error
				res.send("There was a problem adding the information to the database.");
			}
			else {
				// if it worked, set the header so the address bar doesn't still say /adduser
				res.location("supplierlist");
				// And forward to success page
				res.redirect("supplierlist");
			}
		});
	};
};

exports.supplierlist = function(db) {
	return function(req, res) {
		var collection = db.get('suppliercollection');
		collection.find({}, {}, function(e, docs) {
			res.render('supplierlist', {
				"supplierlist" : docs
			});
		});
	};
};
