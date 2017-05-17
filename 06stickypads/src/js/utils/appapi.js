let AppActions = require('./../actions/appactions');

module.exports =  {
	saveNote(note){
		$.ajax({
			url: 'https://api.mlab.com/api/1/databases/stickypads/collections/notes?apiKey=cuwSB6uIFDMYaN17lcap4qAsnYrpZ-w8',
			data: JSON.stringify(note),
			type: 'POST',
			contentType: 'application/json'
		});
	},

	fetchNotes(){
		console.log('calling ajax');
		$.ajax({
			url: 'https://api.mlab.com/api/1/databases/stickypads/collections/notes?apiKey=cuwSB6uIFDMYaN17lcap4qAsnYrpZ-w8',
			dataType: 'JSON',
			cache: false,
			success: function(data){
				console.log('Notes fetched successfully');
				AppActions.fetchNotes(data);
			}.bind(this),
			error: function(xhr, status, err){
				console.log('error while saving: ', err)
			}.bind(this)
		})
	},

	removeNote(noteId){
		console.log('deleting note from DB...');
		$.ajax({
			url: 'https://api.mlab.com/api/1/databases/stickypads/collections/notes/' + noteId + '?apiKey=cuwSB6uIFDMYaN17lcap4qAsnYrpZ-w8',
			type: 'DELETE',
			async: true,
			timeout: 300000,
			success: function(data){
				console.log('deleted note successfully');
			}.bind(this),
			error: function(xhr, status, err){
				console.log('error while deleting the note from DB ... ', err);
			}.bind(this)
		});
	}
}