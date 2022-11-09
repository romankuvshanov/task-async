import { mock, getData, catchException } from './Async';

describe('Асинхронность в JS', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('Создание разрешенного промиса', () => {
        const pr = mock(100);

        jest.runAllTimers();

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);

        return pr.then((result) => {
            expect(result).toBe(100);
        });
    });

    it('Параллельное выполнение промисов', () => {
        const pr = getData();

        jest.advanceTimersByTime(300);

        expect(setTimeout).toHaveBeenCalledTimes(3);
        return pr.then((result) => {
            expect(result).toEqual([100, 200, 300]);
        });
    });

    it('Обработка ошибок в асинхронном коде', () => {
        return catchException().then((res) => {
            expect(res).toBe('my error');
        });
    });
});
