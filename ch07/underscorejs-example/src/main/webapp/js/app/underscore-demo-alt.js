// /js/app/underscore-demo-alt.js
requirejs(['underscore', 'devlog' ],
	function (_, DevLog) {

		var dv = new DevLog();

	    dv.reportNewLine("inside underscore-demo module");

	    _.each( [1, 2, 3], function(n) { dv.reportNewLine(n); });


		dv.reportNewLine(
		  _.map( [1, 2, 3], 
		   function(n){ return n * 3; })  
		);
		// [3, 6, 9]

		dv.reportNewLine(
		  _.map( [ 1, 2, 3, 4], function(x){ return x * x; } )
		);
		// [1, 4. 9, 16]

		dv.reportNewLine(
		  _.map( [ 1, 2, 3, 4], 
		    function(x){ return "A" + x; } )
		);

		var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
		dv.reportNewLine(evens);

		var ContactDetail = function(
			gender, firstName, lastName, age, occupation ) 
		{
			this.gender = gender;
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
			this.occupation = occupation
			this.getFullName = function() { 
				return contact.firstName + " " + contact.lastName;
			}

            return this;
		};

        ContactDetail.prototype.toString = function contactString() {
            var ret = "ContactDetail{ gender="+this.gender + ", " +
                "firstName="+this.firstName+", lastName="+this.lastName+", age="+this.age+", "+
                "occupation="+this.occupation+" }";
            return ret;
        }

		var r1 = _.filter(['Anne','Mike','Pauline','Steve'],
			function(name){ return name.startsWith('P'); });
		dv.reportNewLine(r1);

		var contacts = [ 
			new ContactDetail( 'F', 'Anne', 'Jackson', 28, 'Developer' ),
			new ContactDetail( 'M', 'William', 'Benson', 29, 'Developer' ),
			new ContactDetail( 'M', 'Micheal', 'Philips', 33, 'Tester' ),
			new ContactDetail( 'M', 'Ian', 'Charles', 45, 'Sales' ),
			new ContactDetail( 'F', 'Sarah', 'Hart', 55, 'CEO' ),
		];
		var r2 = _.where(contacts, {occupation: 'Developer', age: 28 });
		dv.reportNewLine(r2);


		var f1 = _.flatten([1, [2], [3, [[4]]]] ) ;
		dv.reportNewLine("flatten f1 = " + f1 );

		var f2 = _.flatten([1, [2], [3, [[4]]]], true);
		dv.reportNewLine("flatten f2 = " + f2 );

		var Sector = function( name, value ) {
			this.name = name;
			this.value = value;
		};

        Sector.prototype.toString = function sectorToString() {
            return "Sector{ name="+this.name+", value="+this.value + " }"
        }

		var salesSectorData = [ 
			[
				[ 
					new Sector("New York", 3724.23),
					new Sector("Boston", 8091.79)
				],
				[
					new Sector("Houston", 9631.54)
				],
			],
			[
				new Sector("London", 2745.23),
				new Sector("Glasgow", 4286.36)
			]
		];

		var f3 = _.flatten(salesSectorData);
		dv.reportNewLine("f3 = "+f3);

		var f4 = _.flatten(salesSectorData, true );
		dv.reportNewLine("f4 = "+f4);

		var totalValue=  _.reduce(
			f3, 
			function(acc, sector) {
				return acc + sector.value;
			}, 
			0 );
		dv.reportNewLine("totalValue = " + totalValue)
	}
);
