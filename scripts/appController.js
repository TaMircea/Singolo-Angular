app.controller('app', function($scope) {

	this.projectListing = new ProjectListing();
	this.filterList     = new FilterList();
	this.displayer      = new Displayer();

	this.onFilter = function(event, selected) {
		this.projectListing.filter(selected)
	}
	this.onZoomProj = function(event) {
		this.displayer.ZoomProj(event);
	}
});