
# RESTaurant API

RESTaurant API is a back-end-only REST API that connects to a locally hosted MySQL database. 





## Installation

Install RESTaurant API with npm

```bash
    cd RESTaurant API
    npm install 
```

The project need a MySQL database running localy (with Mamp for exemple)

To use the API with a liveserver on your IDE, you need to use Nodemon. With this dependancy, you don't need to restart everytime the API when a do a modification

```bash
    nodemon index.js
```
## API Reference

#### Get all items

```http
  GET http://localhost:3000/items
```
#### Get item

```http
  GET http://localhost:3000/items/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |

#### Add an item

```http
  POST http://localhost:3000/items/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of your item |
| `description`      | `string` | **Required**. Description of your item  |
| `price`      | `number` | **Required**. Price of your item|
| `categorie_id`      | `number` | **Required**. The ID of the categorie of your item  |

#### Delete item

```http
  DELETE http://localhost:3000/items/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to delete |

#### Update an item

```http
  PUT http://localhost:3000/items/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |
| `name`      | `string` | **Required**. New name of your item |
| `description`      | `string` | **Required**. New description of your item  |
| `price`      | `number` | **Required**. New price of your item|
| `categorie_id`      | `number` | **Required**. The new ID of the categorie of your item  |

##

#### Get all categories

```http
  GET http://localhost:3000/categories
```
#### Get categories

```http
  GET http://localhost:3000/categories/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of categories to fetch |

#### Add categories

```http
  POST http://localhost:3000/categories/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of your categorie |

#### Delete categories

```http
  DELETE http://localhost:3000/categories/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of categories to delete |

#### Update categories

```http
  PUT http://localhost:3000/categories/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of categories to update |
| `name`      | `string` | **Required**. Name of your categorie |

##

#### Get all formulas

```http
  GET http://localhost:3000/formulas
```
#### Get formulas

```http
  GET http://localhost:3000/formulas/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of formulas to fetch |

#### Add formulas

```http
  POST http://localhost:3000/formulas/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of your formulas |
| `prix_min`      | `number` | **Required**. Minimum price of your formulas |
| `prix_max`      | `number` | **Required**. Maximum price of your formulas  |

#### Delete formulas

```http
  DELETE http://localhost:3000/formulas/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of formulas to delete |

#### Update formulas

```http
  PUT http://localhost:3000/formulas/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of formulas to update |
| `name`      | `string` | **Required**. Name of your formulas |
| `prix_min`      | `number` | **Required**. Minimum price of your formulas |
| `prix_max`      | `number` | **Required**. Maximum price of your formulas  |



## Authors

- [@ZadoxYT](https://www.github.com/ZadoxYT)

