// Parse.initialize("","");

// var data = Parse.Object.extend("data");
// var query = new Parse.Query(data);

// var dataTest;
// var dataPoint;
// var dataArray = [];

// query.equalTo("POC", "1").limit(1000);

// //query.limit(10);

// query.find({
//   success: function(results) {
//     for (var i = 0; i <= 999; i++) {
// 	    	dataDate = results[i].attributes.dateGmt;	
// 	    	dataPoint = parseFloat(results[i].attributes.sampleMeasurement);
// 	    	dataArray[i] = new Array(dataDate, dataPoint);
//     };
//     return dataArray;
//   },
//   error: function(error) {
//     alert("Error: " + error.code + " " + error.message);
//   }
// });

// Object {Latitude: "33.82376", Longitude: "-118.18921", Datum: "WGS84", horizontalAccuracy: "0", stateCode: "06"…}
// Datum: "WGS84"
// Latitude: "33.82376"
// Longitude: "-118.18921"
// POC: "1"
// Parse_24HourGmt: "23:00"
// Parse_24HourLocal: "15:00"
// aqsParameterDesc: "Carbon monoxide"
// countyCode: "037"
// dateGmt: "1990-12-16"
// dateLocal: "1990-12-16"
// dayInYearGmt: "350"
// detectionLimit: null
// horizontalAccuracy: "0"
// measurementUncertainty: null
// methodDescription: "-"
// methodType: "Non-Federal Reference"
// parameterCode: "42101"
// qualifierDescription: ""
// sampleDuration: "8-HR RUN AVG END HOUR"
// sampleFrequency: ""
// sampleMeasurement: "1.5"
// siteNum: "4002"
// stateCode: "06"
// unitsOfMeasure: "Parts per million"
// yearGmt: "1990"
// __proto__: Object