# Project screenshots

Drop real screenshots here, one folder per project:

```
src/assets/projects/
├── obloga/
├── megaplastic/
├── cargo-connect/
└── fitnessapp/
```

Recommended: a wide `cover` image (~1600×900, PNG or JPG/WebP) plus optional
detail shots.

## Wiring an image into a project

In `src/data/projects.ts`:

```ts
import oblogaCover from "../assets/projects/obloga/cover.png";
import oblogaShot1 from "../assets/projects/obloga/01.png";

// ...inside the matching project object:
coverImage: oblogaCover,
gallery: [oblogaShot1],
```

Until `coverImage` is set, the card and modal show a neutral placeholder that
says "Screenshot to be added" — nothing renders broken.
