
# RESTaurant API

RESTaurant API is a back-end-only REST API that connects to a locally hosted MySQL database. 





## Installation

Install RESTaurant API with npm

```bash
  npm install 
  cd RESTaurant API
```

The project need a MySQL database running localy (with Mamp for exemple)
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
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete item

```http
  DELETE http://localhost:3000/items/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |

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
| `id`      | `string` | **Required**. Id of categories to fetch |

#### Delete categories

```http
  DELETE http://localhost:3000/categories/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of categories to delete |

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
| `id`      | `string` | **Required**. Id of formulas to fetch |

#### Delete formulas

```http
  DELETE http://localhost:3000/formulas/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of formulas to delete |




## Authors

- [@ZadoxYT](https://www.github.com/ZadoxYT)

