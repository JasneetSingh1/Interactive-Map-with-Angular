# Interactive Map with Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.



<img src="src\assets\website-front.png">


# API

The project uses the Worldbank API to identify data for each of the following six properties for each country:

* Country name (e.g., Russian Federation)
* Country capital (e.g., Moscow)
* Country region (e.g., Europe & Central Asia)
* Income level (e.g., Upper middle income)
* Latitude (e.g., 37.6176)
* Longitude (e.g., 55.7558)

# Angular routing module

Assigned the map component to the default URL.

# HTML layout

Created two columns:

1. For the map itself
2. To show the required country information from the API

# Angular module HTTP client

Created a service that uses an HTTP client to make HTTP calls and includes:

* getApiData(countryId: any){}
* Accepts a country ID as an input parameter, and returns additional information gathered from the API for the selected country.

* whatCountry(onCountryChange: { (countryId: any): void; (arg0: string): void; }) {}

* Uses a callback function that is called everytime the �mouseover� event is triggered.
* Callback function �onCountryChange� is passed as a parameter to the �whatCountry()� method. This function is called every time the �mouseover� event is triggered on an SVG path element, and it�s passed the �countryId� value as an argument.

# SVG MAP

The project uses an SVG map from:
http://innovsandbox.space/map.html






