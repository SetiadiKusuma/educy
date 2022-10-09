<p align="center"><img width="368px" src="https://raw.githubusercontent.com/ijsto/cypress-snippets/master/images/logo.png"></p>
<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=iJS.cypress-snippets"><img src="https://vsmarketplacebadge.apphb.com/installs-short/iJS.cypress-snippets.svg?style=for-the-badge&colorA=85bf00&colorB=679400&label=DOWNLOADS"/></a> <a href="https://code.visualstudio.com/updates/v1_25"><img src="https://vsmarketplacebadge.apphb.com/rating-star/iJS.cypress-snippets.svg?style=for-the-badge&colorA=38B8F0&colorB=3726A6"/></a> 
<a href="https://ijs.to"><img src="https://img.shields.io/badge/Learn%20JavaScript-iJS.to%E2%86%92-gray.svg?colorA=B838F0&colorB=8721C3&style=for-the-badge"/></a>
</p>

# Cypress Testing Snippets by iJS

Thanks for giving this a go. Hope this helps and makes your coding more efficient and fun.

## Hello.

Animations coming soon.

> Pull requests for animations or any other contributions are most welcome!

## Installation

- Launch the Command Pallete (Ctrl + Shift + P or ⌘Cmd + Shift + P) and type "Install Extensions" (or navigate from the sidebar to Extensions tab).
- In search box type in "iJS" and choose the Cypress Snippets by iJS
- Install the extension (you may need to relaunch VS Code)
- Get a coffee, a cookie and celebrate by writing some cool Cypress.io tests more efficiently than ever! :)

Below is a list of all available snippets and the triggers of each one. The **⇥** means the `TAB` key.

## Must have React Snippets

> PRs are welcome to expand descriptions.

|    Trigger | Content              |
| ---------: | -------------------- |
| `cyintel→` | Cypress intellisense |
|   `cybef→` | beforeEach           |
|   `cyctx→` | context              |
|      `it→` | it                   |
|     `cyv→` | visit                |
|   `cyget→` | get                  |
|     `cyf→` | find                 |
|     `cy1→` | first                |
|     `cyt→` | type                 |
|  `cycont→` | contains             |
|     `cyc→` | click                |
|  `cyserv→` | server               |
|    `cyrt→` | route                |
|     `cyw→` | wait                 |
|    `cyvp→` | viewport             |
|   `cyreq→` | request              |
|   `cyadd→` | command              |

- More snippets to come, stay tuned or request a snippet in the issues!

## Expanded Snippets

### `cyintel` - Cypress intellisense

```javascript
/// <reference types="cypress" />
```

### `cybef` - beforeEach

```javascript
beforeEach(() => {
  \$1;
});

\$0;
```

### `cyctx` - context

```javascript
context("$1", () => {
  $0;
});
```

### `it` - it

```javascript
it("$1", () => {
  $0;
});
```

### `cyv` - visit

```javascript
cy.visit("$1");
$0;
```

### `cyget` - get

```javascript
cy.get('$1')${0:;}
```

### `cyf` - find

```javascript
find('$1')${0:;}
```

### `cy1` - first

```javascript
first()\${0:;}
```

### `cyt` - type

```javascript
type('$1')${0:;}
```

### `cycont` - contains

```javascript
contains(${2:'$3', }'$1')${0:;}
```

### `cyclk` - click

```javascript
click()\${0:;}
```

### `cyserv` - server

```javascript
cy.server();
\$0;
```

### `cyrt` - route

```javascript
cy.route(${2:'$3', }$1).as('${4}');\$0
```

### `cyw` - wait

```javascript
cy.wait(${1:'@${2}'});\$0
```

### `cyvp` - viewport

```javascript
cy.viewport($1, $2);
\$0;
```

### `cyreq` - request

```javascript
cy.request({
  method: "$1",
  url: "$2",
  headers: { "Accept-Language": "en-us" },
});
\$0;
```

### `cyadd` - add command

```javascript
Cypress.Commands.add('$1', ${3: { previous: '$4' \} , }$2);\$0
```

[iJS.to](https://ijs.to)
