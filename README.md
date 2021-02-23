# Next-Redirects-preact

Next-Redirects-preact is a small Redirect utility component for Next.js that has the ability to give fallback links for different conditions and with a small package size,that support Preact

<p align="center">
  <a href="https://www.npmjs.org/package/next-redirects-preact">
    <img src="https://img.shields.io/npm/v/next-redirects-preact/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/next-redirects-preact">
    <img src="https://img.shields.io/npm/dm/next-redirects-preact.svg" alt="Monthly download on NPM" />
  </a>
</p>

## How to install :

```zsh
#using yarn
yarn add Next-Redirects-preact
#using npm
npm i Next-Redirects-preact
```

## How to use

There is one component that can be used from the library , it can be used in two and hald ways

**V2.X.X**

-1 If you have a switch or more than condition

```tsx
if (user.logedin) {
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

-2 Using Next-Redirects component directry

```tsx
<Redirects href="/main" status={auth.logedin} />
```

-2.5 you can also use it with a fallback link 😆

```tsx
<Redirects href="/main" status={auth.logedin} fallback="/login" />
```

**V2.0.x**

-1 If you have a switch or more than condition

```tsx
if (user.logedin) {
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

-2 Using Next-Redirects component directry

```tsx
<Redirects href="/main" condition={auth.logedin} />
```

-2.5 you can also use it with a fallback link 😆

```tsx
<Redirects href="/main" condition={auth.logedin} fallback="/login" />
```

this is just and example you can use it for whatever usecases you can imagine 🛠
