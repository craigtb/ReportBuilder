(function() {
    'use strict';

    app.controller('reportBuilderCtrl', reportBuilderCtrl);
    
    function reportBuilderCtrl($http){
        var reportBuilder = this;
        reportBuilder.rules = []
        reportBuilder.currentItem = {}
        reportBuilder.currentItem.rule = {}
        reportBuilder.currentRule = 0
        reportBuilder.companyName = ""
        reportBuilder.reportItems = []

        $http.get('/getAllRules')
            .then(function(data) {
                    reportBuilder.rules = data.data

            },function(err) {
                console.error("Error ", err);
            });

        reportBuilder.addItem = function(){

            var rule = _.findIndex(reportBuilder.rules, ['id', parseInt(reportBuilder.currentItem.currentRule)]);
            reportBuilder.currentItem.rule = reportBuilder.rules[rule]
            reportBuilder.reportItems.push(reportBuilder.currentItem)
            reportBuilder.currentItem = {}
        }
    }
})();