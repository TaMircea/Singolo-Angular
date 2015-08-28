var app = angular.module('portfolio', []);

app.filter('unique', function() {
    return function(input, key) {
    	var input = input;
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});

app.filter('projectsFilter', function(){

    return function(projects, category) {

    var filteredProjects = [];
    var projects = projects;
    var category = category[0];


    angular.forEach(projects, function(project) {
        if(project.categories == category){
            filteredProjects.push(project);
        }
        if(category == "All"){
            filteredProjects.push(project);
        }
    });
    return filteredProjects;
  }
})


app.controller('appController', function($scope){
	this.projects = [{
        id: 1,
        name: 'project1',
        photo: 'lib/pictures/proj1.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum velit, impedit consectetur aspernatur eius et. Assumenda neque eius vitae, illo ipsa dignissimos cumque, minus provident sunt voluptatibus doloremque temporibus maxime!1",
        categories: ['Artwork']
      }, {
        id: 2,
        name: 'product2',
        photo: 'lib/pictures/proj2.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium doloribus officia sequi, cum quae voluptate molestias odit explicabo fugiat consequuntur vel, quisquam placeat expedita autem, blanditiis eaque. Repellendus, qui, quaerat.2",
        categories: ['Graphic-Design']
      }, {
        id: 3,
        name: 'product3',
        photo: 'lib/pictures/proj3.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo tempora vero quasi a, neque officia dolorem ex commodi temporibus modi. Placeat cumque reprehenderit doloremque, repellat ad dolorum harum nostrum, labore.3",
        categories: ['Graphic-Design']
      }, {
        id: 4,
        name: 'product4',
        photo: 'lib/pictures/proj4.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ratione, cumque molestiae! Consequuntur corporis placeat facilis labore aut doloribus dolorem cupiditate perferendis aliquid, a, earum ab asperiores quas repellendus ex.4",
        categories: ['Artwork']
        }, {
        id: 5,
        name: 'project5',
        photo: 'lib/pictures/proj5.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tenetur quos unde eum labore quo nisi ipsum ea. Officiis molestias explicabo, iure similique iusto! Aspernatur eligendi, et itaque! Incidunt, excepturi.5",
        categories: ['Web-Design']
      }, {
        id: 6,
        name: 'product6',
        photo: 'lib/pictures/proj6.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio laboriosam illum facilis, sequi labore earum accusamus nam quos deleniti, illo ipsum voluptate aut consectetur pariatur. Culpa qui, nesciunt saepe commodi.6",
        categories: ['Artwork']
      }, {
        id: 7,
        name: 'product7',
        photo: 'lib/pictures/proj7.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptas, laudantium quaerat, corporis autem quas tempore delectus veritatis voluptates labore, at explicabo! Dolores quibusdam est laborum similique a odio, ipsam.7",
        categories: ['Artwork']
      }, {
        id: 8,
        name: 'product8',
        photo: 'lib/pictures/proj8.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel labore, vero sit autem incidunt placeat illo dolorem eaque, corrupti, dolore eum quis beatae. Fuga non nemo repudiandae labore dolore, neque.8",
        categories: ['Web-Design']
      },{
        id: 9,
        name: 'project9',
        photo: 'lib/pictures/proj9.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptate natus deserunt reprehenderit, ipsam dolore hic consectetur explicabo! Officia, id modi laboriosam quas, soluta quis odit facere sunt nulla. Ducimus.9",
        categories: ['Web-Design']
      }, {
        id: 10,
        name: 'product10',
        photo: 'lib/pictures/poj10.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores id aliquid doloribus et ipsam delectus enim repudiandae atque quasi iure pariatur nemo similique, esse, autem animi! Dolorum quas iusto id.10",
        categories: ['Web-Design']
      }, {
        id: 11,
        name: 'product11',
        photo: 'lib/pictures/proj11.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam omnis, perferendis recusandae et esse ex adipisci nihil architecto alias maiores, tempore, corrupti accusamus officia. Dolorem ipsum tenetur, distinctio corrupti voluptatem.11",
        categories: ['Web-Design']
      }, {
        id: 12,
        name: 'product12',
        photo: 'lib/pictures/proj12.png',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae rerum neque quibusdam odit, blanditiis deserunt iusto voluptate sed corporis aliquid, illum, itaque necessitatibus officia architecto omnis quaerat veniam quam recusandae?12",
        categories: ['Web-Design']
      }
	];
    this.projects[0].categories.push("All")
    this.currentCategory = ["All"];
    this.setCurrentCategory = function(category){
        this.currentCategory=category;
    };


});
