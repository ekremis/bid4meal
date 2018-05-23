export class MainController {
  constructor ($timeout, $scope, webDevTec, toastr, $location) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1526834310569;
    this.toastr = toastr;
    this.Journey1 = true;
    this.Journey2 = false;
    this.synopsis = false;

    this.activate($timeout, webDevTec);    

    this.mealPackages =
    {
       "booking":{
          "recordLocator":"TST123",
          "status":"Confirmed",
          "culture":"en-US",
          "passengers":[
             {
                "firstName":"Burt",
                "lastName":"Reynolds",
                "prefix":"Mr",
                "gender":"Male",
                "type":"Adult"
             },
             {
                "firstName":"Susan",
                "lastName":"Clark",
                "prefix":"Mrs",
                "gender":"Female",
                "type":"Adult"
             },
             {
                "firstName":"Kevin",
                "lastName":"Reynolds",
                "prefix":"Mr",
                "gender":"Male",
                "type":"Child"
             }
          ],
          "journeys":[
             {
                "key":"TST12 BCN-LAX 30/08/2014 08:35",
                "flight":"TST 12",
                "departure":"BCN",
                "departureDate":"2014-08-30T08:35:00.000+08:00",
                "arrival":"LAX",
                "arrivalDate":"2014-08-30T19:45:00.000+08:00"
             },
             {
                "key":"TST21 LAX-BCN 30/09/2014 08:35",
                "flight":"TST 21",
                "departure":"LAX",
                "departureDate":"2014-09-30T08:35:00.000+08:00",
                "arrival":"BCN",
                "arrivalDate":"2014-09-30T19:45:00.000+08:00"
             }
          ]
       },
       "options":[
          {
             "mealId":"ML01",
             "desc":"Snacks & Soda",
             "priceRange":{
                "min":0,
                "max":20,
                "jump":5
             },
             "currency":"EUR"
          },
          {
             "mealId":"ML02",
             "desc":"Light Dinner: Salad & Wine",
             "priceRange":{
                "min":0,
                "max":50,
                "jump":10
             },
             "currency":"EUR"
          },
          {
             "mealId":"ML03",
             "desc":"Dinner or Lunch: Meat with Pasta, Salad, Brad rolls, Tiramisu Cake, Cheese and Crackers.",
             "priceRange":{
                "min":0,
                "max":100,
                "jump":25
             },
             "currency":"EUR"
          },
          {
             "mealId":"ML04",
             "desc":"Breackfast: Yogurt, Juice or Cooffe, Bread and Cookies",
             "priceRange":{
                "min":0,
                "max":20,
                "jump":5
             },
             "currency":"EUR"
          }
       ]
    }    

    this.bids = {
      "ML01":{
        "name": "ML01",
        "ranges":[5, 10, 15, 20]        
        },
      "ML02":{
        "name": "ML02",
        "ranges":[10, 20, 30, 40, 50]        
        },   
      "ML03":{
        "name": "ML03",
        "ranges":[25, 50, 75, 100]        
        },
      "ML04":{
        "name": "ML04",
        "ranges":[5, 10, 15, 20]        
        }        
    }

    this.passengerMeals = {
      "selection": []
    }

    this.bid4Meal = function(journey, meal, selectedBid, lastJourney) {
      if(!selectedBid) { toastr.error('You need to choose a bid first!'); }
      else 
      {
        console.log(journey, meal, selectedBid);
        var selectionJson = {
        "journeyKey": journey,
        "amount": selectedBid,
        "currency": meal.currency,
        "mealId": meal.mealId };
        console.log(selectionJson);
        this.passengerMeals.selection.push(selectionJson);
        console.log(this.passengerMeals);
        this.Journey2 = true;
        this.Journey1 = false;  
        if(lastJourney) 
        {
          this.Journey2 = false;
          this.Journey1 = false; 
          this.synopsis = true; 
        }
      }
    } 

    this.submitMeals = function() {
      toastr.success('Your meals on the way :)');
      this.synopsis = false;
      this.goodbye = true;
    }

    this.cancelMeals = function() {
      $location.path('#');
      toastr.info('Please update your meals!');
    }                     

  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
