# Next-Redirects-Preact

<p align="center">
  <a href="https://www.npmjs.org/package/next-redirects-preact">
    <img src="https://img.shields.io/npm/v/next-redirects-preact/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/next-redirects-preact">
    <img src="https://img.shields.io/npm/dm/next-redirects-preact.svg" alt="Monthly download on NPM" />
  </a>
</p>

Next-Redirects-Preact is a small Redirect utility component for Next.js that can give fallback links for different conditions and with a small package size

## Features

- 💡 Rich api options
- 🔥 Small and Fast
- 🛠 Fully supports esm

## How to install

```zsh
  #using yarn
  yarn add Next-Redirects-Preact
  #using npm
  npm i Next-Redirects-Preact
```

## How to use

There is one component that can be used, it can be used in more than one way

You can use all these props with `<Redirects>` component

| Prop      |                                                     usage                                                     | type    |
| :-------- | :-----------------------------------------------------------------------------------------------------------: | ------- |
| href      |                                       The link you want to redirect to                                        | String  |
| condition |                                  The boolean that decides to redirect or not                                  | boolean |
| fallBack  |                            (optional) The Fallback link if the condition is false                             | String  |
| asPath    |                (optional) The path mask if you want to show a different url than the real one                 | string  |
| shallow   | (optional) The shallow option in next router for [more info](https://nextjs.org/docs/routing/shallow-routing) | boolean |

example :

```tsx
<Redirects href="/main" condition={auth.loggedin} />
```

If you have a switch or more than the condition

```tsx
if (user.loggedin) {
  <Redirects href="/Dashboard" />;
}
switch (condistionX) {
  case admin:
    <Redirects href="/Dashboard" />;
    break;
  case anonymous:
    <Redirects href="/Login" />;
    break;
  default:
    <Redirects href="/main" />;
}
```

This is just an example you can use it for whatever use cases you can imagine 🛠
