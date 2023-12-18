<p align="center">
<img src="./static/logo/440x196_round.png" alt="potber logo" height="200" />
</p>
<p align="center">
potber-auth is a semi-compliant OAuth authorization service built with <a href="https://kit.svelte.dev" target="_blank">svelte</a>. It provides clients with an API for authenticating and authorizing users on the german `forum.mods.de` board. The API is easy to use and follows the OAuth specification, albeit with limited functionality and compliance. The live service can be found at <a href="https://auth.potber.de" target="_blank">auth.potber.de</a>. Consuming apps needs to be allowlisted first (more on that below).
</p>

<!-- vscode-markdown-toc -->

- 1. [How to use](#Howtouse)
- 2. [Parameters](#Parameters)
- 3. [Limitations and how it differs from the OAuth specification](#LimitationsandhowitdiffersfromtheOAuthspecification)
  - 3.1. [No support for other flows besides `Implicit`](#NosupportforotherflowsbesidesImplicit)
  - 3.2. [No support for parameters that have not been specified here](#Nosupportforparametersthathavenotbeenspecifiedhere)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## 1. <a name='Howtouse'></a>How to use

`potber-auth` offers authentication according to the [OAuth 2.0 specification](https://datatracker.ietf.org/doc/html/rfc6749), specifically via the [Implicit flow](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.2). Feel free to check out the specification or simply follow these steps:

1. Start by creating a pull request that changes the [list of allowed redirect URIs](src/lib//config/allowed-redirect-uris.ts) and inserts a new entry representing your application. Make sure to follow the following syntax:

```js
	{
		name: 'my-app',
		id: '6c4defe9-4e08-420a-90ab-dbce69906fef',
		allowedRedirectUris: [
			'https://my-app.com/auth/redirect'
		]
	}
```

> ℹ `id` needs to be a newly generated `UUID` (Version 4). There are online generators where you can generate such an id, for example [this one](https://www.uuidgenerator.net/version4).

Make sure that you include the entire URI (including the protocol, the domain name and the entire path). Make sure that you get the details right (e.g. trailing slashes). If you need more than one URI allowlisted, make sure to include them all.

Tthe `redirect_uri` is a web page that you want `potber-auth` to redirect the user after a succesful login. On that page, you will be able to retrieve `token` and use it in your application.

2. When you want your users to sign in, redirect them to `potber-auth`. Change `https://my-app.de/auth/redirect` whatever `redirect_uri` you're using.

```
https://auth.potber.de/authorize?response_type=token&redirect_uri=https%3A%2F%2Fmy-app.de%2Fauth%2Fredirect
```

> ℹ Note that you will likely need to encode your URI. For example in JavaScript, you can use [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).

## 2. <a name='Parameters'></a>Parameters

- `response_type` (required) The response type. MUST be `token` since other flows are currently not supported.
- `client_id` (required) Your application's client id as specified [here](src/lib/config/clients.config.ts),
- `redirect_uri` (required) The URI that the user should be redirected to after a successful login. Must match whatever has been specified [here](src/lib/config/clients.config.ts).

## 3. <a name='LimitationsandhowitdiffersfromtheOAuthspecification'></a>Limitations and how it differs from the OAuth specification

As mentioned earlier, `potber-auth` is semi-compliant in regards to the OAuth specification. The following chapter describes its limitations as well as how and why it differs from the spec.

### 3.1. <a name='NosupportforotherflowsbesidesImplicit'></a>No support for other flows besides `Implicit`

`potber-oauth` does not provide support for any OAuth flows besides `Implicit`. This means that more secure flows like `Authorization Code` are not available. The reason for this is that `potber-oauth` is a very niche usecase. The data it provides access to is not sensitive and attack vectors like MitM attacks are extremely unlikely. The benefit of the `Implicit` flow is that clients request the token directly, making it very convenient and simple to implement for both the authorization server (`potber-auth`) and the client.

### 3.2. <a name='Nosupportforparametersthathavenotbeenspecifiedhere'></a>No support for parameters that have not been specified here

Any (optional) parameters [mentioned by the OAuth specification](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.1) that have not been specifically mentioned in this document are not being supported.
