## Storage notes

## 1. LocalStorage

- `LocalStorage` is a simple key-value store that allows you to store data as strings in the browser.
- Data stored in `LocalStorage` persists even after the browser is closed and reopened.
- It has a size limit (usually 5 MB) and is synchronous, so it may not be suitable for large datasets.
- Example usage:

```js
// Save todoList to LocalStorage
localStorage.setItem("todoList", JSON.stringify(todoList));

// Retrieve todoList from LocalStorage
const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
```

## 2. SessionStorage

- Similar to `LocalStorage`, but the data is cleared when the session ends (when the browser is closed).
- Useful for temporary storage that should be available during the user's session.
- Example usage:

```js
// Save todoList to SessionStorage
sessionStorage.setItem("todoList", JSON.stringify(todoList));

// Retrieve todoList from SessionStorage
const storedTodoList = JSON.parse(sessionStorage.getItem("todoList"));
```

## 3. Cookies

- Cookies are typically used for small amounts of data and are sent with each HTTP request.
- They have a size limit (usually 4 KB per cookie) and are subject to domain restrictions.
- Example usage:

```js
// Save todoList to a cookie
document.cookie = `todoList=${JSON.stringify(todoList)}`;
// Retrieve todoList from a cookie
const storedTodoList = JSON.parse(getCookie("todoList"));

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}
```

## 4. IndexedDB

- A low-level API for storing large amounts of structured data. It supports transactions and indexes.
- Suitable for more complex applications with larger datasets.
- Requires more code compared to `LocalStorage` or `SessionStorage`.
- Example usage:

```js
const request = indexedDB.open("TodoDB", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const objectStore = db.createObjectStore("todos", { keyPath: "id" });
};

request.onsuccess = (event) => {
  const db = event.target.result;
  const transaction = db.transaction(["todos"], "readwrite");
  const objectStore = transaction.objectStore("todos");

  // Save todoList to IndexedDB
  todoList.forEach((todo) => objectStore.put(todo));
  // Retrieve todoList from IndexedDB
  const getRequest = objectStore.getAll();
  getRequest.onsuccess = () => {
    const storedTodoList = getRequest.result;
  };
};
```

## 5. Web SQL

- Web SQL Database is a deprecated web database standard. It provides a simple database API for storing and retrieving data in a client-side database.
- It uses SQL queries to interact with the database.
- While it was supported in some browsers, it is no longer recommended for use in modern web development. Developers are encouraged to use other storage options such as IndexedDB.

> Example (not recommended for modern use):

```js
// Open a database
const db = openDatabase("myDatabase", "1.0", "My Database", 2 * 1024 * 1024);
// Execute a SQL query
db.transaction((tx) => {
  tx.executeSql("CREATE TABLE IF NOT EXISTS todos (id unique, task)");
  tx.executeSql("INSERT INTO todos (id, task) VALUES (?, ?)", [
    1,
    "Example Task",
  ]);
});
```

## 6. Cache Storage

- Cache Storage is part of the Service Worker API and is used for storing cached responses and assets.
- It is commonly used to implement caching strategies in progressive web applications (PWAs) to improve offline capabilities and performance.
- Cache Storage is not typically used for general-purpose data storage like todo lists, but it is crucial for managing the caching of web resources.

> Example (caching with Service Worker):

```js
// Service Worker

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("myCache").then((cache) => {
      return cache.addAll(["/index.html", "/styles.css", "/app.js"]);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
```

It's important to note that Web SQL is deprecated, and developers are encouraged to use IndexedDB for client-side storage needs. Cache Storage, on the other hand, serves a specific purpose related to service workers and web caching strategies.

For most client-side data storage needs in modern web development, IndexedDB is a more suitable choice, offering a robust and flexible solution.
