---
sidebar_position: 1
---

# Introduction

[Mtaa API](https://mtaa-api.herokuapp.com) is a simple REST(And later GraphQL) API for accessing Tanzania locations created by [AnoRebel](https://github.com/AnoRebel) inspired by [mtaa](https://github.com/Kalebu/mtaa) and [tanzania-location-db](https://github.com/HackEAC/tanzania-locations-db).

## Why mtaa API?

Mtaa API allows people from a variety of programming language (Java, Javascript, PHP and etc) to easily access locations data without the hustle of managing it or having to deal with SDK.

## Features

* No registration
* Zero-config
* Basic API
* Cross-domain ([CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing))
* Supports GET and POST(GraphQL) verbs
* Compatible with React, Angular, Vue, Ember and etc.

## Tools and Libraries

- Flask
- mtaa
- Graphene 
- flask-cors
- flask-graphql

## Hosting

The API is currently hosted on Heroku, You can find it at [https://mtaa-api.herokuapp.com/api](https://mtaa-api.herokuapp.com/api), its hosted under free plan so don't expect low latency on requests response.

Since the project is currently opensource, thats means there is option to host the API  to your own custom server so as to have control on the performance and availability of the API itself.

Now thats we have an ABC of the MtaaAPI, let's have look on how we can integrate mtaa api with our codebase.