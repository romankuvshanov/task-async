# Async

Установите зависимости:

```
npm install
```

В файле `src/Async.ts` выполните следующие задания:

1. Создайте функцию `mock`, которая принимает на вход аргумент `number` (количество миллисекунд) и возвращает `Promise`, который завершится через заданное количество миллисекунд со значением, переданным в аргумент.

2. Перепишите функцию `getData` так, чтобы она выполнялась быстрее.

```typescript
function getData(): Promise<number[]> {
    const result: number[] = [];

    return mock(100)
        .then((data1) => {
            result.push(data1);
            return mock(200);
        })
        .then((data2) => {
            result.push(data2);
            return mock(300);
        })
        .then((data3) => {
            result.push(data3);
            return result;
        });
}
```

3. Исправьте функцию `catchException` так, чтобы блок `try/catch` обрабатывал завершенный с ошибкой `Promise` и возвращал текст ошибки.

```typescript
function catchException() {
    try {
        Promise.reject(new Error('my error'));
    } catch (err) {
        return err.message;
    }
}
```

Проверить себя можно запустив команду `npm run test`.

После выполнения задания создайте pull request с решением.
