## Teams & Athletes

You have been given a set of CSV files representing data for football teams & athletes, and have been asked to build a RESTful API for them.

### Required Routes

* `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` for athletes and teams
* For a given team, list all of the athletes on it

### Response Format

```json
{
    "data": {
        "pluralResourceNames": [{
            "id": 1,
            "attributeName": "attributeValue",
            "relatedId": 1
        },{
            "id": 2,
            "attributeName": "attributeValue",
            "relatedId": 1
        }]
    },
    "included": {
        "singularRelatedResource": {
            "id": 1,
            "attributeName": "attributeValue"
        }
    }
}
```

### Notes

* Your application should start listening for requests in `/bin/index.js`, and your application logic should live in `app.js` (or be otherwise imported into it)
* You may use the included tests to check your work with `npm test`
* You must deploy your API
