define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        employees = 
        [
            {"id":  1,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Software Developer",                                "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},
            {"id":  2,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Junior Software Specialist",                        "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},
			{"id":  3,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Implementations Coordinator",                       "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},
			{"id":  4,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Software Developer",                                "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},       
			{"id":  5,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Accounts Receivable & Contract Management",         "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},
			{"id":  6,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Business Developer",                                "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},
			{"id":  7,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Chief Executive Officer",                           "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},
			{"id":  8,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "IT Services Administrator",                         "department": "Tech",                 "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},
			{"id":  9,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Cooperative Education Student",                     "department": "Tech",                 "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""}, 
			{"id": 10,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Senior Systems Designer",                           "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""}, 
			{"id": 11,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Senior Implementations Coordinator",                "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},
			{"id": 12,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Implementations Specialist",                        "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},    
			{"id": 13,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Director, IT Services",                             "department": "Tech",                 "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},  
			{"id": 14,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Software Developer",                                "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},   
			{"id": 15,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Financial Supervisor",                              "department": "Tech",                 "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},  
			{"id": 16,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "IT Services Administrator",                         "department": "Tech",                 "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""}, 
			{"id": 17,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Customer Relations Coordinator",                    "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},   
			{"id": 18,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Team Leader, IT Services",                          "department": "Tech",                 "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},  
			{"id": 19,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Senior Systems Analyst",                            "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},  
			{"id": 20,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Implementations Specialist",                        "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},
			{"id": 21,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Software Developer",                                "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},
			{"id": 22,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Implementations Specialist",                        "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},  
			{"id": 23,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "IT Services Administrator",                         "department": "Tech",                 "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""}, 
			{"id": 24,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Plexxis Tech Support",                              "department": "Tech",                 "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""}, 
			{"id": 25,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Plexxis Software Support",                          "department": "Software",             "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""},   
			{"id": 26,  "firstName": "Steve",   "lastName": "Jobs",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Plexxis Fax",                                       "department": "",                     "cellPhone": "1234567890",          "officePhone": "1234567890",          "email": "stevejobs@apple.com",     "city": "",      "pic": "Steve_Jobs.jpg",    "twitterId": "",      "blog": ""}                                                                                                        
        ],

        findById = function (id) {
            var deferred = $.Deferred(),
                employee = null,
                l = employees.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }
            deferred.resolve(employee);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred(),
                results = employees.filter(function (element) {
                    var fullName = element.firstName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByManager = function (managerId) {
            var deferred = $.Deferred(),
                results = employees.filter(function (element) {
                    return managerId === element.managerId;
                });
            deferred.resolve(results);
            return deferred.promise();
        },


        Employee = Backbone.Model.extend({

            initialize: function () {
                this.reports = new ReportsCollection();
                this.reports.parent = this;
            },

            sync: function (method, model, options) {
                if (method === "read") {
                    findById(parseInt(this.id)).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        EmployeeCollection = Backbone.Collection.extend({

            model: Employee,

            sync: function (method, model, options) {
                if (method === "read") {
                    findByName(options.data.name).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        ReportsCollection = Backbone.Collection.extend({

            model: Employee,

            sync: function (method, model, options) {
                if (method === "read") {
                    findByManager(this.parent.id).done(function (data) {
                        options.success(data);
                    });
                }
            }

        });

    return {
        Employee: Employee,
        EmployeeCollection: EmployeeCollection,
        ReportsCollection: ReportsCollection
    };

});