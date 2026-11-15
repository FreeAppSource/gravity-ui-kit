# Gravity UI Kit

> 👨‍💻 Developed by **[Suresh Kumar Meesala](https://github.com/SureshKumarMeesala)** · 🎨 UI design by **Louis Oliver Moody** (credits below)

A mobile app built with **React Native (0.88+)**, **Expo SDK 58+** and **Expo Router**, using **JavaScript and JSX (`.js`, `.jsx`)**. Every screen is built from the original Sketch design `Gravity.sketch` by **Louis Oliver Moody**: one route per artboard, with the artboard's layout, colours, images and text.

![Gravity UI Kit screens](./showcase.jpg)

## 📱 Screens (22 design artboards)

Listed in the order of the app's flow. "Taps" is the number of tap targets wired on the screen (buttons, tabs, back arrows, list rows).

| # | Screen (artboard) | Route | Size | Taps |
|---|---|---|---|---|
| 1 | **Intro 1.0** · start screen | `src/app/intro-1-0.jsx` | 375 × 812 | 1 |
| 2 | **Intro 1.1** | `src/app/intro-1-1.jsx` | 375 × 812 | 1 |
| 3 | **Get started** | `src/app/get-started.jsx` | 375 × 812 | 2 |
| 4 | **Email address** | `src/app/email-address.jsx` | 375 × 812 | 2 |
| 5 | **Password** | `src/app/password.jsx` | 375 × 812 | 2 |
| 6 | **FaceID** | `src/app/faceid.jsx` | 375 × 812 | 1 |
| 7 | **Home Init** | `src/app/home-init.jsx` | 375 × 812 | 7 |
| 8 | **Top Up** | `src/app/top-up.jsx` | 375 × 812 | 2 |
| 9 | **Home** | `src/app/home.jsx` | 375 × 812 | 8 |
| 10 | **Analytics** | `src/app/analytics.jsx` | 375 × 812 | 7 |
| 11 | **Meet - Issac** | `src/app/meet-issac.jsx` | 375 × 812 | 2 |
| 12 | **Payments** | `src/app/payments.jsx` | 375 × 812 | 6 |
| 13 | **Cards** | `src/app/cards.jsx` | 375 × 812 | 10 |
| 14 | **Menu** (side drawer) | `src/app/menu.jsx` | 260 × 812 | 6 |
| 15 | **Transaction** | `src/app/transaction.jsx` | 375 × 812 | 7 |
| 16 | **Issac Conversation - typed** | `src/app/issac-conversation-typed.jsx` | 375 × 1208 | 2 |
| 17 | **View Pin** | `src/app/view-pin.jsx` | 375 × 812 | 6 |
| 18 | **Freeze card** | `src/app/freeze-card.jsx` | 375 × 812 | 6 |
| 19 | **Set limit** | `src/app/set-limit.jsx` | 375 × 812 | 2 |
| 20 | **Security** | `src/app/security.jsx` | 375 × 812 | 1 |
| 21 | **Transaction Extended** | `src/app/transaction-extended.jsx` | 375 × 812 | 6 |
| 22 | **Issac Conversation - Voice** | `src/app/issac-conversation-voice.jsx` | 375 × 999 | 1 |

Screenshots of every screen are in [`screenshots/`](./screenshots).

## 🧩 How it's built

- `src/screens/*.json`: each design artboard converted to screen data (vector shapes, gradients, image fills, masks, shadows, blurs and rich text, positioned as in the design), plus its tap targets
- `src/sketch/SketchScreen.jsx`: draws a screen at the device's width with `react-native-svg`, native `Text`/`TextInput` and `expo-blur`, and handles navigation between screens
- `src/app/`: Expo Router routes, one per artboard (`index.jsx` opens the start screen)
- `assets/images/`: images used by the design

## 🛠️ Tech Stack

- **Framework**: React Native 0.88+ / Expo SDK 58+
- **Navigation**: Expo Router (file-based routing)
- **Language**: JavaScript & JSX (`.js`, `.jsx`)
- **Rendering**: `react-native-svg`, `expo-blur`
- **Fonts**: Google Fonts via `@expo-google-fonts` (Inter, Poppins), standing in for the design's original fonts where those aren't free

<!-- run-locally:start -->

## ▶️ Run locally

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for the web, or scan the QR code with Expo Go.

<!-- run-locally:end -->

<!-- developer:start -->

## 👨‍💻 Developer

This React Native app was developed by **Suresh Kumar Meesala**.

| | |
|---|---|
| Developer | [Suresh Kumar Meesala](https://github.com/SureshKumarMeesala) |
| GitHub | [@SureshKumarMeesala](https://github.com/SureshKumarMeesala) |
| Organization | [FreeAppSource](https://github.com/FreeAppSource) |
| Repository | <https://github.com/FreeAppSource/gravity-ui-kit> |

<!-- developer:end -->

---

<!-- design-credits:start -->

## 🎨 Design Credits

This app is based on the free **Gravity UI Kit** design by **Louis Oliver Moody**, downloaded from Sketch App Sources. All visual design credit goes to the designer. The screens are reproduced from the original Sketch file; fonts that aren't free are replaced with similar Google Fonts, so some details may differ slightly from the original.

| | |
|---|---|
| Designer | [Louis Oliver Moody](https://www.sketchappsources.com/contributor/louismoody) |
| Original design | [Gravity UI Kit](https://gumroad.com/louismoody#pzzVy) |
| Downloaded from | [Sketch App Sources](https://www.sketchappsources.com/free-source/4427-gravity-ui-kit-sketch-freebie-resource.html) |
| Dribbble | <http://www.dribbble.com/louismoody> |
| Twitter | <https://twitter.com/_louisomoody> |
| Website | <http://www.louismoody.com/> |
| Original file | `Gravity.sketch` |
| License / usage | Creative Commons Attribution terms (share and adapt, even commercially, with credit and a link to the licence), stated in the included Licence.pdf. Copyright Ignite Projects / Louis Moody 2019. |

**Attribution:**

> UI design: "Gravity UI Kit" by Louis Oliver Moody (https://gumroad.com/louismoody#pzzVy), downloaded from Sketch App Sources (https://www.sketchappsources.com/free-source/4427-gravity-ui-kit-sketch-freebie-resource.html).

The original design source files are not included in this repository; get them from the links above. This app's **code** is released under the [MIT License](./LICENSE); the visual design remains the designer's (see [NOTICE](./NOTICE)).

Photos, brand logos and avatars inside the design may belong to third parties and are not covered by the designer's permission.

<!-- design-credits:end -->
