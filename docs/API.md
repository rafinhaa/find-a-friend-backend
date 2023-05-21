# Find A Friend API

O [Find A Friend](https://github.com/rafinhaa/find-a-friend-backend) disponibiliza uma API RESTful que permite o acesso ao sistema.

## Métodos

Requisições para a API devem seguir os padrões:

| Método   | Descrição                                             |
| -------- | ----------------------------------------------------- |
| `GET`    | Retorna informações de um ou mais registros.          |
| `POST`   | Utilizado para criar um novo registro.                |
| `PUT`    | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema.                        |
| `PATCH`  | Atualização de um único recurso                       |

# Rotas

## Organização [/orgs]

### Criar nova organização [/]

Criar nova organização

- Method `POST`

- Request (application/json)

  - Body

  ```json
  {
    "responsible": "John Doe",
    "email": "john.doe@example.com",
    "cep": "08010000",
    "address": "Five",
    "whatsapp": "11922222222",
    "password": "password"
  }
  ```

- Response codes

| Código | Descrição                                                                         |
| ------ | --------------------------------------------------------------------------------- |
| `201`  | Recurso criado com sucesso.                                                       |
| `400`  | Erros de validação, campos informados não existem ou parâmetros de url inválidos. |
| `409`  | Recurso já existe.                                                                |
| `500`  | Erro no servidor.                                                                 |

### Autenticar [/user/auth]

Fazer autenticação

- Method `Post`

- Request (application/json)

  - Body

  ```json
  {
    "email": "john.doe@email.com",
    "password": "password"
  }
  ```

- Response example

  ```json
  {
    "org": {
      "id": "0ebed6fb-95a7-4c46-b239-fbe3f030a02c",
      "responsible": "John Doe",
      "email": "john.doe@email.com",
      "cep": "08010000",
      "address": "Five",
      "whatsapp": "11922222222"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwZWJlZDZmYi05NWE3LTRjNDYtYjIzOS1mYmUzZjAzMGEwMmMiLCJpYXQiOjE2ODQ2MTIwNDAsImV4cCI6MTY4NTIxNjg0MH0.sUf9svDOS4QABcbqbVL7BPZiX8Y3Yw_oN_9DCKgcigc"
  }
  ```

- Response codes

| Código | Descrição                                                                         |
| ------ | --------------------------------------------------------------------------------- |
| `200`  | Resposta obtida com sucesso.                                                      |
| `400`  | Erros de validação, campos informados não existem ou parâmetros de url inválidos. |
| `401`  | Email ou senha inválidos                                                          |
| `404`  | Recurso não encontrado.                                                           |
| `500`  | Erro no servidor.                                                                 |

### Refresh token [/token/refresh]

Fazer requisição de um novo token

- Method `PATCH`

- Request (empty)

- Response example

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwZWJlZDZmYi05NWE3LTRjNDYtYjIzOS1mYmUzZjAzMGEwMmMiLCJpYXQiOjE2ODQ2Nzg1MDEsImV4cCI6MTY4NDY3OTEwMX0.pWxpp89C_0nPNNm3mwIbnaNaKyin-ilT2FOXVa0BQ8M"
  }
  ```

- Response codes

| Código | Descrição                    |
| ------ | ---------------------------- |
| `200`  | Resposta obtida com sucesso. |
| `403`  | Sem permissão de acesso      |
| `500`  | Erro no servidor.            |

### Profile [/me]

Fazer requisição de um novo token

- Method `GET`

- Authentication
  Bearer

- Request (empty)

- Response example

```json
{
  "org": {
    "id": "0ebed6fb-95a7-4c46-b239-fbe3f030a02c",
    "responsible": "John Doe",
    "email": "john.doe@email.com",
    "address": "Five",
    "cep": "08010000",
    "whatsapp": "11922222222"
  }
}
```

- Response codes

| Código | Descrição                    |
| ------ | ---------------------------- |
| `200`  | Resposta obtida com sucesso. |
| `403`  | Sem permissão de acesso      |
| `404`  | Recurso não encontrado       |
| `500`  | Erro no servidor.            |

## Pet [/pets]

### Criar novo pet [/]

Criar novo pet

- Method `POST`

- Authentication
  Bearer

- Request (application/json)

- Body

```json
{
  "name": "Maria",
  "about": "pequena e fofa",
  "age": 15,
  "carry": "Small",
  "energyLevel": "VeryHigh",
  "independency": "Medium",
  "ambiente": "Amplo",
  "street": "Rua sete",
  "number": "2",
  "neighborhood": "15",
  "city": "MG",
  "state": "Belo Horizonte",
  "petPhotos": [
    {
      "name": "https://images.dog.ceo/breeds/african/n02116738_4720.jpg"
    }
  ],
  "requirementsAdopted": [
    {
      "description": "Ser carinhoso"
    }
  ]
}
```

- Response example

```json
{
  "pet": {
    "id": "a8ee7d6c-de98-4b60-94a8-539079fc3775",
    "name": "Maria",
    "about": "pequena e fofa",
    "age": 15,
    "carry": "Small",
    "energy_level": "VeryHigh",
    "level_of_independency": "Medium",
    "ambiente": "Amplo",
    "street": "Rua sete",
    "number": "2",
    "neighborhood": "15",
    "city": "MG",
    "state": "Belo Horizonte",
    "created_at": "2023-05-20T19:13:38.942Z",
    "org_id": "0ebed6fb-95a7-4c46-b239-fbe3f030a02c"
  }
}
```

- Response codes

| Código | Descrição                                                                         |
| ------ | --------------------------------------------------------------------------------- |
| `201`  | Recurso criado com sucesso.                                                       |
| `400`  | Erros de validação, campos informados não existem ou parâmetros de url inválidos. |
| `401`  | Sem permissão de acesso                                                           |
| `500`  | Erro no servidor.                                                                 |

### Buscar informações de um pet [/:petId]

Buscar informações de um pet

- Method `GET`

- Request (empty)

  - Response example

```json
{
  "pet": {
    "id": "c5a1fc93-c990-4f7d-a02b-99cb4716d1c2",
    "name": "Manuel",
    "about": "Muuito legalzinho",
    "age": 3,
    "carry": "Small",
    "energy_level": "VeryHigh",
    "level_of_independency": "Medium",
    "ambiente": "Amplo",
    "street": "Rua sete",
    "number": "2",
    "neighborhood": "15",
    "city": "Minas Gerais",
    "state": "MG",
    "created_at": "2023-05-19T00:11:12.124Z",
    "org_id": "84b1db45-195b-4b41-b7a0-c2912a79b32e",
    "petPhotos": [
      {
        "id": "19d9dc4f-1bd1-4efd-b764-05b66283b8d1",
        "name": "https://images.dog.ceo/breeds/african/n02116738_4720.jpg",
        "pet_id": "c5a1fc93-c990-4f7d-a02b-99cb4716d1c2"
      }
    ],
    "requirementsAdopted": [
      {
        "id": "c3ad898f-7ad6-47e0-af92-61201160456d",
        "description": "asdasda",
        "pet_id": "c5a1fc93-c990-4f7d-a02b-99cb4716d1c2"
      }
    ]
  }
}
```

- Response codes

| Código | Descrição                                                                         |
| ------ | --------------------------------------------------------------------------------- |
| `200`  | Resposta obtida com sucesso.                                                      |
| `400`  | Erros de validação, campos informados não existem ou parâmetros de url inválidos. |
| `500`  | Erro no servidor.                                                                 |

### Procurar pets [/]

Buscar informações de um pet

- Method `GET`

- Request (empty)

- Route query
  city = required
  carry = optional
  energyLevel = optional
  independency = optional
  age = optional

- Response example

```json
{
  "pets": [
    {
      "id": "055a9c07-e427-4a0e-b563-793caf57f64c",
      "name": "Nina",
      "about": "grande e fofa",
      "age": 10,
      "carry": "Big",
      "energy_level": "VeryHigh",
      "level_of_independency": "Medium",
      "ambiente": "Amplo",
      "street": "Rua sete",
      "number": "2",
      "neighborhood": "15",
      "city": "MG",
      "state": "Belo Horizonte",
      "created_at": "2023-05-20T16:42:01.213Z",
      "org_id": "84b1db45-195b-4b41-b7a0-c2912a79b32e"
    },
    {
      "id": "5bf0401d-5d34-4074-932a-1203ecd9cf43",
      "name": "Maria",
      "about": "pequena e fofa",
      "age": 15,
      "carry": "Small",
      "energy_level": "VeryHigh",
      "level_of_independency": "Medium",
      "ambiente": "Amplo",
      "street": "Rua sete",
      "number": "2",
      "neighborhood": "15",
      "city": "MG",
      "state": "Belo Horizonte",
      "created_at": "2023-05-20T17:08:31.288Z",
      "org_id": "0ebed6fb-95a7-4c46-b239-fbe3f030a02c"
    }
  ]
}
```

- Response codes

| Código | Descrição                                                                         |
| ------ | --------------------------------------------------------------------------------- |
| `200`  | Resposta obtida com sucesso                                                       |
| `400`  | Erros de validação, campos informados não existem ou parâmetros de url inválidos. |
| `500`  | Erro no servidor.                                                                 |
