# Minimal repo to reproduce jest --coverage problem

Run

```
npm i
npm run test
```

to run jest tests with `--coverage` activated. Coverage will fail on the spread destructuring statement, however tests run fine.
