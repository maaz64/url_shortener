
# URL Shortener

Developed Url Shortner API and token based authentication using Node.js, Express.js and MongoDB.

## What's a URL Shortener?
URL shortening is a technique to convert a long URL (site or page address) to a shorter version. This shorter version of the URL is usually cleaner and easier to share or remember. When someone accesses the shortened address, the browser redirects to the original (large) url address. It is also called URL redirection or URL redirect.

## How does a URL shortener work?

The basic workings of a URL shortener is straightforward. In the short URL generation part, the API takes in a POST request with the original URL as a payload. A unique ID is generated that corresponds to the original URL. This ID is added to the end of the base URL, i.e., the URL of your application.
The generated URL and the original URL are stored in the database.
When a user visits the shortened URL, the shortened URL is searched in the database. The user is redirected to the original URL if the URL is found. Also, the number of clicks on the URL increases by 1 in the database. Otherwise, it returns an error

## API Reference

#### POST | Sign Up

```http
https://url-shortener-two-beta.vercel.app/signup
```
#### POST | Sign In

```http
https://url-shortener-two-beta.vercel.app/signin
```



### Use authorized user’s token in header to gain access to below protected endpoint.

#### POST | URL Shortener
```http
  https://url-shortener-two-beta.vercel.app/shorten
```


#### GET | Visit Original Ur
```http

  https://url-shortener-two-beta.vercel.app/:urlId
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `urlId`      | `string` | **Required**. pass generated url Id of shortened url as params to visit the original url |


To check above APIs, I have used Postman. You can use any API platform.
## Authors

- [@maaz](https://github.com/maaz64)

