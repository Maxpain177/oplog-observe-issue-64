const Counts = new Meteor.Collection('counts')

Counts.find().observe({
	changed(newDoc, oldDoc) {
		console.log(newDoc, oldDoc)
	}
})

Meteor.startup(() => {
	if (!Counts.findOne('users')) {
		Counts.insert({ _id: 'users', count: 0 })
	}

	Meteor.setInterval(() => {
		Counts.update('users', { $set: { count: 0 } })
	}, 3000)
})